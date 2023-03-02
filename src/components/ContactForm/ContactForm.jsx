import React from 'react'
import "./contactform.css"
import { MdLocationOn } from 'react-icons/md'
import { MdEmail} from 'react-icons/md'
import { BsPhoneFill } from 'react-icons/bs'
import {IoLogoWhatsapp} from 'react-icons/io'
import Map from "../../UI/Map"
import MapImage from "../../assets/images/map.png"


const ContactForm = () =>{

    const contactData = [
       {
        address: "Lot #1, Twickenham Park, Spanish Town, Saint Catherine.",
        phone: "(876) 984-2392 (3)",
        whatsapp: "876-555-7777",
        email: "info@matrixgroupja.com",
        icon1:  <MdLocationOn/>,
        icon2: <MdEmail/>,
        icon3: <BsPhoneFill/>,
        icon4: <IoLogoWhatsapp/>
       }
    ]

    const location = {
      address: '1600 Amphitheatre Parkway, Mountain View, california.',
      lat: 37.42216,
      lng: -122.08427,
    }
    return (
        <>
        <section class="contact-section">
        <div class="container">
          <div class="contact-box">
            <div class="form-box">
              <h2 class="title"><i class="fa-solid fa-paper-plane"></i> Send Us a Message</h2>
      
              <form action="" method="post">
                <div class="form-input-group">
                     <label for="name">Your Name</label>
                    <input type="text" name="name" id="name" required/>
                </div>
    
                <div class="form-input-group">
                    <label for="name">Email Address</label>
                    <input type="email" name="email" id="email" required/>
                </div>
    
                <div class="form-input-group">    
                  <label for="name">Phone Number</label>
                  <input type="tel" name="phonenumber" id="phonenumber" required/>
                </div>
             
            <div class="form-input-group">
                <label for="name">Your Message</label>
              <textarea rows="10"></textarea>
            </div>
    
              <div class="send-message-button">
                  <a href="/" class = "btn lg">Send Message</a>
              </div>
            </form>
        </div>

       { contactData.map(({address,phone,email,icon1,icon2,icon3,icon4,whatsapp})=>(
            <div class="contact-box-info">
              <h2 class="title">
               {icon1}
                Visit our location
              </h2>
              <p class="contact__info">
                {address}
              </p>
    
              <h2 class="title">
              {icon3} Give us a call</h2>
              <p class="contact__info">{phone}</p>
    
              <h2 class="title">{icon2} Email Us</h2>
              <p class="contact__info">
                <a href = "mailto:info@matrixgroupjm.com">{email}</a>
              </p>

              <h2 class="title">{icon4} Send us a Whatsapp Message</h2>
              <p class="contact__info">
                <a href = "mailto:info@matrixgroupjm.com">{whatsapp}</a>
              </p>
            </div>
        ))
       }
          </div>
        </div>
        </section>

        <section className='contact-section'>
        <div className = "container">
            <img src={MapImage} className = "MapImage" alt="Map of Matrix Group" width="1200" />
        </div>
         
        </section>
        </>
    )
}

export default ContactForm