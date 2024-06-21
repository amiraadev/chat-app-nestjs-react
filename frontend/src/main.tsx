/** @format */

import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { MantineProvider } from "@mantine/core";
import { ApolloProvider } from "@apollo/client";
import "@mantine/core/styles.css";

import App from "./App.tsx";
import "./index.css";
import { client } from "./apolloClient";
import Home from "./pages/Home.tsx";

const router = createBrowserRouter([{ path: "/", element: <Home /> }]);
ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<ApolloProvider client={client}>
			<MantineProvider>
				<RouterProvider router={router}/>
					<App />
			</MantineProvider>
		</ApolloProvider>
	</React.StrictMode>
);
