import React from "react";

const Order = () => {
	return (
		<div className="bg-gray-100 ">
			<div className="w-full max-w-3xl mx-auto p-8">
				<div className="bg-white  p-8 rounded-lg shadow-md border ">
					<h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
						Checkout
					</h1>

					{/* <!-- Shipping Address --> */}
					<div className="mb-6">
						<h2 className="text-xl font-semibold  ">
							Shipping Address
						</h2>

						<div className="mt-4">
							<label
								for="address"
								className="block mb-1">
								Address
							</label>
							<input
								type="text"
								id="address"
								className="w-full rounded-lg border py-2 px-3 "
							/>
						</div>

						<div className="mt-4">
							<label
								for="city"
								className="blockmb-1">
								District
							</label>
							<input
								type="text"
								id="city"
								className="w-full rounded-lg border py-2 px-3 "
							/>
						</div>

						<div className="grid grid-cols-2 gap-4 mt-4">
							<div>
								<label
									for="state"
									className="block ">
									Street
								</label>
								<input
									type="text"
									id="state"
									className="w-full rounded-lg border py-2 px-3 "
								/>
							</div>
							<div>
								<label
									for="zip"
									className="block mb-1">
									City
								</label>
								<input
									type="text"
									id="zip"
									className="w-full rounded-lg border py-2 px-3 "
								/>
							</div>
						</div>
					</div>

					{/* <!-- Payment Information --> */}
					<div>
						<h2 className="text-xl font-semibold ">
							Payment Information
						</h2>
						<div className="mt-4">
							<label
								for="card_number"
								className="block mb-1">
								Card Number
							</label>
							<input
								type="text"
								id="card_number"
								className="w-full rounded-lg border py-2 px-3"
							/>
						</div>

						<div className="grid grid-cols-2 gap-4 mt-4">
							<div>
								<label
									for="exp_date"
									className="blockmb-1">
									Expiration Date
								</label>
								<input
									type="text"
									id="exp_date"
									className="w-full rounded-lg border py-2 px-3"
								/>
							</div>
							<div>
								<label
									for="cvv"
									className="block mb-1">
									CVV
								</label>
								<input
									type="text"
									id="cvv"
									className="w-full rounded-lg border py-2 px-3 "
								/>
							</div>
						</div>
					</div>

					<div className="mt-8 flex justify-end">
						<button className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-700 ">
							Place Order
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Order;
