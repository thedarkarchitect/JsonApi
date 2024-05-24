import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
	return (
		<div className="layout">
			<Head>
				<title>PetCo</title>
			</Head>
			<header>
				<Navbar />
			</header>
			<main className="main-container"><Outlet/></main>
			<footer>
				<Footer />
			</footer>
		</div>
	);
};

export default MainLayout;
