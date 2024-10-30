import './App.css'

import TaskCreate from "./components/TaskCreate.jsx";
import TaskList from "./components/TaskList.jsx";
import {useEffect, useState} from "react";
import axios from "axios";

function App() {

  async function fetchData() {
    const response = await axios.get('http://localhost:3000/tasks')
    setTasks(response.data);
  }

  useEffect(() => {
    fetchData();
  },[]);

  const [tasks, setTasks] = useState([]);

  const deleteTaskById = async (id) => {
    await axios.delete(`http://localhost:3000/tasks/${id}`)

    const afterDeletingTasks = tasks.filter((task) => task.id !== id);
    setTasks(afterDeletingTasks);
  }

  const editTaskById = async (id, updatedTitle, updatedTaskDesc) => {
    await axios.put(`http://localhost:3000/tasks/${id}`,{
      title: updatedTitle,
      taskDesc: updatedTaskDesc,
    })

    const updatedTasks = tasks.map(task => {
      if (task.id === id) {
        return {
          id, title: updatedTitle, taskDesc: updatedTaskDesc,
        }
      } return task;
    });
    setTasks(updatedTasks);
  }

  const createTask = async (title, taskDesc) => {

    const response = await axios.post('http://localhost:3000/tasks',{
      title,
      taskDesc,
    });

    const createdTask = [
      ...tasks,
      response.data
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
