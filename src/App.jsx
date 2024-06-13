import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Posts from "./pages/Posts";
import PostUpload from "./pages/PostUpload";
import PostDetails from "./pages/PostDetails";
import Home from "./pages/Home";
import "../src/App.css";
import ProductUpload from "./pages/ProductUpload";
import MainLayout from "./layout/MainLayout";
import ProductDetails from "./components/ProductDetails";
import Service from "./pages/Service";
import AboutUs from "./pages/AboutUs";
import Shop from "./pages/Shop";
import { useEffect, useState } from "react";
import Wishlist from "./pages/Wishlist";
import AuthProvider from "./AuthProvider";
import PrivateRoute from "./PrivateRoute";
import { StateContext } from "./StateContext";
import Order from "./pages/Order";

const App = () => {
	return (
		<Router>
			<AuthProvider>
				<StateContext>
					<Routes>
						{/* Auth Routes */}
							<Route path="/auth/SignUp" element={<SignUp />} />
							<Route path="/auth/Login" element={<Login />} />

						{/* MainLayout */}
						<Route path="/" element={<MainLayout />}>
							<Route index element={<Home />} />

							{/* products routes */}
							<Route path="products" element={<PrivateRoute />}>
								<Route
									path="createProduct"
									element={<ProductUpload />}
								/>
							</Route>

							<Route path="products">
								<Route path=":id" element={<ProductDetails />} />
								<Route path="shop" element={<Shop />} />
							</Route>

							{/* posts routes */}
							<Route path="/posts">
								<Route path="createPost" element={<PostUpload />} />
								<Route path="blog" element={<Posts />} />
								<Route path="blog/:id" element={<PostDetails />} />
							</Route>

							{/* service routes */}
							<Route path="service" element={<PrivateRoute />}>
								<Route index element={<Service />} />
							</Route>

							<Route path="order" element={<PrivateRoute />}>
								<Route index element={<Order />}/>	
							</Route>

							{/* wishlist routes */}
							<Route path="wishlist" element={<PrivateRoute />}>
								<Route index element={<Wishlist />} />
							</Route>

							{/* about routes */}
							<Route path="about" element={<AboutUs />} />
						</Route>
					</Routes>
				</StateContext>
			</AuthProvider>
		</Router>
	);
};

export default App;
