import React from "react"
import Video from "../common/Video";
import { Link } from "react-router-dom";
function CommonVideoSection({ id, packageName, deliveryTime, videoMainHeading, videoSubHeading, VideoPara, VideoDeliveryTime, VideoCost, bgColor, videoRightColor, videoSrc }) {
  return (
    <div className={`justify-between relative pb-4 lg:pb-0`} style={{ backgroundColor: bgColor }} id={id}>
        <div className="container flex items-stretch flex-col lg:flex-row min-h-[400px] lg:min-h-[650px]">
            <div className="flex-[60%] mt-5 lg:mt-0">
                <div className="relative w-full lg:w-[60%] lg:absolute lg:left-0 lg:top-0 lg:bottom-0 lg:right-0 h-full">
                    <Video videoSrc={videoSrc} duration="506"
                    />
                </div>
                <div className="p-5 lg:p-[52px] pl-0 w-full h-full flex flex-col justify-between items-start z-50 relative">
                    <div className="flex items-center gap-3 pt-4 relative">
                        <span className={`h-2 w-2 rounded-full bg-white`}></span>
                        <p className={`text-sm leading-3.5 text-white font-stk-book`}>{packageName}</p>
                    </div>
                    <div className="flex flex-col justify-end mt-5 lg:mt-0">
                        <h4 className="text-lg lg:text-[26px] text-white font-abaliss">{packageName}</h4>
                        <h5 className="text-base lg:text-[22px] text-white/60 font-stk-book">{deliveryTime}</h5>
                    </div>
                </div>
            </div>
            <div className={`flex-[40%] bg-[${videoRightColor}] relative z-50 pt-8 pb-[52px] px-6 max-w-[495px] w-full`}>
                <div className="flex flex-col justify-between items-stretch h-full">
                    <div className="flex flex-col gap-4">
                        <h3 className="text-2xl lg:text-4xl text-white leading-8 lg:leading-10 font-stk-book">{videoMainHeading}  <br /><b className="text-white/42 font-normal">{videoSubHeading}</b></h3>
                        <p className="text-sm leading-5 font-stk-book text-white tracking-[-0.4px]">{VideoPara}.</p>
                    </div>
                    <div className="flex flex-col mt-5 lg:mt-0">
                        <p className="text-xs leading-4 text-white/60 font-stk-book">Timeline</p>
                        <div className="flex items-center gap-2 font-stk-book">
                            <p className="text-xs leading-4 text-white">{VideoDeliveryTime}</p>
                            <span className={`h-[3px] w-[3px] rounded-full bg-white`}></span>
                        </div>
                        <div className="flex items-center h-[50px] gap-1 font-abaliss">
                            <h6 className="text-[22px] text-white leading-7 font-stk-book font-medium">{VideoCost}- </h6>
                            <p className="text-xs text-white/60 font-stk-book">per project</p>
                        </div>
                        <Link className="w-[114px] h-[36px] rounded-[160px] bg-white cursor-pointer flex items-center justify-center"><p className="text-sm text-[#292929]">Pick a Plan</p></Link>
                    </div>
                </div>
            </div>
        </div>
        <div className={`absolute h-full w-[30%] hidden lg:block bg-[${videoRightColor}] right-0 top-0`}></div>
    </div>
  )
}

export default CommonVideoSection