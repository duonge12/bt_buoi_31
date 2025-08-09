import { createSlice } from "@reduxjs/toolkit";

export const searchNameSlice = createSlice({
	name: "searchName",
	initialState: "",
	reducers: {
		onSearchName: (state, action) => {
			return action.payload;
		},
	},
});
export const { onSearchName } = searchNameSlice.actions;
export default searchNameSlice.reducer;
