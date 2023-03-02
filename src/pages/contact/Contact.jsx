import React from 'react'
import Header from '../../components/Header'
import Image from "../../assets/images/header/contact-us-img.jpeg"
import "./contact.css"
import ContactForm from '../../components/ContactForm/ContactForm'

const Contact = () => {
  return (
    <>
    <Header title={"Get in Touch"} image={Image}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex beatae placeat 
      tenetur laudantium quo. Magni excepturi quidem, ullam iste, 
      nemo nostrum quod aut molestiae voluptatibus dolore odio et, totam ea!
    </Header>
    <ContactForm/>
    </>
  
  )
}

export default Contact