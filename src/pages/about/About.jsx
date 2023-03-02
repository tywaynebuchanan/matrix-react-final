import React from 'react'
import { Fragment } from 'react'
import "./about.css"
import Header from '../../components/Header'
import Image from "../../assets/images/header/about-us-img-3.jpeg"
import MissionImage from "../../assets/images/header/about-us-img-2.jpeg"

const About = () => {
  return (
    <Fragment>
         <Header title = "About Us" image = {Image}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur qui 
            fuga repudiandae id rerum aliquam aliquid tenetur, corporis, architecto blanditiis ad! 
            Quia excepturi hic voluptatibus exercitationem error magni vel ullam.
        </Header>


      <section className="aboutStory">
          <div className="container aboutStoryContainer">
            <div className="aboutSection-image">
              <img src={MissionImage} alt="Ocean Breeze" />
            </div>
            <div className="aboutSection-content">
              <h1>Our Story</h1>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing 
              elit. Perferendis dolor ipsam harum illum, iste ipsum provident 
              laudantium veritatis nisi tempore corporis recusandae 
              consequatur. Molestiae beatae consequatur expedita delectus sit fugiat.
              </p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Tempore sed blanditiis impedit, saepe recusandae itaque modi magni consectetur
               dolorum velit, omnis quidem illo? Illo ipsa quae eius ducimus sapiente ab.
               </p>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
               Magnam nisi modi similique labore, quia possimus voluptatum voluptatibus atque recusandae 
               aliquam veritatis in provident laborum! Nobis a delectus facere quod modi.</p>
            </div>
          </div>
      </section>

    {/*   Mission Statement*/ }
      <section className="aboutMission">
          <div className="container aboutMissionContainer">
          <div className="aboutSection-content">
              <h1>Our Mission</h1>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing 
              elit. Perferendis dolor ipsam harum illum, iste ipsum provident 
              laudantium veritatis nisi tempore corporis recusandae 
              consequatur. Molestiae beatae consequatur expedita delectus sit fugiat.
              </p>
            </div>
            <div className="aboutSection-image">
              <img src={MissionImage} alt="Ocean Breeze" />
            </div>
           
          </div>
      </section>
    {/*   Mission Statement*/ }

     {/*   Vision Statement*/ }
     <section className="aboutVision">
          <div className="container aboutVisionContainer">
            <div className="aboutSection-image">
              <img src={MissionImage} alt="Ocean Breeze" />
            </div>
            <div className="aboutSection-content">
              <h1>Our Vision</h1>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing 
              elit. Perferendis dolor ipsam harum illum, iste ipsum provident 
              laudantium veritatis nisi tempore corporis recusandae 
              consequatur. Molestiae beatae consequatur expedita delectus sit fugiat.
              </p>
            </div>
          </div>
      </section>
    {/*   Vision Statement*/ }
    </Fragment>
  

  
  )
}

export default About