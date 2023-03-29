import "./Header.scss";
import {
  // BrowserRouter, 
  // Routes, 
  // Route, 
  // Link, 
  NavLink, 
  // useParams,
  // useNavigate
} from 'react-router-dom';


export default function Header() {
  return <>
    <header>
      <nav className="menu">
        <NavLink className={({ isActive }) => isActive ? "menuLinkActive" : ""} to="/blog/Blog/Blog">Blog</NavLink>
        <NavLink className={({ isActive }) => isActive ? "menuLinkActive" : ""} to="/About">About</NavLink>
        <NavLink className={({ isActive }) => isActive ? "menuLinkActive" : ""} to="/Contacts">Contacts</NavLink>
      </nav>
    </header>
  </>
}