import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [token, setToken] = useState(localStorage.getItem("token") || "");
	const navigate = useNavigate();

	const loginAction = async (userData) => {
		try {
			console.log(userData);
			const response = await fetch(
				"https://petco.onrender.com/api/v1/auth/login",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(userData),
				}
			);

			const res = await response.json();
			if (res) {
				setUser(res.user);
				setToken(res.token);
				localStorage.setItem("user", JSON.stringify(res.user))
				localStorage.setItem("token", res.token);
				alert("User logged in Successfully!");
				navigate("/");
				return;
			}
		} catch (error) {
			console.log("Error", error);
			alert("Failed to login user, try again");
		}
	};

	const logout = () => {
		setUser(null);
		setToken("");
		localStorage.removeItem("user")
		localStorage.removeItem("token");
		navigate("/");
	};

	return (
		<AuthContext.Provider value={{ token, user, loginAction, logout }}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;

export const useAuth = () => {
	return useContext(AuthContext);
};
