import React from 'react'
import CTA from '../../components/CallToAction/CTA'
import Header from '../../components/Header/Header'
import Services from '../../components/OtherServices/Services'
import Testimonial from '../../components/Testimonial/Testimonial'
import Products from '../../components/Products/Products'
import "./home.css"

const Home = () => {
  return(
    <>
       <Header/>
      <Services/>
      <Testimonial/>
      <CTA />
    </>
 
  )
}

export default Home