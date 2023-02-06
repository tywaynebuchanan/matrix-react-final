import React from 'react'

const ServicesHead = ({icon,title,className}) => {
  return (
    <div className={`servicesHead ${className}`}>
            <span>{icon}</span>
            <h2>{title}</h2>
        </div>
  )
}

export default ServicesHead