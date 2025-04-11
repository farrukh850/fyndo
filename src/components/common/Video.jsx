import React, { useRef, useState, useEffect } from 'react';

function Video({ videoSrc, duration  }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  // Format duration (MM:SS)
  const formatDuration = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };
  useEffect(() => {
    const attemptPlay = () => {
      const video = videoRef.current;
      if (!video) return;
      
      // Ensure video is muted (Firefox requirement)
      video.muted = true;
      
      const playPromise = video.play();
      
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsPlaying(true))
          .catch(error => {
            console.log("Autoplay prevented:", error);
            // Fallback: show play button and let user initiate playback
            setIsPlaying(false);
          });
      }
    };
  
    // Add event listener for when Firefox might allow playback
    videoRef.current?.addEventListener('canplaythrough', attemptPlay);
    
    attemptPlay();
    
    return () => {
      videoRef.current?.removeEventListener('canplaythrough', attemptPlay);
    };
  }, []);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="relative w-full h-full">
      {/* Video Element */}
        <video
            ref={videoRef}
            className="w-full h-full object-cover"
            autoPlay
            muted
            playsInline
            loop
            controls={false}
            >
            <source src={videoSrc} type="video/mp4" />
            <source src="/videos/v7.webm" type="video/webm" /> {/* Add WebM version as fallback */}
        </video>
      
      {/* Play/Pause Button (Bottom Right) */}
      <button
        onClick={togglePlayPause}
        className="absolute bottom-[74px] right-[53px] bg-white  rounded-full h-12 w-12 flex items-center justify-center transition-colors z-50 cursor-pointer"
        aria-label={isPlaying ? "Pause" : "Play"}
      >
        {isPlaying ? (
          
            <img src="/images/pause.svg" className="w-5" alt="" />
        ) : (
            <img src="/images/play-btn.svg" className="w-3" alt="" />
        )}
      </button>
      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span className="flex items-center gap-2 bg-[#232323] text-white px-3 py-2 rounded-3xl backdrop-blur-[20px] shadow-[0px_4px_15px_0px_rgba(0,0,0,0.15)]">
            <img src="/images/play-btn-white.svg" className="w-1.5" alt="Play Button White" />
            <p className="text-xs text-white">{formatDuration(duration)}</p>
          </span>
        </div>
      )}
    </div>
  );
}

export default Video;