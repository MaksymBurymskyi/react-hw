import './App.css';
import WebFont from "webfontloader";
import { useEffect } from "react";
import ToDoList from './components/toDoList/ToDoList';


function App() {

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Inter'],
      },
    });
  }, []);
    
  return (<>
    <ToDoList>
    </ToDoList>
  </>)
}

export default App;
