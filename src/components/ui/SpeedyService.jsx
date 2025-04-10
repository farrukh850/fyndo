import React from "react"

function SpeedyService() {
  return (
    <div className="py-10 lg:py-28">
        <div className="container">
            <div className="flex items-start font-stk flex-col lg:flex-row gap-4 lg:gap-0">
                    <div className="flex items-center flex-[20%] gap-3 pt-4 relative z-50">
                            <span className={`h-2 w-2 rounded-full bg-[#292929]`}></span>
                            <p className={`text-sm leading-3.5 text-[#131313]`}>Timeline</p>
                    </div>
                    <div className="flex flex-col gap-7 flex-[80%]">
                        <h1 className="text-4xl lg:text-[57px] leading-10 lg:leading-16 text-[rgba(0,0,0,0.6)] tracking-[-0.14px]">Speedy service, No stress– 
                        <b className="text-black block font-normal">We’re here for you.</b></h1>
                        <p className="text-sm leading-4 text-black max-w-[331px] w-full">We’ve been there. Experience meets speed. Next-day screening, 72-hour estimates— no hassle, no compromise.</p>
                        <div className="flex items-center mt-4 lg:mt-32 justify-between flex-col lg:flex-row gap-4 lg:gap-2">
                            <div className="flex flex-1 flex-col relative w-full lg:w-[20%]">
                                <p className="text-base leading-4 text-[rgba(4,3,1,0.41)]">Step 1</p>
                                <h4 className="text-xl leading-6 text-[#292929]">Choose the Right Plan</h4>
                                <div className="absolute -top-[180%] w-full right-0 left-0">
                                    <div className="w-full h-10 hidden lg:block">
                                        <img src="/images/bars.png" className="w-full h-full object-contain flex-1" alt="Red Bar" />
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-1 flex-col relative w-full lg:w-[20%]">
                                <p className="text-base leading-4 text-[rgba(4,3,1,0.41)]">Step 2</p>
                                <h4 className="text-xl leading-6 text-[#292929]">Upload Project Files & Details</h4>
                                <div className="absolute -top-[180%] w-full right-0 left-0">
                                    <div className="w-full h-10 hidden lg:block">
                                        <img src="/images/bars.png" className="w-full h-full object-contain flex-1" alt="Red Bar" />
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-1 flex-col relative w-full lg:w-[20%]">
                                <p className="text-base leading-4 text-[rgba(4,3,1,0.41)]">Step 3</p>
                                <h4 className="text-xl leading-6 text-[#292929]">Get your document or support by the next day</h4>
                                <div className="absolute -top-[94%] w-full right-0 left-0">
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