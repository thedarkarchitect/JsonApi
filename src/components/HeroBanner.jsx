import React from "react";
import hero1 from "../assets/hero1.png";
import hero2 from "../assets/hero2.png";
import hero3 from "../assets/hero3.png";
import { Carousel } from "flowbite-react";

const HeroBanner = () => {
	return (
		<div className="w-full h-[800px]">
			<Carousel slideInterval={3000} pauseOnHover>
				<img src={hero1} alt="hero1" className="h-full" />
				<img src={hero2} alt="hero2" className="h-full" />
				<img src={hero3} alt="hero3" className="h-full" />
			</Carousel>
		</div>
	);
};

export default HeroBanner;
