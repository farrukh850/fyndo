import React from "react"
import { useState } from 'react';
import { Link } from "react-router-dom"
import FAQS from "../../data/FAQS.json"

function FAQ() {
    const [activeIndex, setActiveIndex] = useState(0); // First item open by default
    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
  return (
    <div className="py-28">
        <div className="container">
            <div className="flex items-start font-stk flex-col lg:flex-row gap-4 lg:gap-0">
                    <div className="flex items-center flex-[20%] gap-3 pt-4 relative z-50">
                            <span className={`h-2 w-2 rounded-full bg-[#292929]`}></span>
                            <p className={`text-sm leading-3.5 text-[#131313]`}>FAQ</p>
                    </div>
                    <div className="flex flex-col gap-7 flex-[80%]">
                        <div className="flex justify-between items-start lg:items-center flex-col lg:flex-row gap-4 lg:gap-0">
                            <h1 className="text-3xl leading-8 text-[#292929] tracking-[-0.14px]">Have questions?
                            <b className="text-[rgba(4,3,1,0.41)] block font-normal">Find answers.</b></h1>
                            <div className="flex flex-col gap-3 lg:items-end">
                                <small className="text-[rgba(4,3,1,0.41)] text-sm leading-4">Any more questions?</small>
                                <Link to="#" className="flex items-center gap-2 relative"><p className="text-sm text-black leading-4 relative">Talk to Sales <span className="absolute left-0 top-full bg-[rgba(0,0,0,0.11)] h-0.5 w-full"></span></p> <img src="/images/arow-top-right.svg" alt="Top right Curve Arrow" /></Link>
                            </div>
                        </div>
                        <div className="mt-9">
                            {FAQS.map((faq, index) => (
                                <div 
                                key={index} 
                                className={`border-b border-[rgba(34,23,11,0.09)] cursor-pointer py-6 ${index === 0 ? 'border-t' : ''}`}
                                >
                                <button
                                    className="flex justify-between items-center w-full text-left cursor-pointer"
                                    onClick={() => toggleAccordion(index)}
                                >
                                    <h3 className="text-lg leading-5 font-medium text-[#292929]0">
                                    {faq.question}
                                    </h3>
                                    <span className="ml-4 flex-shrink-0">
                                    {activeIndex === index ? (
                                        <svg
                                        className="h-3 w-3 text-[#292929]"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M20 12H4"
                                        />
                                        </svg>
                                    ) : (
                                        <svg
                                        className="h-3 w-3 text-[#292929]"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 4v16m8-8H4"
                                        />
                                        </svg>
                                    )}
                                    </span>
                                </button>
                                <div
                                    className={`mt-2 transition-all duration-300 ease-in-out overflow-hidden ${
                                    activeIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                    }`}
                                >
                                    <p className="text-gray-600 pb-2">{faq.answer}</p>
                                </div>
                                </div>
                            ))}
                        </div>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default FAQ