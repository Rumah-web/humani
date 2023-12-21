import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./carosel.css"
import { url } from "inspector";

const Carosel = ({images}: any) => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(null as any);

    const slideVariants = {
        hiddenRight: {
          x: "100%",
          opacity: 0,
        },
        hiddenLeft: {
          x: "-100%",
          opacity: 0,
        },
        visible: {
          x: "0",
          opacity: 1,
          transition: {
            duration: 1,
          },
        },
        exit: {
          opacity: 0,
          scale: 0.8,
          transition: {
            duration: 0.5,
          },
        },
      };

      const slidersVariants = {
        hover: {
          scale: 1.4,
        },
      };
    
      const handleNext = () => {
        setDirection("right");
        setCurrentIndex((prevIndex) =>
          prevIndex + 1 === images.length ? 0 : prevIndex + 1
        );
      };
    
      const handlePrevious = () => {
        setDirection("left");
    
        setCurrentIndex((prevIndex) =>
          prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
        );
      };

      return (
        <div className="carousel">
            <div className="carousel-images">
                <AnimatePresence>
                <motion.div
                    key={currentIndex}
                    style={{backgroundImage: `url(${images[currentIndex]})`}}
                    className="img"
                    initial={direction === "right" ? "hiddenRight" : "hiddenLeft"}
                    animate="visible"
                    exit="exit"
                    variants={slideVariants}
                />
                </AnimatePresence>
                <div className="slide_direction">
                    <motion.div
                        variants={slidersVariants}
                        whileHover="hover"
                        className="left"
                        onClick={handlePrevious}
                    >
                        <svg width="30" height="30" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill="currentColor" d="M13.891 17.418a.697.697 0 0 1 0 .979a.68.68 0 0 1-.969 0l-7.83-7.908a.697.697 0 0 1 0-.979l7.83-7.908a.68.68 0 0 1 .969 0a.697.697 0 0 1 0 .979L6.75 10z"/>
                        </svg>
                    </motion.div>
                    <motion.div
                        variants={slidersVariants}
                        whileHover="hover"
                        className="right"
                        onClick={handleNext}
                    >
                        <svg width="30" height="30" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill="currentColor" d="M13.25 10L6.109 2.58a.697.697 0 0 1 0-.979a.68.68 0 0 1 .969 0l7.83 7.908a.697.697 0 0 1 0 .979l-7.83 7.908a.68.68 0 0 1-.969 0a.697.697 0 0 1 0-.979z"/>
                        </svg>
                    </motion.div>
                </div>
          </div>
        </div>
      );
}

export default Carosel