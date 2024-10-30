import { createContext, useState } from "react";
import axios from "axios";

const TasksContext = createContext();

function Provider({ children }) {
  const [tasks, setTasks] = useState([]);

  async function fetchTasks() {
    const response = await axios.get('http://localhost:3000/tasks')
    setTasks(response.data);
  }

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


  const value = {
    tasks,
    fetchTasks,
    deleteTaskById,
    editTaskById,
    createTask,
  };

  return (
    <TasksContext.Provider value={value}>
      {children}
    </TasksContext.Provider>
  )
}

export { Provider, TasksContext}
