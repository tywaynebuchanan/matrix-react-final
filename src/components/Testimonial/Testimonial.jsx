import React from 'react'
import Slider from "react-slick";
import './testimonial.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import TestimonialCard from '../../UI/TestimonialCard';
import {Fragment} from 'react'


const Testimonial = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        // fade: true,
        responsive: [
            {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
            }
        ]
      };
      const images = [
        {
            atl: "Lady in Yellow",
            imgurl: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600",
            text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima molestias quis necessitatibus consequuntur suscipit facilis magnam ducimus voluptas",
            name: "Mary Sue",
            title: "Regional Manager"
        },
        {
            atl: "Lady in Yellow",
            imgurl: "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=600",
            text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima molestias quis necessitatibus consequuntur suscipit facilis magnam ducimus voluptas",
            name: "Andrew Holdness",
            title: "Regional Manager"
        },
        {
            atl: "Lady in Yellow",
            imgurl: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600",
            text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima molestias quis necessitatibus consequuntur suscipit facilis magnam ducimus voluptas",
            name: "Portia Willer",
            title: "Regional Manager"
        },
      ]
  return (
    <section className="testimonials">
        <div className="container testimonialContainer">
            <div>
            <h2>What our customers are saying!</h2>
            <Slider {...settings}>
                {images.map(({imgurl,atl,text,name,title})=>(
                    <Fragment>
                        <TestimonialCard image={imgurl} atl={atl}/>
                        <div className="textContent">
                                <p>{text}</p>
                                <p className="avatarName">{name} | <span>{title}</span></p>
                        </div>
                   
                    </Fragment>
                
                ))}
            
            </Slider>
        </div>
        </div>
    </section>
  )
}

export default Testimonial