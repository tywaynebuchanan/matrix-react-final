import React from 'react'
import {Link} from 'react-router-dom'
import Image from '../../assets/images/image1.png'
import {AiOutlineArrowRight} from "react-icons/ai"
import "./header.css"

const Header = () => {
  return (
   <header className='mainHeader'>
    <div className='container mainHeaderContainer'>
        <div className="mainHeaderLeft">
            <h4>#Largest bleach manufactoring in the Caribbean</h4>
            <h1>Matrix Group of Companies</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae optio 
            placeat pariatur hic sunt eius tenetur, modi voluptate 
            quisquam aspernatur unde fuga alias amet sed. Quae nihil fugiat et iure!</p>
            <Link to="/services" className = "btn lg">Learn More</Link>
        </div>
       
        <div className="mainHeaderRight">
        <div className="mainHeaderCircle"></div>
            <div className="mainHeaderImage">
                <img src={Image} alt="Industry" className='headerImg'/>
            </div>
        </div>
    </div>
   </header>
  )
}

export default Header