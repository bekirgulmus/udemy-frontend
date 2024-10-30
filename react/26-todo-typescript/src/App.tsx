import React, { useState, FC } from 'react'
import { todoType } from "./apptypes.ts";
import './App.css'
import {TodoItem} from "./TodoItem.tsx";

const App: FC = () => {

  const [task, setTask] = useState<string>('');
  const [workDay, setWorkDay] = useState<number>(0);
  const [todoList, setTodoList] = useState<todoType[]>([]);

  console.log(todoList);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.name == 'task') {
      setTask(event.target.value);
    } else {
      setWorkDay(Number(event.target.value));
    }
  }

  const addNewTask = (): void => {
    const newTask = {taskName: task, workDay};
    setTodoList([...todoList, newTask]);
    setTask('');
    setWorkDay(0);
  }

  const deleteTask = (nameToDelete: string): void => {
    setTodoList(todoList.filter((task) => {
      return task.taskName !== nameToDelete;
    }))
  }

  return (
    <div className="App">
      <div className="mainCard">
        <input className="mainCardInput" type="text" name="task" value={task} onChange={handleChange} placeholder="Taskınızı giriniz..."/>
        <input className="mainCardInput" type="number" name="workDay" value={workDay} onChange={handleChange} placeholder="Kaç günde tamamlamalısınız"/>
        <button className="mainCardButton" onClick={addNewTask}>Yeni Task Ekle</button>
      </div>
      <div className="todoCard">
        {todoList.map((task:todoType, index) => (
          <TodoItem key={index} task={task} deleteTask={deleteTask}/>
        ))}
      </div>
    </div>
  )
}

export default App
