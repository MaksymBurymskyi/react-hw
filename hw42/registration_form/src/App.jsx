import React, { Component } from "react";import "./App.css";
// import React, { Component, useEffect, useState } from "react";
import DescriptionBlock from "./components/description_block/DescriptionBlock";
import FormBlock from './components/form_block/FormBlock';

// import axios from 'axios';

class App extends Component {
  
  render(){
    return (
      <div className="container">
        <DescriptionBlock></DescriptionBlock>
        <FormBlock></FormBlock>
      </div> 
      );
  }
}


export default App;