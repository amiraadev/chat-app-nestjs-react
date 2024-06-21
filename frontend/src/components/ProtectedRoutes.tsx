/** @format */

import React, { useEffect } from "react";
import { useUserStore } from "../store/userStore";
import { useGeneralStore } from "../store/generalStore";

const ProtectedRoutes = ({ children }: { children: React.ReactElement }) => {
	const userId = useUserStore((state) => state.id);
	const toggleLoginModal = useGeneralStore((state) => state.toggleLoginModal);

	useEffect(() => {
		if (!userId) {
			toggleLoginModal();
		}
	}, [toggleLoginModal, userId]);

	if (userId) {
		return children;
	}
	return <>Protected</>;
};

export default ProtectedRoutes;
