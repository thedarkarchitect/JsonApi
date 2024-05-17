import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from "react-router-dom";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Posts from "./pages/Posts";
import PostUpload from "./pages/PostUpload";
import PostDetails from "./pages/PostDetails";
import Home from "./pages/Home";

const router = createBrowserRouter(
	createRoutesFromElements(
		<>
			{/* Auth Routes */}
			<Route path="/auth">
				<Route path="/auth/SignUp" element={<SignUp />} />
				<Route path="/auth/Login" element={<Login />} />
			</Route>

			<Route path="/">
				<Route index element={<Home />}/>
			</Route>

			{/* Home Page Routes */}
			<Route path="/posts">
				<Route path="/posts/createPost" element={<PostUpload />} />
				<Route path="/posts/blog" element={<Posts />} />
				<Route
					path="/posts/blog/:id"
					element={<PostDetails />}
				/>
			</Route>
		</>
	)
);

const App = () => {
	return <RouterProvider router={router} />;
};

export default App;
