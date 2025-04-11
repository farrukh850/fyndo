import React from "react"
import { useState } from 'react';
import Video from "../common/Video";
function MeetFyndo({ smallHeading, text, bigHeadingOne, subHeadingOne, bigHeadingTwo, subHeadingTwo, bigHeadingthree, subHeadingThree, videoSrc }) {
  return (
    <div className=" bg-[#191919]">
       <div className="container">
        <div className="flex flex-col lg:flex-row justify-between items-stretch">
                <div className="flex flex-col flex-1 pt-[55px] pb-[103px]">
                    <div className="flex items-center flex-auto gap-3 relative z-50">
                        <span className={`h-2 w-2 rounded-full bg-white`}></span>
                        <p className={`text-[13.23px] leading-4 tracking-[-0.14px] text-white`}>{smallHeading}</p>
                    </div>
                    <p className="text-[18.87px] max-w-[470px] w-full text-white leading-[25px] pt-[42px] pb-[83px] font-stk">{text}</p>
                    <div className="flex flex-col gap-10 max-w-[373px] w-full">
                        <div className="flex flex-col gap-2">
                            <h2 className="text-[45px] tracking-[-1.44px] leading-[48px] text-white font-abaliss">{bigHeadingOne}</h2>
                            <p className="text-[15.38px] max-w-[280px] w-full text-white/41 leading-5 tracking-[-0.16px] font-stk">{subHeadingOne}</p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h2 className="text-[45px] leading-12 text-white font-abaliss">{bigHeadingTwo}</h2>
                            <p className="text-base text-white/41 leading-5 font-stk">{subHeadingTwo}</p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h2 className="text-[45px] leading-12 text-white font-abaliss">{bigHeadingthree}</h2>
                            <p className="text-base text-white/41 leading-5 font-stk">{subHeadingThree}</p>
                        </div>
                    </div>
                </div>
                <div className="flex-1">
                    <Video videoSrc={videoSrc} duration="506" />
                </div>
            </div>
       </div>
    </div>
  )
}

export default MeetFyndo