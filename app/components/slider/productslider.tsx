import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import "./slick.css"

const Productslider = ({items, size = 'cover', centerMode = true, slidesToShow = 4, dots = true, className = `lg:mx-10`}: any) => {
    const settings = {
        className: "center",
        centerMode,
        infinite: true,
        centerPadding: "60px",
        arrows: false,
        autoplay: true,
        slidesToShow,
        speed: 500,
        dots,
        appendDots: (dots: number) => (
            <div
              style={{
                position: 'absolute',
                bottom: '-60px'
              }}
            >
              <ul> {dots} </ul>
            </div>
          ),
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
              }
            }
          ]
      };

    return (
        <div className="slider">
            <Slider {...settings}>
                {(items || []).map((item: {title: string, image: string}, i: number) => {
                    return <div key={i} className="">
                          <h3 className="text-center text-[#88171d] pb-2 text-xl">{item.title}</h3>
                          <div className="flex justify-center">
                            <div className={`bg-[#88171d] p-4 w-48 h-48 rounded-lg bg-${size} ${className} `}></div>
                          </div>
                    </div>
                })}
            </Slider>
        </div>
    );
}

export default Productslider