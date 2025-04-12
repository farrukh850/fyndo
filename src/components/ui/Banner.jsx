import React from "react"
function Banner() {
  return (
    <>
        <div className="container font-stk">
            <div className="flex flex-col lg:flex-row gap-5 lg:gap-2.5 items-start py-[60px] lg:py-30">
                <div className="flex items-center flex-[16%] gap-3 relative z-50 py-3">
                    <span className={`h-2 w-2 rounded-full bg-[#292929]`}></span>
                    <p className={`text-sm leading-4 tracking-[-0.01em] text-[#131313]`}>Meet Fyndo</p>
                </div>
                <div className="flex flex-col gap-20 flex-[84%]">
                    <h1 className="text-5xl lg:text-[60px] leading-12 lg:leading-[60px] text-[#131313] tracking-[-0.03em] lg:tracking-[-2.4px] ">50% of IT Projects Crash and Burn.
                    <b className="text-[rgba(4,3,1,0.41)] block font-normal">From Chaos to Control with Fyndo.</b></h1>
                    <div className="">
                        <div className="flex items-center gap-2 pb-2">
                            <p className="text-xs text-[rgba(4,3,1,0.41)] tracking-[-.01em] leading-3.5">Pick your product</p>
                            <img src="/images/pick-product-arrow-down.svg" className="w-2" alt="Arrow Down" />
                        </div>
                        <div className="flex items-center justify-between cursor-pointer border-t border-b border-[rgba(34,23,11,0.09)]">
                            <div className="flex items-center gap-2 py-6">
                                <img src="/images/estimation-icon.svg" alt="Estimation Icon" />
                                <p className="text-xl lg:text-2xl text-[#292929] tracking-[-0.0275em] leading-[26px]">Estimation <b className="text-[rgba(4,3,1,0.41)] font-normal">Package</b></p>
                            </div>
                            <img src="/images/arrow-right.svg" alt="Arrow Right" />
                        </div>
                        <div className="flex items-center justify-between cursor-pointer">
                            <div className="flex items-center gap-2 py-6">
                                <img src="/images/screening-icon.svg" alt="Screening Icon" />
                                <p className="text-xl lg:text-2xl text-[#292929] tracking-[-0.0275em] leading-[26px]">Screening <b className="text-[rgba(4,3,1,0.41)] font-normal">Package</b></p>
                            </div>
                            <img src="/images/arrow-right.svg" alt="Arrow Right" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Banner