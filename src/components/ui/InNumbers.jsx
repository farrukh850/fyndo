import React from "react"

function InNumbers() {
  return (
    <div className="py-10 lg:py-28 bg-[#212121]">
        <div className="container">
            <div className="flex items-start font-stk flex-col lg:flex-row gap-4 lg:gap-0">
                <div className="flex items-center flex-[20%] gap-3 pt-4 relative z-50">
                    <span className={`h-2 w-2 rounded-full bg-white`}></span>
                    <p className={`text-sm leading-3.5 text-white`}>In numbers</p>
                </div>
                <div className="flex flex-col gap-7 flex-[80%]">
                    <h1 className="text-3xl leading-8 text-white tracking-[-0.9px]">At Fyndo, we’re committed to your project’s vision.
                    <b className="text-[rgba(255,255,255,0.41)] block font-normal">It’s as simple as that.</b></h1>
                    <hr className=" border-[#696969] my-5 lg:my-[60px]" />
                    <div className="flex justify-between lg:items-center flex-col lg:flex-row gap-4 lg:gap-0">
                        <div className="flex-1">
                            <small className="text-base leading-5 mb-3 text-[rgba(255,255,255,0.41)]">Average time to first response</small>
                            <h4 className="text-white text-[45px] leading-12">26 min</h4>
                        </div>
                        <div className="flex-1">
                            <small className="text-base leading-5 mb-3 text-[rgba(255,255,255,0.41)]">Average Daily Availability</small>
                            <h4 className="text-white text-[45px] leading-12">18 hours</h4>
                        </div>
                        <div className="flex-1">
                            <small className="text-base leading-5 mb-3 text-[rgba(255,255,255,0.41)]">Customer satisfaction</small>
                            <h4 className="text-white text-[45px] leading-12">98%</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default InNumbers