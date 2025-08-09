import { useDispatch } from "react-redux";
import { deleteStudent } from "../redux/features/students";

const ContextMenu = ({
	contextState,
	setContextState,
	handleOpenUpdateForm,
}) => {
	const { display, x, y, student } = contextState;
	const dispatch = useDispatch();
	const handleClickDelete = () => {
		dispatch(deleteStudent(student.maSV));
		setContextState({ display: "none", x: 0, y: 0, student: {} });
	};
	const handleClickUpdate = () => {
		handleOpenUpdateForm({
			display: "flex",
			student: student,
		});
		setContextState({ display: "none", x: 0, y: 0, student: {} });
	};
	return (
		<div
			className="context-menu"
			style={{ display: display, left: x, top: y }}
		>
			<button onClick={handleClickUpdate}>Sửa thông tin</button>
			<button onClick={handleClickDelete}>Xóa sinh viên</button>
		</div>
	);
};
export default ContextMenu;
