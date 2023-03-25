import './App.css';
import WebFont from "webfontloader";
import { useEffect } from "react";
import Blog from './components/blog/Blog.jsx'



function App() {

useEffect(() => {
  WebFont.load({
    google: {
      families: ["Lora"],
    },
  });
}, []);

  return ( 
    <Blog></Blog>
  );
}

export default App;
