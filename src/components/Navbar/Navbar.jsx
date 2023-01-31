import React from 'react'
import {Link,NavLink} from "react-router-dom"
import Logo from "../../assets/images/logo.png"
import {links} from "./data"
import "./navbar.css"
import {GoThreeBars} from "react-icons/go"
const Navbar = () => {
  return (
   <div className="container navContainer">
    <Link to = "/" className='logo'>
        <img src={Logo} alt="NavLogo" className="logo" />
    </Link>

    <ul className = "navLinks">
    {links.map(({name,path},index)=>(
        <li key = {index}><NavLink to = {path} className ="logo">{name}</NavLink></li>
    ))}
    </ul>
    <button className="navToggleBtn"><GoThreeBars/></button>
   </div>
  )
}

export default Navbar