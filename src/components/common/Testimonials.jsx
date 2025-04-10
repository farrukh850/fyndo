import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} z-10 h-full max-xl:!right-[15px] !right-[-25px] before:content-none`}
        style={{ ...style }}
        onClick={onClick}
      >
        <button className="bg-[#78A07C] shadow-md absolute top-[45%] -translate-y-1/2 bottom-0  rounded-full cursor-pointer w-12 h-12 flex items-center justify-center">
         
          <img src="/images/arrow-right.svg" alt="Arrow Right" />
        </button>
      </div>
    );
  };
  const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} z-10 h-full max-xl:!left-[-15px] !left-[-45px] before:content-none`}
        style={{ ...style }}
        onClick={onClick}
      >
        <button className="bg-[#78A07C] shadow-md absolute top-[45%] -translate-y-1/2 bottom-0 rounded-full cursor-pointer w-12 h-12 flex items-center justify-center">
          <img src="/images/arrow-left.svg" alt="Arrow Left" />
        </button>
      </div>
    );
  };
  
function Testimonials() {
    const testimonials = [
        {
          id: 1,
          image: "/images/reviewer-1.png",
          name: "Jassica Andrew",
          text: "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          id: 2,
          image: "/images/reviewer-2.png",
          name: "Darlene Robertson",
          text: "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do eiusmod.",
        },
        {
          id: 3,
          image: "/images/reviewer-3.png",
          name: "Dianne Russell",
          text: "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        // Add more testimonials if needed
      ];
      const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 640,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };
  return (
    <div className="container py-20 max-xl:px-5 max-sm:py-10">
    <h2 className="text-3xl inline-block font-poppins font-bold relative">What do people <b className="text-[#C12323]">say about LEAP?</b><span className="absolute -bottom-2 right-0 left-0 h-[3px] w-[75%] bg-[#101010]
    "></span></h2>
    <div className="mt-25">
    <Slider {...settings}>
      {testimonials.map((testimonial) => (
        <div key={testimonial.id} className="px-6 py-5">
          <div className="flex flex-col gap-5 shadow-[0px_1px_14px_0px_rgba(0,0,0,0.1)] rounded-[20px] p-7 text-center h-full">
            <div className="h-14 w-14 rounded-full mx-auto">
              <img src={testimonial.image} alt="Reviewer Image" />
            </div>
            <h4 className="text-lg text-[#1F1C14] font-poppins font-semibold">
              {testimonial.name}
            </h4>
            <ul className="flex gap-1 justify-center">
              {[...Array(5)].map((_, i) => (
                <li key={i}>
                  <img src="/images/star.svg" alt="Star" />
                </li>
              ))}
            </ul>
            <p className="text-sm text-[#414141] font-poppins">
              {testimonial.text}
            </p>
          </div>
        </div>
      ))}
    </Slider>
    </div>
    </div>
  )
}

export default Testimonials