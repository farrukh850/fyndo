import React from "react"
import { Link } from "react-router-dom"

function NextSteps() {
  return (
    <div className="bg-[#131313]">
        <div className="container">
            <div className="flex flex-col justify-between h-full min-h-[500px] lg:min-h-[718px] py-16 relative font-stk">
                <div className="flex items-center gap-3 pt-4 relative z-50">
                    <span className={`h-2 w-2 rounded-full bg-white`}></span>
                    <p className={`text-sm leading-3.5 text-white`}>Next steps</p>
                </div>
                <small className='text-xs leading-3.5 text-[rgba(255,255,250,0.6)]'>You’ll hear back in less than 12 hours</small>
                <div className="absolute left-1/2 max-w-[400px] text-center top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <h1 className="text-2xl lg:text-4xl leading-8 lg:leading-9 mb-10 text-white tracking-[-0.9px]">Have a use case in mind?
                    <b className="text-[rgba(255,255,255,0.41)] block font-normal">Let's connect</b></h1>
                    <Link to="#" className="w-[134px] mx-auto h-11 rounded-[160px] bg-white cursor-pointer flex items-center justify-center"><p className="text-base text-[#292929] leading-5">Find a Plan</p></Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NextSteps