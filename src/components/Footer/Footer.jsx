import React from 'react'
import {Link} from "react-router-dom"
import Logo from "../../assets/images/logo.png"
import { FaLinkedin } from 'react-icons/fa'
import { FaFacebookF } from 'react-icons/fa'
import { AiOutlineTwitter } from 'react-icons/ai'
import { AiFillInstagram } from 'react-icons/ai'
import { links} from '../Navbar/data'
import { companies,getInTouch} from '../Navbar/data'
import "./footer.css"


const Footer = () => {

    const social = [
        {
            id: 1,
            name: "Facebook",
            path: "https:www.facebook.com",
            icon: <FaFacebookF/>
            
        },
        {
            id:2,
            name: "Twitter",
            path: "https:www.facebook.com",
            icon: <AiOutlineTwitter/>

        },
        {
            id: 3,
            name: "Instagram",
            path: "https:www.facebook.com",
            icon: <AiFillInstagram/>
        },
        {
            id: 4,
            name: "Facebook",
            path: "https:www.facebook.com",
            icon: <FaFacebookF/>
        },

    ]
  return (
    <footer>
        <div className="container footerContainer">
            <article>
            <Link to = "/" className='logo'>
                <img src={Logo} alt="NavLogo" className="logo" />
            </Link>
                <p>Lorem ipsum dolor sit, amet consectetur 
                adipisicing elit. Fuga, minima. 
                Beatae ipsa labore eius, dolore 
                provident pariatur omnis sed inventore 
                minima porro nihil corrupti tempora iure accusamus 
                ex tempore corporis?</p>
                <div className="footerSocials">
                   {social.map(({icon,name,path,id})=>(
                        <a href={path} key = {id} target ="_blank" rel='noreferrer noopener'>{icon}</a>
                   ))}
                </div>
            </article>

            <article>
                <h4>Permalinks</h4>
                {links.map(({name,path})=>(
                    <Link to={path}>{name}</Link>
                ))}
            </article>

            <article>
                <h4>Companies</h4>
                {companies.map(({company,path})=>(
                    <Link to={path}>{company}</Link>
                ))}
            </article>

            <article>
                <h4>Get In Touch</h4>
                {getInTouch.map(({name,path})=>(
                    <Link to={path}>{name}</Link>
                ))}
            </article>
        </div>
        <div className="footerCopyright">
            <small>2023 Matrix Group of Companies &copy; All Rights Reserved</small>
        </div>
    </footer>
  )
}

export default Footer