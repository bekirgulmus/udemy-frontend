import TaskShow from "./TaskShow.jsx";
import { useContext } from "react";
import { TasksContext } from "../context/task.jsx";

function TaskList() {
  const { tasks } = useContext(TasksContext)

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskShow key={task.id} task={task} />
      ))}
    </div>
  )

}

export default TaskList;
