import React from "react";

function AddTaskForm({ handleInputChange, handleSubmit, newTask }) {
	return (
		<form
			onSubmit={handleSubmit}
			onChange={handleInputChange}
			action="#"
			className="form"
		>
			<label htmlFor="new-item">Add to the todo list</label>
			<input type="text" id="newitem" value={newTask} />
			<button type="submit">Add item</button>
		</form>
	);
}

export default AddTaskForm;
