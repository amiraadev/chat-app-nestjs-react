/** @format */

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "@mantine/core/styles.css";

import { MantineProvider } from "@mantine/core";
import { ApolloProvider } from "@apollo/client";
import { client } from "./apolloClient";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<ApolloProvider client={client}>
		<MantineProvider>
			<App />
		</MantineProvider>
		</ApolloProvider>

	</React.StrictMode>
);
