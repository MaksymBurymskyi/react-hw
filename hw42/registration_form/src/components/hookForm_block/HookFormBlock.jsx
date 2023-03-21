import './HookFormBlock.css';
import { useForm } from "react-hook-form";

export default function HookFormBlock() {
  
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
    setTimeout(() => {
      console.log("data:", JSON.stringify(data, null, 2) );
    }, 800);
    
  }

  return (
      <form className="formBlock__form" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" {...register("name", { required: 'Name is required', minLength: { value: 2, message: 'Name must be longer' }, pattern: { value: /^\D+$/g, message: 'numbers is prohibited' } })} aria-invalid={errors.name ? "true" : "false"} />
        {errors.name && <div className="formBlock__inpIndicator" role="alert">{errors.name?.message}</div>}
        
        <label htmlFor="email">Email</label>
        <input type="email" {...register("email", { required: "Email Address is required", pattern:{ value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: 'invalid Email Address'} })} id="email" aria-invalid={errors.email ? "true" : "false"} />
        {errors.email && <div className="formBlock__inpIndicator" role="alert">{errors.email?.message}</div>}
        
        <label htmlFor="password">Password</label>
        <input type="password" id="password" {...register("password", { required: 'password is required', minLength: {value: 4, message: "password is too short" }})}  aria-invalid={errors.password ? "true" : "false"} />
        {errors.password && <div className="formBlock__inpIndicator" role="alert">{errors.password?.message}</div>}
        
        <button className="formBlock__submitBtn" type="submit" >Create Account</button>
        <button className="formBlock__signUpBtn" type="button">Sign up with Google</button>
      </form>   
    );
}