import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./AuthProvider";

const PrivateRoute = () => {
	const {user} = useAuth(); 

	return user ? <Outlet/> : <Navigate to="/auth/login" />;
};

export default PrivateRoute;
