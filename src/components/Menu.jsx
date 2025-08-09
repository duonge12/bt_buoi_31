import { useEffect, useState } from "react";
import useDebounce from "../hooks/useDebounce";
import { useDispatch, useSelector } from "react-redux";
import { onSearchName } from "../redux/features/searchName";

const Menu = ({ handleOpenAddForm }) => {
	const filterName = useSelector((state) => state.searchName);
	const dispatch = useDispatch();
	const [currentValue, setCurrentValue] = useState(filterName);
	const debounceValue = useDebounce(currentValue, 500); // dừng gõ nữa giây mới trả giá trị
	const handleSearchTen = (e) => {
		setCurrentValue(e.target.value);
	};
	const handleClickAddStudent = () => {
		handleOpenAddForm({ display: "flex" });
	};
	useEffect(() => {
		dispatch(onSearchName(debounceValue));
	}, [debounceValue]);
	return (
		<div className="menuBar">
			<input
				type="text"
				placeholder="Tìm kiếm theo tên"
				value={currentValue}
				onChange={handleSearchTen}
			/>
			<button onClick={handleClickAddStudent}>Thêm sinh viên mới</button>
		</div>
	);
};
export default Menu;
