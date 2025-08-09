import { useState } from "react";

import Menu from "./components/Menu";
import Table from "./components/Table";
import ContextMenu from "./components/ContextMenu";
import UpdateForm from "./components/UpdateForm";
import AddForm from "./components/AddForm";

const App = () => {
	const [addFormState, setAddFormState] = useState({
		display: "none", //2 giá trị: none, flex
	});
	const [contextState, setContextState] = useState({
		display: "none", //2 giá trị: none, flex
		x: 0,
		y: 0,
		student: {},
	});
	const [upDateFormState, setUpDateFormState] = useState({
		display: "none", //2 giá trị: none, flex
		student: {},
	});
	return (
		<div>
			<Menu handleOpenAddForm={setAddFormState} />
			<Table triggerContextMenu={setContextState} />
			<ContextMenu
				contextState={contextState}
				setContextState={setContextState}
				handleOpenUpdateForm={setUpDateFormState}
			/>
			<UpdateForm
				upDateFormState={upDateFormState}
				setUpDateFormState={setUpDateFormState}
			/>
			<AddForm
				addFormState={addFormState}
				setAddFormState={setAddFormState}
			/>
		</div>
	);
};
export default App;
