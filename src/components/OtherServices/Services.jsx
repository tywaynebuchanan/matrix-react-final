import React from 'react'
import ServicesHead from '../ServicesHead'
import { services } from './serviceslist'
import Card from '../../UI/Card'
import "./services.css"

const Services = () => {
  return (
   <section className='services'>
    <div className="container servicesContainer">
         <ServicesHead title="Services"/>
   
    <div className="servicesWrapper">
        {
            services.map(({id,icon,title,info,path,alt})=>{
                return (
                    <Card className="services_Service" key = {id}>
                            <img src={icon} alt={alt} width="100"/>
                            {/* <span>{icon}</span> */}
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