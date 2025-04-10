import React from "react"
function Banner() {
  return (
    <>
        <div className="container font-stk">
            <div className="flex flex-col lg:flex-row gap-5 lg:gap-0 items-start py-28">
                <div className="flex items-center flex-[20%] gap-3 pt-4 relative z-50">
                    <span className={`h-2 w-2 rounded-full bg-[#292929]`}></span>
                    <p className={`text-sm leading-3.5 text-[#131313]`}>Meet Fyndo</p>
                </div>
                <div className="flex flex-col gap-14 flex-[80%]">
                    <h1 className="text-5xl lg:text-[57px] leading-12 lg:leading-16 text-[#131313] tracking-[-0.14px]">50% of IT Projects Crash and Burn.
                    <b className="text-[rgba(4,3,1,0.41)] block font-normal">From Chaos to Control with Fyndo.</b></h1>
                    <div className="">
                        <div className="flex items-center gap-2 pb-4">
                            <p className="text-xs text-[rgba(4,3,1,0.41)] tracking-[-0.14] leading-3.5">Pick your product</p>
                            <img src="/images/pick-product-arrow-down.svg" alt="Arrow Down" />
                        </div>
                        <div className="flex items-center justify-between cursor-pointer border-t border-b border-[rgba(34,23,11,0.09)]">
                            <div className="flex items-center gap-2 py-6">
                                <img src="/images/estimation-icon.svg" alt="Estimation Icon" />
                                <p className="text-xl lg:text-2xl text-[#292929] leading-7">Estimation <b className="text-[rgba(4,3,1,0.41)] font-normal">Package</b></p>
                            </div>
                            <img src="/images/arrow-right.svg" alt="Arrow Right" />
                        </div>
                        <div className="flex items-center justify-between cursor-pointer">
                            <div className="flex items-center gap-2 py-6">
                                <img src="/images/screening-icon.svg" alt="Screening Icon" />
                                <p className="text-xl lg:text-2xl text-[#292929] leading-7">Screening <b className="text-[rgba(4,3,1,0.41)] font-normal">Package</b></p>
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