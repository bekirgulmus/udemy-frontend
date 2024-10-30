import { useState, useContext } from "react";
import { TasksContext } from "../context/task.jsx";

function TaskCreate({task, taskFormUpdate, onUpdate}){
  const { createTask, editTaskById } = useContext(TasksContext);

  const [title, setTitle] = useState(task ? task.title : '');
  const [taskDesc, setTaskDesc] = useState(task ? task.taskDesc : '');

  const handleChange = (e) => {
    setTitle(e.target.value);
  }

  const handleTaskChange = (e) => {
    setTaskDesc(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (taskFormUpdate) {
      //editTaskById(task.id, title, taskDesc);
      onUpdate(task.id, title, taskDesc);
    } else {
      createTask(title, taskDesc);
    }

    setTitle('');
    setTaskDesc('');
  }

  return (
    <div>
      {taskFormUpdate ? (
        <div className="task-update">
          <h3>Lütfen Taskı Düzenleyiniz!</h3>
          <form className="task-form">
            <label className="task-label">Başlığı Düzenleyiniz</label>
            <input className="task-input" value={title} onChange={handleChange}/>
            <label className="task-label">Taskı Düzenleyiniz!</label>
            <textarea className="task-input" rows={5} value={taskDesc} onChange={handleTaskChange}/>
            <button className="task-button update-button" onClick={handleSubmit}>Düzenle</button>
          </form>
        </div>
      ) : (
        <div className="task-create">
          <h3>Lütfen Task Ekleyiniz</h3>
          <form className="task-form">
            <label className="task-label">Başlık</label>
            <input className="task-input" value={title} onChange={handleChange}/>
            <label className="task-label">Task Giriniz!</label>
            <textarea className="task-input" rows={5} value={taskDesc} onChange={handleTaskChange}/>
            <button className="task-button" onClick={handleSubmit}>Oluştur</button>
          </form>
        </div>
      )}
    </div>

  )
}

export default TaskCreate;
