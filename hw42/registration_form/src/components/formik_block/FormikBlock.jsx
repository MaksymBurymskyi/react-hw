// import React, { Component } from "react";
import './FormBlock.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';



  
const FormikBlock = () => (
  <Formik
    initialValues={{ name: '', email: '' }}
    validate={values => {
      const errors = {};
      if (!values.name) {
        errors.name = 'Required';
      }
      if (!values.email) {
        errors.email = 'Required';
      }
      return errors;
    }}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 400);
    }}
  >
    {({ isSubmitting }) => (
      <Form className="formBlock__form">
        <Field type="text" name="name" />
        <ErrorMessage name="name" component="div" />
        <Field type="email" name="email" />
        <ErrorMessage name="email" component="div" />
        <Field type="password" name="password" />
        <ErrorMessage name="password" component="div" />
        
        <button className="formBlock__submitBtn" type="submit" disabled={isSubmitting}>Create Account</button>
      </Form>
    )}
  </Formik>
);

export default FormikBlock;

// class FormBlock extends Component {
//   constructor(){
//     super();
//     this.state = {
//       checkNameResult: 'too short name',
//       checkEmailResult: '',
//       email: false,
//       checPasswordkResult: '',
//       styleNameBgd: 'transparent',
//       styleEmailBgd: 'transparent',
//       stylePasswordBgd: 'transparent',
//     }; 
//   }
  
//  checkName = (event) => {
//     const name = event.target.value;
//     const isNum = /[0-9]/.test(name);

//     if (isNum) {
//       event.target.value = name.slice(0, -1);
//    }
//    this.setState(_prevState => ({
//      checkNameResult: name.length < 2 ? 'too short name' : '',
//      styleNameBgd: name.length < 2 ? 'rgba(255, 0, 0, 0.8)' : 'transparent',
//   }));  
//   }

  // checkEmail = (event) => {
  //   const email = event.target.value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i)

  //   this.setState(() => ({
  //     email: email ? email[0] : false,
  //     checkEmailResult: email ? '' : 'wrong email',
  //     styleEmailBgd: email ? 'transparent' : 'rgba(255, 0, 0, 0.8)',
  //   }))
  //   console.log(email);
  // }

  // handleSubmit = (event) => {
  //   event.preventDefault()  

  //   if (this.state.email && !this.state.checkNameResult && this.state.checPasswordkResult) {
  //     event.target.form.submit()
  //   } else {
  //     return alert('Перевірте правильність вводу')
  //   }
  // }

//   checkPassword = (event) => {
//     if (event.target.value.length < 4) {
//       this.setState({ checPasswordkResult: 'short password',
//        stylePasswordBgd: 'rgba(255, 0, 0, 0.8)' });
//     } else if (event.target.value.length < 8) {
//       this.setState({ checPasswordkResult: 'average password',
//        stylePasswordBgd: 'rgba(60, 190, 240, 0.8)' });
//     }else  {
//       this.setState({ checPasswordkResult: 'good password length',
//        stylePasswordBgd: 'rgba(0, 200, 20, 0.9)' });
//     }
//   }
  
//   render() {
//     return (
//       <div className="formBlock">
//         <h2 className="formBlock__title">Create an account</h2>
//         <p className="formBlock__subTitle">Let’s get started with your 30 days free trial</p>
//         <form className="formBlock__form" action="#">
//           <label htmlFor="name">Name</label>
//           <input type="text" name="name" id="name" onKeyUp={this.checkName} />
//           <div className="formBlock__inpIndicator" style={{background: this.state.styleNameBgd}}>{this.state.checkNameResult }</div>
//           <label htmlFor="email">Email</label>
//           <input type="email" name="email" id="email" onChange={this.checkEmail}/>
//           <div className="formBlock__inpIndicator" style={{background: this.state.styleEmailBgd}}>{this.state.checkEmailResult }</div>
//           <label htmlFor="password">Password</label>
//           <input type="password" name="password" id="password" onChange={this.checkPassword}/>
//           <div className="formBlock__inpIndicator" style={{background: this.state.stylePasswordBgd}}>{this.state.checPasswordkResult }</div>
//           <button className="formBlock__submitBtn" type="submit" onClick={this.handleSubmit}>Create Account</button>
//           <button className="formBlock__signUpBtn" type="button">Sign up with Google</button>
//         </form>
//         <p className="formBlock__signInLink">Already have an account?<a href="/">Sign in</a></p>
//       </div> 
//       );
//   }
// }

// export default FormBlock;