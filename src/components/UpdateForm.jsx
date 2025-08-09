import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { upDateStudent } from "../redux/features/students";
const validationSchema = Yup.object({
	ten: Yup.string().trim().required("Không được để trống"),
	sdt: Yup.string()
		.required("Không được để trống")
		.matches(
			/^(?:\+84|0)(?:3[2-9]|5[6|8|9]|7[0|6-9]|8[1-9]|9[0-9])[0-9]{7}$/,
			"Không đúng định dạng số điện thoại"
		),
	email: Yup.string()
		.email("Nhập email phù hợp")
		.required("Không được để trống"),
});

const UpdateForm = ({ upDateFormState, setUpDateFormState }) => {
	const dispatch = useDispatch();
	const { display, student } = upDateFormState;
	const handleCloseForm = () => {
		setUpDateFormState({ display: "none", student: {} });
	};
	const handleSubmit = (value) => {
		dispatch(upDateStudent(value));
		setUpDateFormState({ display: "none", student: {} });
	};
	return (
		<div
			className="updateForm"
			style={{ display: display }}
		>
			<Formik
				initialValues={student}
				validationSchema={validationSchema}
				onSubmit={handleSubmit}
				enableReinitialize
			>
				<Form>
					<h1>Sửa thông tin sinh viên</h1>
					<div className="inputGroup">
						<div className="inputRow">
							<label htmlFor="maSV">Mã sinh viên</label>
							<Field
								id="maSV"
								name="maSV"
								readOnly
							/>
						</div>
						<div className="inputRow">
							<label htmlFor="ten">Tên</label>
							<Field
								id="ten"
								name="ten"
							/>
							<ErrorMessage
								name="ten"
								component="div"
								style={{ color: "red" }}
							/>
						</div>
						<div className="inputRow">
							<label htmlFor="sdt">Số điện thoại</label>
							<Field
								id="sdt"
								name="sdt"
							/>
							<ErrorMessage
								name="sdt"
								component="div"
								style={{ color: "red" }}
							/>
						</div>
						<div className="inputRow">
							<label htmlFor="sdt">Email</label>
							<Field
								id="email"
								name="email"
							/>
							<ErrorMessage
								name="email"
								component="div"
								style={{ color: "red" }}
							/>
						</div>
					</div>
					<div className="buttonGroup">
						<button type="submit">Sửa</button>
						<button
							type="button"
							onClick={handleCloseForm}
						>
							Thoát
						</button>
					</div>
				</Form>
			</Formik>
		</div>
	);
};
export default UpdateForm;
