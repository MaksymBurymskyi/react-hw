import React, { Component } from "react";
import './DescriptionBlock.css';

class DescriptionBlock extends Component {
render(){
    return (
      <div className="descrBlock">
        <h2 className="descrBlock__title">abc.com</h2>
        <p className="descrBlock__description">abc.com is the best place to find remote talent. We’ve been super impress by the quality of applicants.</p>
        <p className="descrBlock__sign">Madhushan Sasanka
          <span>CEO, abc.com</span>
        </p>
      </div> 
      );
  }
}

export default DescriptionBlock;