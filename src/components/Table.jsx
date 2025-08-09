import { useSelector } from "react-redux";

const Table = ({ triggerContextMenu }) => {
	const filterName = useSelector((state) => state.searchName);
	const students = useSelector((state) => state.students);
	const filteredData = students.filter((student) => {
		if (!filterName) return true; // Nếu chưa nhập gì thì hiển thị tất cả
		const filterLowerCase = filterName.toLowerCase();
		const nameLowerCase = student.ten.toLowerCase();
		return nameLowerCase.startsWith(filterLowerCase);
	});
	const handleContextMenu = (e, student) => {
		e.preventDefault();
		const x = e.clientX;
		const y = e.clientY;
		triggerContextMenu({ display: "flex", x: x, y: y, student: student });
	};
	const handleTurnOffContextMenu = () => {
		triggerContextMenu({ display: "none", x: 0, y: 0, student: {} });
	};
	return (
		<table>
			<thead>
				<tr>
					<th>MSV</th>
					<th>Tên</th>
					<th>SĐT</th>
					<th>Email</th>
				</tr>
			</thead>
			<tbody>
				{filteredData.map((student) => (
					<tr
						key={student.maSV}
						onContextMenu={(e) => handleContextMenu(e, student)}
						onClick={handleTurnOffContextMenu}
					>
						<td>{student.maSV}</td>
						<td>{student.ten}</td>
						<td>{student.sdt}</td>
						<td>{student.email}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};
export default Table;
