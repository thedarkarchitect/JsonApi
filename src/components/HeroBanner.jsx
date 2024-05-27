import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import hero1 from "../assets/hero1.png";
import hero2 from "../assets/hero2.png";
import hero3 from "../assets/hero3.png";

const images = [hero1, hero2, hero3];

const HeroBanner = () => {
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
		}, 3000);

		return () => clearInterval(interval);
	}, []);

	const goToPrevious = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === 0 ? images.length - 1 : prevIndex - 1
		);
	};

	const goToNext = () => {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
	};

	return (
			<div className="relative">
				{/* <div className="flex w-full h-[800px] overflow-x-hidden transition-transform duration-1000">
          {
            images.map((image, index) => (
              <div
              key={index}
              className="w-full flex-shrink-0"
              style={{
                transform: `translateX(-${currentIndex * (100 / images.length)}%)`,
                width: `${100 / images.length}%`,
                minWidth: 0}} // Ensure images don't shrink beyond their natural width}
              >
                <img className="w-full object-cover" src={image} alt={`Slide ${index + 1}`} />
              </div>

            ))
          }
        </div> */}
				<img className="w-full h-[750px]" src={hero2} />
			</div>
		
	);
};

export default HeroBanner;
