import React, { Component } from "react";
import "./App.css";
import DescriptionBlock from "./components/description_block/DescriptionBlock";
import BlockWithForm from "./components/blockWithForm/BlockWithForm";

class App extends Component {
  
  render(){
    return (
      <div className="container">
        <DescriptionBlock></DescriptionBlock>
        <BlockWithForm></BlockWithForm>
      </div> 
      );
  }
}


export default App;