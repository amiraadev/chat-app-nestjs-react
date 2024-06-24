/** @format */

import React from "react";
import MainLayout from "../layouts/MainLayout";
import Sidebar from "../components/Sidebar";
import ProtectedRoutes from "../components/ProtectedRoutes";
import AuthOverlay from "../components/AuthOverlay";
import ProfileSettings from "../components/ProfileSettings";
import RoomList from "../components/RoomList";
import { Flex } from "@mantine/core";
import AddChatroom from "../components/AddChatroom";
import JoinRoomOrChatwindow from "../components/JoinRoomOrChatwindow";
MainLayout;
const Home = () => {
	return (
		<MainLayout>
			<>
				<ProfileSettings />
				<AuthOverlay />
				<Sidebar />
				{/* <AddChatroom />
          <Flex direction={{ base: "column", md: "row" }}>
            <RoomList />
            <JoinRoomOrChatwindow />
          </Flex> */}
				<ProtectedRoutes>
					<>
						<AddChatroom />
						<Flex direction={{ base: "column", sm: "row" }} w={"100vw"}>
							<RoomList />
							<JoinRoomOrChatwindow />
						</Flex>
					</>
				</ProtectedRoutes>
				HOME PAGE
			</>
		</MainLayout>
	);
};

export default Home;
