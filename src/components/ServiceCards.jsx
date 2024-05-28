import React from "react";


const ServiceCards = ({ image, title, description }) => {
	return (
		<>
			<div>
				<img
					className="w-full"
					src={ image }
					alt="service pictures"
				/>
				<div className="px-2">
					<h2 className="font-bold text-xl mb-2 mt-2">{title}</h2>
					<p>
						{ description }
					</p>
				</div>
				
			</div>
		</>
	);
};

export default ServiceCards;
