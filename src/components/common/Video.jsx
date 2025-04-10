import React from 'react'
import { useState } from 'react';
function Video({ thumbnailUrl, videoId, duration }) {
    const [showVideo, setShowVideo] = useState(false);

    // Format duration (assuming duration is in seconds)
    const formatDuration = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    };
  return (
    <div className="relative">
        {/* Video Thumbnail Container */}
        <div 
            className="relative cursor-pointer group w-full h-72 lg:h-[500px] xl:h-[740px]" 
            onClick={() => setShowVideo(true)}
        >
            {/* Thumbnail Image */}
            {/* <img
            src={thumbnailUrl}
            alt="Video thumbnail"
            className="w-full h-full object-cover rounded-lg shadow-lg"
            /> */}

            {/* Play Button (Bottom Right) */}
            <div className="absolute bottom-4 right-4 bg-white rounded-full h-12 w-12 flex items-center justify-center group-hover:bg-red-600 transition-colors z-50">
                <img src="/images/play-btn.svg" alt="Play Button" />
            </div>

            {/* Duration Timer (Center) */}
            <div className="absolute inset-0 flex items-center justify-center z-50">
                <span className="flex items-center gap-2 bg-[#232323] text-white px-3 py-2 rounded-3xl backdrop-blur-[20px] shadow-[0px_4px_15px_0px_rgba(0,0,0,0.15)]">
                <img src="/images/play-btn-white.svg" className="w-1.5" alt="Play Button White" />
                    <p className="text-xs text-white">{formatDuration(duration)}</p>
                </span>
            </div>
        </div>
        {/* YouTube Popup Modal */}
        {showVideo && (
        <div className="fixed inset-0 bg-black/90 z-[10000] flex items-center justify-center p-4">
        <div className="relative w-full max-w-4xl">
            {/* Close Button */}
            <button
            onClick={() => setShowVideo(false)}
            className="absolute -top-12 right-0 text-white hover:text-red-500 cursor-pointer"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                    />
                </svg>
            </button>

            {/* YouTube Iframe */}
            <div className="w-full h-16">
            <iframe
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                className="w-full h-[500px] rounded-lg"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>


            </div>
        </div>
        </div>
        )}
    </div>
  )
}

export default Video