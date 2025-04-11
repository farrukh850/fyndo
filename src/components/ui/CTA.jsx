import React from "react"
import { Link } from "react-router-dom"
function CTA() {
  return (
    <div className="py-20 bg-[#111111] relative h-[468px]">
        <div className="container">
            <div className="flex flex-col font-stk relative z-50">
                <img src="/images/target.svg" className="w-8" alt="Target Icon" />
                <h5 className="text-[22.69px] leading-[26px] tracking-[-0.66px] mb-10 text-[rgba(255,255,250,0.6))] mt-12">Talk to Sales
                <b className="text-white block font-normal">sales@fyndo.io</b></h5>
                <Link to="#" className="w-16 h-8 flex items-center justify-center bg-white rounded-[160px]"><img src="/images/arrow-right.svg" className="w-4" alt="Arrow Right" /></Link>
            </div>
        </div>
        <div className="absolute top-0 bottom-0 lg:left-0 lg:w-full lg:translate-x-0 right-0 h-full w-1/2 left-1/2  -translate-x-1/2">
          <img src="/images/fyndo-cta.PNG" className="w-full h-full object-contain lg:object-center object-right" alt="" /></div>
    </div>
  )
}

export default CTA