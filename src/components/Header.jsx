import React from 'react'


const Header = ({title,image,children}) => {
  return (
    <header className='header'>
        <div className="headerContainer">
            <div className="headerContainerBg">
                <img src={image} alt="Header Background" />
            </div>
            <div className="headerContent">
                <h2>{title}</h2>
                <p>{children}</p>
            </div>
        </div>
    </header>
  )
}

export default Header