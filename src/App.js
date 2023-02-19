// import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import AddTaskForm from "./components/AddTaskForm";

function App() {
	const [tasks, setTasks] = useState([
		{ id: "task_1", title: "Learn JS", status: 1 },
		{ id: "task_2", title: "Code a Todo List", status: 0 },
	]);

	const [showInComplete, setIncomplete] = useState(false);
	const [newTask, setNewTask] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		if (newTask) {
			const task = {
				id: Date.now(),
				title: newTask,
				status: 0,
			};
			setTasks([...tasks, task]);
			setNewTask("");
		}
	};

	const handleInputChange = (e) => {
		setNewTask(e.target.value);
	};

	const setTaskStatus = (taskId, status) => {
		setTasks(
			tasks.map((task) => {
				if (task.id === taskId) {
					return { ...task, status: status ? 1 : 0 };
				}
				return task;
			})
		);
	};

	const removeTask = (taskId) => {
		setTasks(tasks.filter((task) => task.id !== taskId));
	};
	return (
		<div className="container">
			<Header title="Todo List" subTitle="Get one thing done" />
			<TaskList
				tasks={tasks}
				showInComplete={showInComplete}
				setTaskStatus={setTaskStatus}
				removeTask={removeTask}
				setIncomplete={setIncomplete}
			/>

			<AddTaskForm
				handleInputChange={handleInputChange}
				handleSubmit={handleSubmit}
				newTask={newTask}
			/>
		</div>
	);
}

export default App;
