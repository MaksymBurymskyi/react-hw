import React, { Component } from "react";
import './FormBlock.css';

class FormBlock extends Component {
  constructor(){
    super();
    this.state = {
      checkNameResult: 'too short name',
      checkEmailResult: '',
      email: false,
      checPasswordkResult: '',
      styleNameBgd: 'transparent',
      styleEmailBgd: 'transparent',
      stylePasswordBgd: 'transparent',
    }; 
  }
  
 checkName = (event) => {
    const name = event.target.value;
    const isNum = /[0-9]/.test(name);

    if (isNum) {
      event.target.value = name.slice(0, -1);
   }
   this.setState(_prevState => ({
     checkNameResult: name.length < 2 ? 'too short name' : '',
     styleNameBgd: name.length < 2 ? 'rgba(255, 0, 0, 0.8)' : 'transparent',
  }));  
  }

  checkEmail = (event) => {
    const email = event.target.value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i)

    this.setState(() => ({
      email: email ? email[0] : false,
      checkEmailResult: email ? '' : 'wrong email',
      styleEmailBgd: email ? 'transparent' : 'rgba(255, 0, 0, 0.8)',
    }))
    console.log(email);
  }

  handleSubmit = (event) => {
    event.preventDefault()  

    if (this.state.email && !this.state.checkNameResult && this.state.checPasswordkResult) {
      event.target.form.submit()
    } else {
      return alert('Перевірте правильність вводу')
    }
  }

  checkPassword = (event) => {
    if (event.target.value.length < 4) {
      this.setState({ checPasswordkResult: 'short password',
       stylePasswordBgd: 'rgba(255, 0, 0, 0.8)' });
    } else if (event.target.value.length < 8) {
      this.setState({ checPasswordkResult: 'average password',
       stylePasswordBgd: 'rgba(60, 190, 240, 0.8)' });
    }else  {
      this.setState({ checPasswordkResult: 'good password length',
       stylePasswordBgd: 'rgba(0, 200, 20, 0.9)' });
    }
  }
  
  render() {
    return (
      <form className="formBlock__form" action="#">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" onKeyUp={this.checkName} />
        <div className="formBlock__inpIndicator" style={{background: this.state.styleNameBgd}}>{this.state.checkNameResult }</div>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" onChange={this.checkEmail}/>
        <div className="formBlock__inpIndicator" style={{background: this.state.styleEmailBgd}}>{this.state.checkEmailResult }</div>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" onChange={this.checkPassword}/>
        <div className="formBlock__inpIndicator" style={{background: this.state.stylePasswordBgd}}>{this.state.checPasswordkResult }</div>
        <button className="formBlock__submitBtn" type="submit" onClick={this.handleSubmit}>Create Account</button>
        <button className="formBlock__signUpBtn" type="button">Sign up with Google</button>
      </form>   
    );
  }
}

export default FormBlock;