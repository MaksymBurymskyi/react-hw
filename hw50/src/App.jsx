import './App.css';
import WebFont from "webfontloader";
import { useEffect } from "react";
import Blog from './components/blog/Blog'
import Header from './components/header/Header';
import About from './components/about/About';
import NotFound from './components/notFound/NotFound';
import Article from './components/article/Article';
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

  return (<>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/blog' element={<Blog />} />
        <Route path='*' element={<Blog />} />
        <Route path='/About' element={<About />} />
        <Route path='/contacts' element={<Contacts />} />
        <Route path='/article/:id' element={<Article />} />
        <Route path='/404' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </>)
}

export default App;
