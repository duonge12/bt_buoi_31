import { configureStore } from "@reduxjs/toolkit";
import searchNameReducer from "./features/searchName";
import studentReducer from "./features/students";

export default configureStore({
	reducer: {
		searchName: searchNameReducer,
		students: studentReducer,
	},
});
