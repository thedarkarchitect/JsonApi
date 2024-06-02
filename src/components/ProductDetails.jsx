import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IoMdCart } from "react-icons/io";
import { jwtDecode } from "jwt-decode";

const ProductDetails = () => {
	const { id } = useParams();
	const [loading, setLoading] = useState(true);
	const [product, setProduct] = useState();
	const [quantity, setQuantity] = useState(0);
	const [orderId, setOrderId] = useState(null);
	// const [ownerId, setOwnerId] = useState(0);

	const isLogged = localStorage.getItem("token");

	const increment = () => {
		setQuantity((prevQuantity) => prevQuantity + 1);
	};

	const decrement = () => {
		setQuantity((prevQuantity) => {
			if (prevQuantity - 1 < 1) return 1;
			return prevQuantity - 1;
		});
	};

	useEffect(() => {
		const userId = isLogged ? jwtDecode(isLogged).userid : null;

		const checkIfOrderExists = async (userId) => {
			console.log(userId);
			const data = {
				userId,
				products: [],
				totalprice: 0,
				isComplete: false,
			};

			const orders = await fetch(
				`https://petco.onrender.com/api/v1/orders/get-users-order/${userId}`
			);
			const userOrders = await orders.json();

			if (userOrders && Array.isArray(userOrders.orders)) {
				const inCompleteOrder = userOrders.orders.find(
					(order) => order.isComplete === false
				);

				if (inCompleteOrder) {
					setOrderId(inCompleteOrder.id);
				} else {
					// No incomplete order found, create a new one
					const response = await fetch(
						"https://petco.onrender.com/api/v1/orders/createOrder",
						{
							method: "POST",
							headers: {
								"Content-Type": "application/json",
							},
							body: JSON.stringify(data),
						}
					);

					if (!response.ok) {
						throw new Error("Failed to post data");
					}

					const newOrder = await response.json();
					setOrderId(newOrder.id); // Return the ID of the newly created order
				}
			} else {
				console.log("Invalid data or orders not found");
				// return null;
			}
		};

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
		checkIfOrderExists(userId)

	}, [isLogged]);


	const addProductToCart = async (product, quantity, orderId) => {
		console.log(orderId)

		try {
			const orders = await fetch(`https://petco.onrender.com/api/v1/orders/get-order/${orderId}`);
			const data = await orders.json()

			console.log(data)
			const dataUpdate = {
				products: [...data.order.products, {product, quantity}]
			};
			await fetch(`https://petco.onrender.com/api/v1/orders/${orderId}`, {
				method: "PATCH",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(dataUpdate),
			});
		} catch (error) {
			console.log(error);
		}
	};

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
									<button
										onClick={decrement}
										className="group py-4 px-6 border border-yellow-400 rounded-l-full bg-white transition-all duration-300 hover:bg-yellow-50 hover:shadow-sm hover:shadow-yellow-500">
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
										className="font-semibold text-yellow-500 cursor-pointer text-lg py-[13px] px-6 w-full sm:max-w-[118px] outline-0 border-y border-yellow-400 bg-transparent placeholder:text-gray-900 text-center hover:bg-yellow-400">
										{quantity}
									</p>
									<button
										onClick={increment}
										className="group py-4 px-6 border border-yellow-400 rounded-r-full bg-white transition-all duration-300 hover:bg-yellow-50 hover:shadow-sm hover:shadow-yellow-500">
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
								<button
									onClick={(e) => {
										// e.preventDefault();
										addProductToCart(product, quantity, orderId);
									}}
									className="group py-4 px-5 rounded-full bg-yellow-50 text-yellow-500 font-semibold text-lg w-full flex items-center justify-center gap-2 transition-all duration-500 hover:bg-yellow-200">
									<IoMdCart />
									Add to cart
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
