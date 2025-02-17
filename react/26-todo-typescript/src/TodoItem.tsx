import { todoType } from "./apptypes.ts";

type PropsType = {
  task: todoType;
  deleteTask: (nameToDelete: string) => void;
}

export const TodoItem = ({task, deleteTask} : PropsType) => {
  return (
    <div className="card">
      <div>
        <p>{task.taskName}</p>
        <p>{task.workDay}</p>
        <button onClick={() => deleteTask(task.taskName)}>Sil</button>
      </div>
    </div>
  )
}
