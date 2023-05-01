import { configureStore } from "@reduxjs/toolkit";
import { utilitySliceReducers } from "./slice/utilitySlice";

const store = configureStore({
	reducer: {
		utils: utilitySliceReducers,
	},
});

export default store;
