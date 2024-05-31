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

const App = () => {
	return (
		<Router>
			<AuthProvider>
				<StateContext>
					<Routes>
						{/* Auth Routes */}
						<Route path="/auth">
							<Route path="/auth/SignUp" element={<SignUp />} />
							<Route path="/auth/Login" element={<Login />} />
						</Route>

						{/* MainLayout */}
						<Route path="/" element={<MainLayout />}>
							<Route index element={<Home />} />

							{/* products routes */}
							<Route path="/products" element={<PrivateRoute />}>
								<Route
									path="/products/createProduct"
									element={<ProductUpload />}
								/>{" "}
								//Reminder: protect to the role Admin after securing other
								routes
								<Route path="/products/:id" element={<ProductDetails />} />
								<Route path="/products/shop" element={<Shop />} />
							</Route>

							{/* posts routes */}
							<Route path="/posts">
								<Route path="/posts/createPost" element={<PostUpload />} />
								<Route path="/posts/blog" element={<Posts />} />
								<Route path="/posts/blog/:id" element={<PostDetails />} />
							</Route>

							{/* service routes */}
							<Route path="/service" element={<PrivateRoute />}>
								<Route index element={<Service />} />
							</Route>

							{/* wishlist routes */}
							<Route path="/wishlist">
								<Route index element={<Wishlist />} />
							</Route>

							{/* about routes */}
							<Route path="/about" element={<AboutUs />} />
						</Route>
					</Routes>
				</StateContext>
			</AuthProvider>
		</Router>
	);
};

export default App;
