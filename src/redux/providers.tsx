"use client";
import React from "react";
import { persistor, store } from "./store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

const Providers = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<Provider store={store}>{children}</Provider>
		</>
	);
};

export default Providers;
