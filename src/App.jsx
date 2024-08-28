import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import PostUpload from "./pages/PostUpload";
import "../src/App.css";
import MainLayout from "./layout/MainLayout";
import PostDetails from "./components/PostDetails";
import AboutUs from "./pages/AboutUs";
import Posts from "./pages/Posts";
import PostUpdate from "./pages/PostUpdate";

const App = () => {
	return (
		<Router>
			<Routes>

				{/* Auth Routes */}
				<Route path="/auth/SignUp" element={<SignUp />} />
				<Route path="/auth/Login" element={<Login />} />

				{/* MainLayout */}
				<Route path="/" element={<MainLayout />}>

					<Route path="/">
						<Route path=":id" element={<PostDetails />} />
						<Route index element={<Posts />} />
						<Route path="createPost" element={<PostUpload />} />
						<Route path="updatePost/:id" element={<PostUpdate />} />
					</Route>

					<Route path="about" element={<AboutUs />} />
				</Route>
			</Routes>
		</Router>
	);
};

export default App;
