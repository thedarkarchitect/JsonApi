import React from "react";
import HeroBanner from "../components/HeroBanner";
import FooterBanner from "../components/FooterBanner";
import Products from "../components/Products";

const Home = () => {
	return (
		<>
			<HeroBanner />
			<div>
				<div className="products-heading">
					<h2>Best Selling Products</h2>
					<p>Products of many variations</p>
				</div>
       {/* flex items-center justify-center min-h-screen-lg */}
				<div className="flex items-center justify-center min-h-screen-lg">
					<Products />
				</div>
			</div>
			<FooterBanner />
		</>
	);
};

export default Home;
