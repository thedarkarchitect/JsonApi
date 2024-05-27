import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
	return (
		<div>
			<Head>
				<title>PetCo</title>
			</Head>
			<header>
				<Navbar />
			</header>
			<main className=""><Outlet/></main>
			<footer className="absolute bottom w-full">
				<Footer />
			</footer>
		</div>
	);
};

export default MainLayout;
