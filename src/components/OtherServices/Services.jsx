import React from 'react'
import ServicesHead from '../ServicesHead'
import {FaCrown} from 'react-icons/fa'
import { AiFillCaretRight } from 'react-icons/ai'
import { services } from './serviceslist'
import Card from '../../UI/Card'
import {Link} from 'react-router-dom'
import "./services.css"

const Services = () => {
  return (
   <section className='services'>
    <div className="container servicesContainer">
         <ServicesHead icon = {<FaCrown/>} title="Services"/>
   
    <div className="servicesWrapper">
        {
            services.map(({id,icon,title,info,path})=>{
                return (
                    <Card className="services_Service" key = {id}>
                            <span>{icon}</span>
                            <h4>{title}</h4>
                            <small>{info}</small>
                            <a href={path} className = "btn">Learn More</a>
                    </Card>
                )
            
               
            })
        }
    </div>
    </div>
   </section>
  )
}

export default Services