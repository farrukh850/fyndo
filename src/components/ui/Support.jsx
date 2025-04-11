import React from "react"
import { Link } from "react-router-dom"
function Support() {
  return (
    <div className="py-10 lg:py-[120px]">
        <div className="container">
            <div className="flex items-start font-stk flex-col lg:flex-row gap-4 lg:gap-0">
                <div className="flex items-center flex-[16%] gap-3 relative z-50 py-3">
                    <span className={`h-2 w-2 rounded-full bg-black`}></span>
                    <p className={`text-sm leading-4 tracking-[-0.01em] text-black`}>Support</p>
                </div>
                <div className="flex lg:gap-1 flex-[80%] flex-col lg:flex-row gap-4">
                    <div className="flex flex-1 items-stretch p-6 bg-[#1C1C1C] min-h-[442px]">
                        <div className="flex flex-col items-stretch justify-between">
                            <h5 className="text-white text-[25.43px] tracking-[-0.3px] leading-8">Sales</h5>
                            <p className="text-[13.45px] leading-4 tracking-[-0.14px] text-white">Your ideas, questions, or plans— <br /> our sales team is listening.</p>
                            <Link to="#" className="w-[108px] h-9 rounded-[160px] bg-white cursor-pointer flex items-center justify-center"><p className="text-sm text-[#292929]">Talk to sales</p></Link>
                        </div>
                    </div>
                    <div className="flex flex-1 items-stretch p-6 bg-[#F7F6F5] min-h-[442px]">
                        <div className="flex flex-col items-stretch justify-between">
                            <h5 className="text-[#292929] text-[25.43px] tracking-[-0.3px] leading-8">General Enquiry</h5>
                            <p className="text-[13.45px] leading-4 tracking-[-0.14px] text-[#292929]">For any other questions, reach out via email—<br /> say hello, we're (really) super friendly.</p>
                            <button className="w-[108px] h-9 rounded-[160px] border border-[rgba(34,23,11,0.09)] bg-transparent cursor-pointer flex items-center justify-center"><p className="text-sm text-[#292929]">Say Hello</p></button>
                        </div>
                    </div>
                    <div className="flex flex-1 items-stretch p-6 bg-[#F7F6F5] min-h-[442px]">
                        <div className="flex flex-col items-stretch justify-between">
                            <h5 className="text-[#292929] text-[25.43px] tracking-[-0.3px] leading-8">Support</h5>
                            <p className="text-[13.45px] leading-4 tracking-[-0.14px] text-[#292929]">If you’ve lost email access or anything else,<br /> message us here. We’re available 16 hours daily.</p>
                            <button className="w-[91px] h-9 rounded-[160px] border border-[rgba(34,23,11,0.09)] bg-transparent cursor-pointer flex items-center justify-center"><p className="text-sm text-[#292929]">Support</p></button>
                        </div>
                    </div>
                </div>
        </div>
        </div>
    </div>
  )
}

export default Support