import './App.css'

import TaskCreate from "./components/TaskCreate.jsx";
import TaskList from "./components/TaskList.jsx";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);

  const deleteTaskById = (id) => {
    const afterDeletingTasks = tasks.filter((task) => task.id !== id);
    setTasks(afterDeletingTasks);
  }

  const editTaskById = (id, updatedTitle, updatedTaskDesc) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === id) {
        return {
          id, title: updatedTitle, taskDesc: updatedTaskDesc,
        }
      } return task;
    });
    setTasks(updatedTasks);
  }

  const createTask = (title, taskDesc) => {
    const createdTask = [
      ...tasks,
      {
        id: Math.round(Math.random() * 999999),
        title,
        taskDesc,
      }
    ];
    setTasks(createdTask);
  }

  return (
    <div className="App">
      <TaskCreate onCreate={createTask}/>
      <h1>Görevler</h1>
      <TaskList tasks={tasks} onDelete={deleteTaskById} onUpdate={editTaskById} />
    </div>
  )
}

export default App
