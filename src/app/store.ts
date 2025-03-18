// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { configureStore } from "@reduxjs/toolkit";
import localforage from "localforage";
import { persistReducer } from "redux-persist";

import { dataFormulatorReducer } from "./dfSlice";

export type AppDispatch = typeof store.dispatch;

const persistConfig = {
	key: "root",
	//storage,
	storage: localforage,
};

const persistedReducer = persistReducer(persistConfig, dataFormulatorReducer);

let store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});

export default store;
