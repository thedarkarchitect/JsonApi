import React from "react";
import { Link } from "react-router-dom";

const Product = ({id, image, price, name}) => {
	return (
		<div className=''>
			<Link  to={`/products/${id}`}>
				<div className="px-4 product-card border border-yellow-400 hover:border-yellow-100 rounded-lg w-32">
					<img
						src={image}
						width={150}
						height={150}
						className="product-image"
					/>
                    <p className="text-sm">{name}</p>
                    <p className="text-sm text-black font-bold">{price}</p>
				</div>
				
			</Link>
		</div>
	);
};

export default Product;
