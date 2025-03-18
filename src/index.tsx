// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import React from "react";

import "./index.css";

import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

import { AppFC } from "./app/App";
import store from "./app/store";

let persistor = persistStore(store);

const domNode = document.getElementById("root") as HTMLElement;
const root = createRoot(domNode);

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<AppFC />
			</PersistGate>
		</Provider>
	</React.StrictMode>,
);
