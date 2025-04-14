import React from "react"

function SpeedyService() {
  return (
    <div className="lg:pt-[109px] lg:pb-[185px] py-10" id="timeline">
        <div className="container">
            <div className="flex items-start font-stk flex-col lg:flex-row gap-4 lg:gap-0">
                <div className="flex items-center flex-[16%] gap-3 relative z-50 py-3">
                    <span className={`h-2 w-2 rounded-full bg-[#292929]`}></span>
                    <p className={`text-sm leading-4 tracking-[-0.01em] text-[#131313]`}>Timeline</p>
                </div>
                <div className="flex flex-col flex-[84%]">
                    <h1 className="text-4xl lg:text-[60px] leading-[38px] lg:leading-[60px] text-[rgba(0,0,0,0.6)] tracking-[-2.4px]">Speedy service, No stress–
                    <b className="text-black block font-normal">We’re here for you.</b></h1>
                    <p className="text-[13.34px] mt-7 tracking-[-0.14px] leading-4 text-black max-w-[331px] w-full">We’ve been there. Experience meets speed. Next-day screening, 72-hour estimates— no hassle, no compromise.</p>
                    <div className="flex items-center mt-4 lg:mt-[202px] justify-between flex-col lg:flex-row gap-4 lg:gap-2">
                        <div className="flex flex-1 flex-col relative w-full">
                            <p className="text-base leading-4 text-[rgba(4,3,1,0.41)]">Step 1</p>
                            <h4 className="text-base leading-5 text-[#292929]">Choose the <br /> Right Plan</h4>
                            <div className="absolute -top-[100%] w-full right-0 left-0">
                                <div className="w-full h-10 hidden lg:block">
                                    <img src="/images/bars.png" className="w-full h-full object-contain flex-1" alt="Red Bar" />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-1 flex-col relative w-full">
                            <p className="text-base leading-4 text-[rgba(4,3,1,0.41)]">Step 2</p>
                            <h4 className="text-base leading-5 text-[#292929]">Upload Project <br /> Files & Details</h4>
                            <div className="absolute -top-[100%] w-full right-0 left-0">
                                <div className="w-full h-10 hidden lg:block">
                                    <img src="/images/bars.png" className="w-full h-full object-contain flex-1" alt="Red Bar" />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-1 flex-col relative w-full">
                            <p className="text-base leading-4 text-[rgba(4,3,1,0.41)]">Step 3</p>
                            <h4 className="text-base leading-5 text-[#292929]">Get your document or <br /> support by the next day</h4>
                            <div className="absolute -top-[100%] w-full right-0 left-0">
                                <div className="w-full h-10 hidden lg:block">
                                    <img src="/images/bars.png" className="w-full h-full object-contain flex-1" alt="Red Bar" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SpeedyService