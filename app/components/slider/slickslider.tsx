import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import "./slick.css"

const Slickslider = ({images, size = 'cover'}: any) => {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        arrows: false,
        autoplay: true,
        slidesToShow: 3,
        speed: 500,
        dots: true,
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
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
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
                {(images || []).map((image: string, i: number) => {
                    return <div key={i}>
                        <div className="bg-[#88171d] mx-10 p-4 h-48 rounded-lg border border-white bg-cover" style={{
                            backgroundImage: `url(${image})`,
                            }}>
                        </div>
                    </div>
                })}
            </Slider>
        </div>
    );
}

export default Slickslider