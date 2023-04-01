import './Task.scss';
import { useForm,  } from "react-hook-form";

export default function Task({ newTask }) {
  const { handleSubmit } = useForm();
  
  const toggleClass = () => {
    document.querySelector('.task__text').classList.toggle('task__text-done');
    document.querySelector('.task__checkbox').classList.toggle('task__checkbox-checked');
  }

  const removeForm = (form) => {
  form.remove();
  }
  
  return <>
    <form className="task" onClick={handleSubmit(toggleClass)}> 
      
      <input className="task__checkbox" type="checkbox" />
      <span className="task__text">{newTask}</span>
      
      <button className="task__submitBtn" type="button" onClick={() => removeForm(document.querySelector('.task'))}></button>  
    </form> 
  </>;
}



