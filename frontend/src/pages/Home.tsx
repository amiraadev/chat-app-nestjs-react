/** @format */

import React from "react";
import MainLayout from "../layouts/MainLayout";
import Sidebar from "../components/Sidebar";
import ProtectedRoutes from "../components/ProtectedRoutes";
MainLayout;
const Home = () => {
	return (
		<MainLayout>
			<ProtectedRoutes>
				<>
					<Sidebar />
					HOME PAGE
				</>
			</ProtectedRoutes>
		</MainLayout>
	);
};

export default Home;
