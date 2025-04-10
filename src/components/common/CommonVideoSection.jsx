import React from "react"
import Video from "../common/Video";

function CommonVideoSection({ packageName, deliveryTime, videoMainHeading, videoSubHeading, VideoPara, VideoDeliveryTime, VideoCost, bgColor, videoRightColor }) {
  return (
    <div className={`justify-between relative pb-4 lg:pb-0`}  style={{ backgroundColor: bgColor }}>
        <div className="container flex items-stretch flex-col lg:flex-row">
            <div className="flex-[60%]">
                <div className="relative">
                    <Video 
                        thumbnailUrl="https://fakeimg.pl/1000x1000/111/909090" 
                        videoId="u31qwQUeGuM" 
                        duration={528} 
                    />
                    <div className="absolute top-0 left-0 p-14 w-full h-full flex flex-col justify-between items-start">
                        <div className="flex items-center gap-3 pt-4 relative">
                            <span className={`h-2 w-2 rounded-full bg-white`}></span>
                            <p className={`text-sm leading-3.5 text-white font-stk`}>{packageName}</p>
                        </div>
                        <div className="flex flex-col justify-end">
                            <h4 className="text-[26px] text-white font-abaliss">{packageName}</h4>
                            <h5 className="text-[22px] text-white/60 font-stk">{deliveryTime}</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`flex-[40%] bg-[${videoRightColor}] relative z-50 py-8 px-6`}>
                <div className="flex flex-col justify-between items-stretch h-full">
                    <div className="flex flex-col gap-4">
                        <h3 className="text-4xl text-white leading-10 font-stk">{videoMainHeading}  <br /><b className="text-white/42 font-normal">{videoSubHeading}</b></h3>
                        <p className="text-sm leading-5 font-stk text-white tracking-[-0.4px]">{VideoPara}.</p>
                    </div>
                    <div className="flex flex-col">
                        <p className="text-xs leading-4 text-white/60 font-stk">Timeline</p>
                        <div className="flex items-center gap-2 font-stk">
                            <p className="text-xs leading-4 text-white">{VideoDeliveryTime}</p>
                            <span className={`h-[3px] w-[3px] rounded-full bg-white`}></span>
                        </div>
                        <div className="flex items-center h-[50px] gap-1 font-abaliss">
                            <h6 className="text-[22px] text-white leading-7 font-stk font-medium">{VideoCost}- </h6>
                            <p className="text-xs text-white/60 font-stk">per project</p>
                        </div>
                        <button className="w-[114px] h-[36px] rounded-[160px] bg-white cursor-pointer flex items-center justify-center mt-3"><p className="text-base text-[#292929] leading-4 font-stk">Order Now</p></button>
                    </div>
                </div>
            </div>
        </div>
        <div className={`absolute h-full w-[30%] hidden lg:block bg-[${videoRightColor}] right-0 top-0`}></div>
    </div>
  )
}

export default CommonVideoSection