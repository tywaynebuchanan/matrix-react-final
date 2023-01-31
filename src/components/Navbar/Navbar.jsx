import React from 'react'
import {Link,NavLink} from "react-router-dom"
import Logo from "../../assets/images/logo.png"
import {links} from "./data"
import "./navbar.css"
import {GoThreeBars} from "react-icons/go"
import {IoMdClose} from "react-icons/io"
import { useState } from 'react'
const Navbar = () => {

  const [show,setShow] = useState(false)
  return (
    <nav>
         <div className="container navContainer">
    <Link to = "/" className='logo'>
        <img src={Logo} alt="NavLogo" className="logo" />
    </Link>

    <ul className ={`navLinks ${show ? 'showNav' : 'hideNav'} `}>
    {links.map(({name,path},index)=>(
        <li key = {index}><NavLink to = {path} className ={({isActive})=> isActive ? "active-nav": ""}>{name}</NavLink></li>
    ))}
    </ul>
    <button className="navToggleBtn" onClick={(()=>setShow(!show))}>{show ? <IoMdClose/> : <GoThreeBars/>}</button>
   </div>
    </nav>
  
  )
}

export default Navbar