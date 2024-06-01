import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useStateContext } from "../StateContext";


const ProductDetails = () => {
	const { id } = useParams();
	const [loading, setLoading] = useState(true);
	const [product, setProduct] = useState();
	const { decrement, increment, quantity, onAddToCart } = useStateContext();


	useEffect(() => {
		const fetchProduct = async () => {
			try {
				const response = await fetch(
					`https://petco.onrender.com/api/v1/products/${id}`
				);

				const data = await response.json();
				setProduct(data.product);
				setLoading(false);
			} catch (error) {
				console.log("Error fetching data", error);
			}
		};
		fetchProduct();
	}, []);

	if (loading) return <p>Loading...</p>;

	return (
		<section className="relative py-20 px-15">
			<div className="w-full mx-auto px-4 sm:px-6 lg:px-0">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mx-auto max-md:px-2 ">
					<div className="img">
						<div className="img-box h-full max-lg:mx-auto ">
							<img
								src={product.imageUrl}
								alt="product image"
								className="max-lg:mx-auto lg:ml-auto h-full"
							/>
						</div>
					</div>
					<div className="data w-full lg:pr-8 pr-0 xl:justify-start justify-center flex items-center max-lg:pb-10 xl:my-2 lg:my-5 my-0">
						<div className="data w-full max-w-xl">
							<p className="text-lg font-medium leading-8 text-yellow-500 mb-4">
								{product.category}
							</p>
							<h2 className="font-manrope font-bold text-3xl leading-10 text-gray-900 mb-2 capitalize">
								{product.name}
							</h2>
							<div className="flex flex-col sm:flex-row sm:items-center mb-6">
								<h6 className="font-manrope font-semibold text-2xl leading-9 text-gray-900 pr-5 sm:border-r border-gray-200 mr-5">
									UGX {product.price}
								</h6>
							</div>
							<p className="text-gray-500 text-base font-normal mb-5">
								{product.description}
							</p>

							<div className="grid grid-cols-1 sm:grid-cols-2 gap-3 py-8">
								<div className="flex sm:items-center sm:justify-center w-full">
									<button onClick={decrement} className="group py-4 px-6 border border-yellow-400 rounded-l-full bg-white transition-all duration-300 hover:bg-yellow-50 hover:shadow-sm hover:shadow-yellow-500">
										<svg
											className="stroke-gray-900 group-hover:stroke-black"
											width="22"
											height="22"
											viewBox="0 0 22 22"
											fill="none"
											xmlns="http://www.w3.org/2000/svg">
											<path
												d="M16.5 11H5.5"
												stroke=""
												strokeWidth="1.6"
												strokeLinecap="round"
											/>
											<path
												d="M16.5 11H5.5"
												stroke=""
												strokeOpacity="0.2"
												strokeWidth="1.6"
												strokeLinecap="round"
											/>
											<path
												d="M16.5 11H5.5"
												stroke=""
												strokeOpacity="0.2"
												strokeWidth="1.6"
												strokeLinecap="round"
											/>
										</svg>
									</button>
									<p
										type="text"
										className="font-semibold text-yellow-500 cursor-pointer text-lg py-[13px] px-6 w-full sm:max-w-[118px] outline-0 border-y border-yellow-400 bg-transparent placeholder:text-gray-900 text-center hover:bg-yellow-400"
									>{ quantity }</p>
									<button onClick={increment} className="group py-4 px-6 border border-yellow-400 rounded-r-full bg-white transition-all duration-300 hover:bg-yellow-50 hover:shadow-sm hover:shadow-yellow-500">
										<svg
											className="stroke-gray-900 group-hover:stroke-black"
											width="22"
											height="22"
											viewBox="0 0 22 22"
											fill="none"
											xmlns="http://www.w3.org/2000/svg">
											<path
												d="M11 5.5V16.5M16.5 11H5.5"
												stroke="#9CA3AF"
												strokeWidth="1.6"
												strokeLinecap="round"
											/>
											<path
												d="M11 5.5V16.5M16.5 11H5.5"
												stroke="black"
												strokeOpacity="0.2"
												strokeWidth="1.6"
												strokeLinecap="round"
											/>
											<path
												d="M11 5.5V16.5M16.5 11H5.5"
												stroke="black"
												strokeOpacity="0.2"
												strokeWidth="1.6"
												strokeLinecap="round"
											/>
										</svg>
									</button>
								</div>
								<button className="group py-4 px-5 rounded-full bg-yellow-50 text-yellow-500 font-semibold text-lg w-full flex items-center justify-center gap-2 transition-all duration-500 hover:bg-yellow-200">
									<svg
										className="stroke-yellow-500 "
										width="22"
										height="22"
										viewBox="0 0 22 22"
										fill="none"
										xmlns="http://www.w3.org/2000/svg">
										<path
											d="M10.7394 17.875C10.7394 18.6344 10.1062 19.25 9.32511 19.25C8.54402 19.25 7.91083 18.6344 7.91083 17.875M16.3965 17.875C16.3965 18.6344 15.7633 19.25 14.9823 19.25C14.2012 19.25 13.568 18.6344 13.568 17.875M4.1394 5.5L5.46568 12.5908C5.73339 14.0221 5.86724 14.7377 6.37649 15.1605C6.88573 15.5833 7.61377 15.5833 9.06984 15.5833H15.2379C16.6941 15.5833 17.4222 15.5833 17.9314 15.1605C18.4407 14.7376 18.5745 14.0219 18.8421 12.5906L19.3564 9.84059C19.7324 7.82973 19.9203 6.8243 19.3705 6.16215C18.8207 5.5 17.7979 5.5 15.7522 5.5H4.1394ZM4.1394 5.5L3.66797 2.75"
											stroke=""
											strokeWidth="1.6"
											strokeLinecap="round"
										/>
									</svg>
									Add to cart
								</button>
							</div>
							<div className="flex items-center gap-3">
								<button className="group transition-all duration-500 p-4 rounded-full bg-yellow-50 hover:bg-yellow-100 hover:shadow-sm hover:shadow-yellow-300">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="26"
										height="26"
										viewBox="0 0 26 26"
										fill="none">
										{/* <path
                                        d="M4.47084 14.3196L13.0281 22.7501L21.9599 13.9506M13.0034 5.07888C15.4786 2.64037 19.5008 2.64037 21.976 5.07888C24.4511 7.5254 24.4511 11.4799 21.9841 13.9265M12.9956 5.07888C10.5204 2.64037 6.49824 2.64037 4.02307 5.07888C1.54789 7.51738 1.54789 11.4799 4.02307 13.9184M4.02307 13.9184L4.04407 13.939M4.02307 13.9184L4.46274 14.3115"
                                        stroke="#4F46E5" strokeWidth="1.6" strokeMiterlimit="10"
                                        strokeLinecap="round" strokeLinejoin="round" /> */}
										<path
											d="M4.47084 14.3196L13.0281 22.7501L21.9599 13.9506M13.0034 5.07888C15.4786 2.64037 19.5008 2.64037 21.976 5.07888C24.4511 7.5254 24.4511 11.4799 21.9841 13.9265M12.9956 5.07888C10.5204 2.64037 6.49824 2.64037 4.02307 5.07888C1.54789 7.51738 1.54789 11.4799 4.02307 13.9184M4.02307 13.9184L4.04407 13.939M4.02307 13.9184L4.46274 14.3115"
											stroke="#FFD000"
											strokeWidth="1.6"
											strokeMiterlimit="10"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ProductDetails;
