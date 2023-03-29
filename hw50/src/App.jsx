import './App.css';
import WebFont from "webfontloader";
import { useEffect } from "react";
import Blog from './components/blog/Blog'
import Header from './components/header/Header';
import About from './components/about/About';
import NotFound from './components/notFound/NotFound';
import {
  BrowserRouter, 
  Routes, 
  Route, 
  // Switch,
  // Link, 
  // NavLink, 
  // useParams,
  // useNavigate
} from 'react-router-dom';




function App() {

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Lora"],
      },
    });
  }, []);
    
  function Contacts() {
    return <div>Contacts</div>
  }

  // function NotFound() {
  //    console.log('?? 404 - Not Found ??');
  //   return <div>404 - Not Found</div>
  // }

  return (<>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/blog/Blog/Blog' element={<Blog />} />
        <Route path='/About' element={<About />} />
        <Route path='/contacts' element={<Contacts />} />
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </BrowserRouter>
  </>)
}

export default App;
