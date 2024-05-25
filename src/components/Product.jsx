import React from "react";
import { Link } from "react-router-dom";

const Product = ({id, image, price, name}) => {
	return (
		<div className='relative product-card border border-yellow-400 hover:border-yellow-100 flex flex-col rounded-lg w-32'>
			<Link className="px-4 pt-4" to={`/products/${id}`}>
				<div className="flex max-h-20 justify-center overflow-hidden">
					<img
						src={image}
						className=""
						// className="product-image"
					/>
				</div>

				<div>
					<p className="text-sm pt-4">{name}</p>
                    <p className="text-sm text-black font-bold">{price}</p>
				</div>
				
			</Link>
		</div>
	);
};

export default Product;
