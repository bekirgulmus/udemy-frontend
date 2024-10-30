import './App.css'

import TaskCreate from "./components/TaskCreate.jsx";
import TaskList from "./components/TaskList.jsx";
import { useEffect, useState, useContext } from "react";
import { TasksContext } from "./context/task.jsx";

function App() {
  const { fetchTasks, tasks } = useContext(TasksContext);

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="App">
      <TaskCreate/>
      <h1>Görevler</h1>
      <TaskList tasks={tasks} />
    </div>
  )
}

export default App
