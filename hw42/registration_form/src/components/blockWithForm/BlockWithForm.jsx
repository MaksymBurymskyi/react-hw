import React, { Component } from "react";
import './BlockWithForm.css';
import FormBlock from "../form_block/FormBlock";

class BlockWithForm extends Component {
  
  render() {
    return (
      <div className="formBlock">
        <h2 className="formBlock__title">Create an account</h2>
        <p className="formBlock__subTitle">Let’s get started with your 30 days free trial</p>
        <FormBlock></FormBlock>
        <p className="formBlock__signInLink">Already have an account?<a href="/">Sign in</a></p>
      </div> 
      );
  }
}

export default BlockWithForm;