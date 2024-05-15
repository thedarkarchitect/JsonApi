import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from "react-router-dom";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Home from "./pages/Home";

const router = createBrowserRouter(
	createRoutesFromElements(
		<>
            {/* Auth Routes */}
			<Route path="/auth">
				<Route path="/auth/SignUp" element={ <SignUp /> } />
                <Route path="/auth/Login" element={ <Login /> } />
			</Route>

            {/* Home Page Routes */}
            <Route path="/">
                <Route index element={< Home /> } />
            </Route>
		</>
	)
);

const App = () => {
	return ( <RouterProvider router={router} /> );
};

export default App;
