import { useState } from "react";

function TaskCreate({onCreate,onUpdate,task, taskFormUpdate}){
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
      onUpdate(task.id, title, taskDesc);
    } else {
      onCreate(title, taskDesc);
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
