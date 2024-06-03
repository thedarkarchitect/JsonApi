import React, {
	createContext,
	useContext,
	useState,
	// useEffect,
	// Children,
} from "react";
import toast from "react-hot-toast";

const Context = createContext();

export const StateContext = ({ children }) => {
	const [showCart, setShowCart] = useState(false);
	// const [cartItems, setCartItems] = useState([]);
	// const [totalPrice, setTotalPrice] = useState(0);
	// const [totalItems, setTotalItems] = useState(0);

	// const onAddToCart = (product, qty) => {
	// 	const checkProductInCart = cartItems.findIndex((item) => item.product.id === product.id); //finds if item already in cart
	// 	console.log(checkProductInCart)

	// 	if (checkProductInCart !== -1) { //check if it exists
	// 		const updatedCartItems = [...cartItems];
	// 		const ItemQuantity = updatedCartItems[checkProductInCart].quantity + qty
	// 		updatedCartItems[checkProductInCart] = { product, quantity: ItemQuantity}
			
	// 		const totalPriceOfProduct = product.price * ItemQuantity
			
	// 		setTotalPrice(totalPrice + totalPriceOfProduct)
	// 		setCartItems(updatedCartItems);
	// 	} else {
	// 		// product.quantity = quantity
	// 		setCartItems([...cartItems, { product, quantity:qty }]); //this adds a product to the cart list
	// 		const updateTotalItems = cartItems.reduce((total, item) => total + item.quantity, 0)
	// 		setTotalItems(updateTotalItems)
	// 		const price = cartItems.reduce((total, item) => total + (item.product.price * item.quantity), 0)
	// 		setTotalPrice(price)
	// 	}
	// 	// alert(`${qty} ${product.name} added to the cart.`);

	// 	//calculate total price
	// 	console.log(cartItems.length)
	// 	console.log(totalItems)
	// };

	// const onRemove = (product) => {
	// 	foundProduct = cartItems.find((item) => item.id === product.id);
	// 	// console.log(foundProduct)
	// 	const newCartItems = cartItems.filter((item) => item.id !== product.id); //this will return items without the removed product
	// 	// console.log(newCartItems)

	// 	setTotalPrice(
	// 		(prevTotalPrice) =>
	// 			prevTotalPrice - (foundProduct.price * foundProduct.quantity)
	// 	);
	// 	setTotalQuantities(
	// 		(prevTotalQuantities) => prevTotalQuantities - foundProduct.quantity
	// 	);
	// 	setCartItems(newCartItems);
	// };

	// const toggleCartItemQuanitity = (id, value) => {
	// 	foundProduct = cartItems.find((item) => item._id === id);
	// 	index = cartItems.findIndex((product) => product._id === id);
	// 	const newCartItems = cartItems.filter((item) => item._id !== id);

	// 	if (value === "inc") {
	// 		setCartItems([
	// 			...newCartItems,
	// 			{ ...foundProduct, quantity: foundProduct.quantity + 1 },
	// 		]);
	// 		setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price);
	// 		setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + 1);
	// 	} else if (value === "dec") {
	// 		if (foundProduct.quantity > 1) {
	// 			setCartItems([
	// 				...newCartItems,
	// 				{ ...foundProduct, quantity: foundProduct.quantity - 1 },
	// 			]);
	// 			setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price);
	// 			setTotalQuantities((prevTotalQuantities) => prevTotalQuantities - 1);
	// 		}
	// 	}
	// };

	return (
		<Context.Provider
			value={{
				showCart,
				setShowCart,
				// cartItems,
				// totalPrice,
				// totalItems,
				// qty,
				// increment,
				// decrement,
				// onAddToCart,
				// toggleCartItemQuanitity,
				// onRemove,
				// setCartItems,
				// setTotalPrice,
				// setTotalItems,
			}}>
			{children}
		</Context.Provider>
	);
};

export const useStateContext = () => useContext(Context);
