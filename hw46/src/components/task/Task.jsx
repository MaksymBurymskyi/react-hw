import './Task.scss';
import { useForm } from "react-hook-form";
import { useState } from 'react';

export default function Task({ newTask, onCheck, toRemove }) {
  const { handleSubmit } = useForm();
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  
  const onSubmit = (_data, event, formId) => {
    event.preventDefault();

    setIsButtonClicked(prevState => {
    if (prevState) {
      toRemove(formId);
      console.log("formId :>> ", formId);
      setIsButtonClicked(false)
    } else {
      onCheck();
    }
  });
    // if (isButtonClicked) {
    //   toRemove (formId)
    //   console.log('formId :>> ', formId);
    //   setIsButtonClicked(false)
    // } else {
    //   onCheck()
    // };
  }

  // const removeForm = (form) => {
  //   // if (newTask.isChecked) form.remove();
  //   console.log(form.id);
  //   toRemove(form.id);
  // }
  
  return <>
    <form className="task" id={newTask.key} onClick={(event) => handleSubmit((data) => onSubmit(data, event, newTask.key))(event)}> 
      <div className="task__wrap" >
      <input className={`task__checkbox ${newTask.isChecked ? 'task__checkbox-checked' : ''}`} type="checkbox" />
      <span className={  `task__text ${newTask.isChecked ? 'task__text-done' : ''}` }>{newTask.nameTask}</span>
      </div>
      <button className="task__submitBtn" type="submit" onClick={() => setIsButtonClicked(true)}></button>  
      {/* <button className="task__submitBtn" type="submit" onClick={handleSubmit(onSubmit)}></button>   */}
      {/* <button className="task__submitBtn" type="submit" onClick={toRemove}></button>   */}
    </form> 
  </>;
}

// onClick={() => removeForm(document.getElementById(newTask.key))}

