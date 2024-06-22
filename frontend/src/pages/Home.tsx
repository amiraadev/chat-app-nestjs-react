/** @format */

import React from "react";
import MainLayout from "../layouts/MainLayout";
import Sidebar from "../components/Sidebar";
import ProtectedRoutes from "../components/ProtectedRoutes";
import AuthOverlay from "../components/AuthOverlay";
MainLayout;
const Home = () => {
	return (
		<MainLayout>
			{/* <ProtectedRoutes> */}
				<>
					<Sidebar /> 
					<AuthOverlay /> 
					HOME PAGE
				</>
			{/* </ProtectedRoutes> */}
		</MainLayout>
	);
};

export default Home;
