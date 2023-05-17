import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isSearchModalOpen: false,
	isHeaderDropdownOpen: false,
	isSearchTag: true,
};

const utilitySlice = createSlice({
	name: "utils",
	initialState,
	reducers: {
		toggleSearchModal: (state) => {
			state.isSearchModalOpen = !state.isSearchModalOpen;
		},
		toggleSearchTag: (state) => {
			state.isSearchTag = !state.isSearchTag;
		},
		toggleHeaderDropdown: (state) => {
			state.isHeaderDropdownOpen = !state.isHeaderDropdownOpen;
		},
	},
});

export const utilitySliceActions = utilitySlice.actions;
export const utilitySliceReducers = utilitySlice.reducer;
