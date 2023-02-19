import React from "react";
import TaskItems from "./TaskItems";

function TaskList({
	tasks,
	showInComplete,
	setTaskStatus,
	removeTask,
	setIncomplete,
}) {
	return (
		<>
			<ul className="task-list">
				{tasks
					.filter((task) => (showInComplete ? task.status !== 1 : true))
					.map((task) => (
						<TaskItems
							key={tasks.id}
							task={task}
							setTaskStatus={setTaskStatus}
							removeTask={removeTask}
						/>
					))}
			</ul>
			<div className="filter-wrapper">
				<label htmlFor="filter" className="filter-label">
					Show incompleted task only
				</label>
				<input
					type="checkbox"
					id="filter"
					checked={showInComplete}
					onChange={(e) => setIncomplete(e.target.checked)}
				/>
			</div>
		</>
	);
}

export default TaskList;
