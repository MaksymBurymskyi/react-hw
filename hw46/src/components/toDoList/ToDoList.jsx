import "./ToDoList.scss";
import React from "react";
import { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import Task from "../task/Task";


export default function ToDoList() {

  const [taskList, setTaskList] = useState([{ nameTask: 'Почніть додавати задачі', isChecked: false , key: 0}]);
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [key, setKey] = useState(1)
  
  // useEffect(() => {
  //   console.log('taskList :>> ', taskList);
  // }, [taskList]);

  const onSubmit = (data, event) => {
    event.preventDefault();
    setKey(prevkey => prevkey + 1)
    setTaskList(prevTaskList => [{ nameTask: data.inputTask, isChecked: false, key: key }, ...prevTaskList]);
    reset();
  }

  const toggleCheck = index => {
    const forCheckList = [...taskList];
    forCheckList[index].isChecked = !forCheckList[index].isChecked;
    const chekcedItemsList = forCheckList.filter(item => item.isChecked === true)
    const unChekcedItemsList = forCheckList.filter(item => item.isChecked === false)
    const newList = unChekcedItemsList.concat(chekcedItemsList);
    setTaskList(newList );
  }

  const remove = remId => {
    const forCheckList = [...taskList];
    const cleredList = forCheckList.filter(item => item.key !== remId);
    setTaskList(cleredList );
    console.log('remId :>> ', remId);
  }
    
  return <div className="toDoList">
    <h2 className="toDoList__title">ToDo List</h2>
    <form className="toDoList__form" onSubmit={handleSubmit(onSubmit)}>
        
      <input type="text" placeholder="Add new task" {...register("inputTask", { required: 'no any task to add' })} aria-invalid={errors.inputTask ? "true" : "false"} />
      {errors.inputTask && <div className="toDoList__inpIndicator" role="alert">{errors.inputTask?.message}</div>}
      
      <button className="toDoList__submitBtn" type="submit"></button>  
    </form>  
    
    <div className="toDoList__tasksWrapper">
      {taskList.map((task, num) => <Task newTask={task} key={num} id={num} onCheck={() => toggleCheck(num)} toRemove={ remove } />)}
    </div>

    <p className="toDoList__quantity">Загальна кількість встановлених задач - {taskList.length} </p>
  </div>
}
