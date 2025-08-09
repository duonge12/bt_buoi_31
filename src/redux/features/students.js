import { createSlice } from "@reduxjs/toolkit";
import { uid } from "uid";
const students = [
	{
		ten: "Nguyen Van A",
		sdt: "0912345678",
		email: "a@gmail.com",
	},
	{
		ten: "Tran Thi B",
		sdt: "0987654321",
		email: "b@gmail.com",
	},
	{
		ten: "Le Van C",
		sdt: "0901122334",
		email: "c@gmail.com",
	},
	{
		ten: "Pham Thi D",
		sdt: "0934455667",
		email: "d@gmail.com",
	},
	{
		ten: "Hoang Van E",
		sdt: "0977788899",
		email: "e@gmail.com",
	},
	{
		ten: "Do Thi F",
		sdt: "0923344556",
		email: "f@gmail.com",
	},
	{
		ten: "Bui Van G",
		sdt: "0945566778",
		email: "g@gmail.com",
	},
	{
		ten: "Nguyen Thi H",
		sdt: "0966677788",
		email: "h@gmail.com",
	},
	{
		ten: "Phan Van I",
		sdt: "0911223344",
		email: "i@gmail.com",
	},
	{
		ten: "Dang Thi J",
		sdt: "0988997766",
		email: "j@gmail.com",
	},
];

export const studentSlice = createSlice({
	name: "students",
	initialState: students.map((student) => {
		return {
			...student,
			maSV: uid(10),
		};
	}),
	reducers: {
		addStudent: (state, action) => {
			const newStudent = {
				...action.payload,
				maSV: uid(10),
			};
			state.push(newStudent);
		},
		upDateStudent: (state, action) => {
			const updatedStudent = action.payload;
			return state.map((student) =>
				student.maSV === updatedStudent.maSV ? updatedStudent : student
			);
		},
		deleteStudent: (state, action) => {
			const maSVToDelete = action.payload;
			return state.filter((student) => student.maSV !== maSVToDelete);
		},
	},
});
export const { addStudent, upDateStudent, deleteStudent } =
	studentSlice.actions;
export default studentSlice.reducer;
