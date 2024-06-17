import React from "react";
import hero1 from "../assets/hero1.png";
import hero2 from "../assets/hero2.png";
import hero3 from "../assets/hero3.png";
import { Carousel } from "flowbite-react";

const HeroBanner = () => {
	return (

		<div className="w-full h-[750px]">
			<Carousel slideInterval={3000} pauseOnHover>
				<img
					src={hero1}
					alt="hero1"
				/>
				<img
					src={hero2}
					alt="hero2"
				/>
				<img
					src={hero3}
					alt="hero3"
				/>
			</Carousel>
		</div>
	);
};

export default HeroBanner;
