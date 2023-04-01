import "./Header.scss";
import { 
  NavLink, 
} from 'react-router-dom';


export default function Header() {
  return <>
    <header>
      <div className="logo">RUNO</div>
      <nav className="menu">
        <NavLink className={({ isActive }) => isActive ? "menuLinkActive" : ""} to="/blog">Home</NavLink>
        <NavLink className={({ isActive }) => isActive ? "menuLinkActive" : ""} to="/About">About</NavLink>
        <NavLink className={({ isActive }) => isActive ? "menuLinkActive" : ""} to="/Contacts">Contacts</NavLink>
      </nav>
    </header>
  </>
}