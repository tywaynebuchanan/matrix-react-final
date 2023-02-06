import React from 'react'
import "./about.css"
import Header from '../../components/Header'
import Image from "../../assets/images/header/about-us-img.jpeg"

const About = () => {
  return (
   <Header title = "About Us" image = {Image}>
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur qui 
    fuga repudiandae id rerum aliquam aliquid tenetur, corporis, architecto blanditiis ad! 
    Quia excepturi hic voluptatibus exercitationem error magni vel ullam.
   </Header>
  )
}

export default About