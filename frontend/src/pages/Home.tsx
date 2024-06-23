/** @format */

import React from "react";
import MainLayout from "../layouts/MainLayout";
import Sidebar from "../components/Sidebar";
import ProtectedRoutes from "../components/ProtectedRoutes";
import AuthOverlay from "../components/AuthOverlay";
import ProfileSettings from "../components/ProfileSettings";
MainLayout;
const Home = () => {
	return (
		<MainLayout>
			{/* <ProtectedRoutes> */}
				<>
					<Sidebar /> 
					<ProfileSettings /> 
					<AuthOverlay /> 
					HOME PAGE
				</>
			{/* </ProtectedRoutes> */}
		</MainLayout>
	);
};

export default Home;
