import React from "react"
import { useState } from 'react';
import Video from "../common/Video";
function MeetFyndo({ id, smallHeading, text, bigHeadingOne, subHeadingOne, bigHeadingTwo, subHeadingTwo, bigHeadingthree, subHeadingThree, videoSrc }) {
  return (
    <div className="bg-[#191919] relative min-h-[573px] lg:min-h-screen h-full" id={id}>
        <div className="absolute inset-0">
            <Video videoSrc={videoSrc} duration="506" />
        </div>
        <div className="container relative h-full flex items-center min-h-[573px] lg:min-h-screen">
            <div className="z-50">
                <div className="flex items-center flex-auto gap-3 relative z-50">
                    <span className={`h-2 w-2 rounded-full bg-black`}></span>
                    <p className={`text-[13.23px] leading-4 tracking-[-0.14px] text-black`}>{smallHeading}</p>
                </div>
                <p className="text-sm lg:text-[18.87px] max-w-[470px] w-full text-black leading-[25px] lg:pt-[42px] py-5 lg:pb-[83px] font-stk">{text}</p>
                <div className="flex flex-col gap-5 lg:gap-10 lg:max-w-[373px] w-full">
                    <div className="flex flex-col gap-2">
                        <h2 className="text-3xl lg:text-[45px] tracking-[-1.44px] leading-10 lg:leading-12 text-black font-stk-book">{bigHeadingOne}</h2>
                        <p className="text-[15.38px] max-w-[280px] w-full text-[rgba(0,0,0,0.41)] leading-5 tracking-[-0.16px] font-stk">{subHeadingOne}</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h2 className="text-3xl lg:text-[45px] leading-10 lg:leading-12 text-black font-stk-book">{bigHeadingTwo}</h2>
                        <p className="text-base text-[rgba(0,0,0,0.41)] leading-5 font-stk">{subHeadingTwo}</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h2 className="text-3xl lg:text-[45px] leading-10 lg:leading-12 text-black font-stk-book">{bigHeadingthree}</h2>
                        <p className="text-base text-[rgba(0,0,0,0.41)] leading-5 font-stk">{subHeadingThree}</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="absolute inset-0 z-20 bg-white/60"></div>
    </div>
  )
}

export default MeetFyndo