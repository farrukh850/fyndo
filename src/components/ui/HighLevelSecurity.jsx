import React from "react"
import { Link } from "react-router-dom"

function HighLevelSecurity() {
  return (
    <div className="py-10 lg:py-28 bg-[#F4F4F4] font-stk">
        <div className="container">
            <div className="flex items-start flex-col lg:flex-row gap-4 lg:gap-0">
                <div className="flex items-center flex-[16%] gap-3 relative z-50 py-3">
                    <span className={`h-2 w-2 rounded-full bg-[#292929]`}></span>
                    <p className={`text-sm leading-4 tracking-[-0.01em] text-[#131313]`}>Security</p>
                </div>
                <div className="flex flex-col gap-20 flex-[84%]">
                    <h1 className="text-5xl lg:text-[60px] leading-12 lg:leading-[60px] text-[rgba(0,0,0,0.6)] tracking-[-2.4px]">High-Level Security,
                    <b className="text-black block font-normal">and numerous certifications.</b></h1>
                </div>
            </div>
            <div className="flex lg:items-end mt-18 flex-col lg:flex-row gap-4 lg:gap-0 items-start">
                <div className="flex flex-col gap-5 flex-1">
                    <p className="text-[13.34px] text-black tracking-[-0.14px] leading-4 max-w-[330px] w-full">As a European-based company, we are fully GDPR compliant. Our strong ethical values ensure we are a trustworthy and reliable partner.</p>
                    <Link to="#" className="flex items-center gap-2 relative"><p className="text-[13.34px] text-black tracking-[-0.14px] leading-4 relative">Talk to Sales for Details <span className="absolute left-0 top-full bg-[rgba(0,0,0,0.11)] h-0.5 w-full"></span></p> <img src="/images/arow-top-right.svg" alt="Top right Curve Arrow" /></Link>
                </div>
                <div className="flex w-full items-center flex-1 flex-wrap border border-[#333332]">
                    <div className="w-full h-[269px] flex items-center justify-center bg-[#292929] relative flex-1/2 border border-[#333332]">
                        <div className="flex items-center">
                            <img src="/images/shield-left.svg" alt="Shield Icon" />
                            <img src="/images/shield-right.svg" alt="Shield Icon" />
                        </div>
                        <div className="absolute top-3 left-3">
                            <p className="uppercase text-white text-[11px] leading-3 tracking-[2px]">Secure</p>
                            <p className="uppercase tracking-[2px] text-[#6B6B6A] text-[10px] leading-3">COMMUNICATION</p>
                        </div>
                    </div>
                    <div className="w-full h-[269px] flex items-center justify-center relative flex-1/2 border border-[#333332]">
                       <img src="/images/approved-icon.svg" alt="Approved Icon" />
                        <div className="absolute top-3 left-3">
                            <p className="uppercase text-black text-[11px] tracking-[2px] leading-3">Approved</p>
                            <p className="uppercase text-[#6B6B6A] text-[10px] leading-3 tracking-[2px]">Certified TECH STACKS</p>
                        </div>
                    </div>
                    <div className="w-full h-[269px] flex items-center justify-center relative flex-1/2 border border-[#333332]">
                        <img src="/images/gdpr-icon.svg" alt="GDPR Icon" />
                        <div className="absolute top-3 left-3">
                            <p className="uppercase text-black text-[11px] tracking-[2px] leading-3">GDPR</p>
                            <p className="uppercase text-[#6B6B6A] text-[10px] leading-3 tracking-[2px]">COMPLIANT</p>
                        </div>
                    </div>
                    <div className="w-full h-[269px] flex items-center justify-center relative flex-1/2 border border-[#333332]">
                        <img src="/images/strong-icon.svg" alt="Strong Icon" />
                        <div className="absolute top-3 left-3">
                            <p className="uppercase text-black text-[11px] tracking-[2px] leading-3">STRONG</p>
                            <p className="uppercase text-[#6B6B6A] text-[10px] leading-5 tracking-[2px]">Ethical Principles</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HighLevelSecurity