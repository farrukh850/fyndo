import React from "react"
import { useState } from 'react';
import Video from "../common/Video";
function MeetFyndo({ smallHeading, text, bigHeadingOne, subHeadingOne, bigHeadingTwo, subHeadingTwo, bigHeadingthree, subHeadingThree }) {
  return (
    <div className="pt-14 pb-25 bg-[#191919]">
       <div className="container">
        <div className="flex flex-col lg:flex-row justify-between items-center">
                <div className="flex flex-col flex-1 ">
                    <div className="flex items-center flex-auto gap-3 pt-4 relative z-50">
                        <span className={`h-2 w-2 rounded-full bg-white`}></span>
                        <p className={`text-sm leading-3.5 text-white font-stk`}>{smallHeading}</p>
                    </div>
                    <p className="text-lg text-white leading-6 pt-11 pb-22 font-stk">{text}.</p>
                    <div className="flex flex-col gap-10">
                        <div className="flex flex-col gap-2">
                            <h2 className="text-[45px] leading-12 text-white font-abaliss">{bigHeadingOne}</h2>
                            <p className="text-base text-white/41 leading-5 font-stk">{subHeadingOne}s</p>
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
                    <Video 
                        thumbnailUrl="https://fakeimg.pl/1000x1000/111/909090" 
                        videoId="u31qwQUeGuM" 
                        duration={528} 
                    />
                </div>
            </div>
       </div>
    </div>
  )
}

export default MeetFyndo