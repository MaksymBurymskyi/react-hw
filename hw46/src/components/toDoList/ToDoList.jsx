import "./ToDoList.scss";
import React from "react";
import { useState } from 'react';
import { useForm } from "react-hook-form";
import Task from "../task/Task";


export default function ToDoList() {

  const [taskList, setTaskList] = useState([{ nameTask: '' }]);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [newTask, setNewTask] = useState({ nameTask: '' });
  
  const addTask = (task) => { 
    setTaskList(prevTaskList => [...prevTaskList, newTask]);
    setNewTask({ nameTask: task });
  };

  const onSubmit = data => {
    console.log(data.inputTask);
    setNewTask({ nameTask: data.inputTask });
    addTask(data.inputTask);
    // data.inputTask = '0';
    console.log(data.inputTask);
  };
  
  return <div className="toDoList">
    <h2 className="toDoList__title">ToDo List</h2>
    <form className="toDoList__form" onSubmit={handleSubmit(onSubmit)}>
        
      <input type="text" placeholder="Add new task" {...register("inputTask", { required: 'no any task to add' })} aria-invalid={errors.inputTask ? "true" : "false"} />
      {errors.inputTask && <div className="toDoList__inpIndicator" role="alert">{errors.inputTask?.message}</div>}
      
      <button className="toDoList__submitBtn" type="submit"></button>  
    </form>  
    
    <div className="toDoList__tasksWrapper">
      {taskList.map((task, num) => <Task newTask={task.nameTask} key={ num} />)}
    </div>
  </div>
}
