import React, { Fragment } from 'react'
import Header from '../../components/Header'
import Image from "../../assets/images/header/about-us-img.jpeg"
import WaterTreatment from "../../assets/images/services/water-treatment-1.jpeg"
import Chemicals from "../../assets/images/services/chemicals-1.jpeg"
import "./services.css"
const Services = () => {

 
  return (
    <Fragment>
        <Header title="Services" image={Image}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ea 
        accusantium maiores consequatur. Dolore qui iusto alias enim vero reprehenderit, 
        sit officiis dicta fugiat placeat praesentium! Fugiat possimus sit corrupti!
      </Header>

      <section className="aboutStory">
          <div className="container aboutStoryContainer">
            <div className="aboutSection-image">
              <img src={WaterTreatment} alt="WaterTreatmentPlant" />
            </div>
            <div className="aboutSection-content">
              <h1>Matrix Tech Limited (Water Treatment)</h1>
              <p>(MTL) Matrix Tech Limited, a subsidiary of Matrix Group of Companies, 
              was subsequently registered with the Registrar 
              of Companies in October 2014 and focuses on research and development.
              </p>
              <p>(MTL) Matrix Tech Limited is 100% Jamaican owned.
               The plant, which was partially commissioned in June 2017, 
               currently employs 20 persons from within Spanish Town and the greater 
               St. Catherine area. However, upon full operation of 
              the plant, we anticipate that this number will increase to over 60.
               </p>
               <p>(MTL) Matrix Tech Limited manufactures a range 
               of Poly-aluminum Chloride (PACl) in liquid form (MATPAC).
                Our  plant serves the procurement needs of corporate users locally 
                (including the National Water Commission) and internationally. 
                We also supply sewage treatment plants such as Soapberry, 
                as well as housing developers who offer sewage treatment options 
                and manufacturing plants. Additionally, we have been in dialogue with other countries' 
               national water agencies across the Caribbean and Latin America.
               </p>
            </div>
          </div>
      </section>

    {/*   Mission Statement*/ }
      <section className="aboutMission">
          <div className="container aboutMissionContainer">
          <div className="aboutSection-content">
              <h1>Matrix Chemicals Limited</h1>
              <p>Matrix Chemicals is the largest bleach
               manufacturer in the caribbean. 
                Matrix produces chemicals which undergo an
                 eco-friendly process. The company locally 
                 provides Jamaicans with readily available household 
                 chemicals for adults from all age groups. Ranging 
                 from high quality products such as all purpose soap 
                 and dish washing liquid to amoral and bleach, the company 
                 stands out by offering variety. Being a Jamaican based Chemical 
                 company, MCL specializes in house household chemicals such as hand 
                 sanitizers, soaps for different purposes, bleach and other cleaning agents. 
                 Though focused on making high quality household products, 
                 the company has extended its services to produce other items such as Amoral.
</p>
            </div>
            <div className="aboutSection-image">
              <img src={Chemicals} alt="Chemicals" />
            </div>
           
          </div>
      </section>
    {/*   Mission Statement*/ }

     {/*   Vision Statement*/ }
     <section className="aboutVision">
          <div className="container aboutVisionContainer">
            <div className="aboutSection-image">
              <img src={WaterTreatment} alt="Ocean Breeze" />
            </div>
            <div className="aboutSection-content">
              <h1>Matrix Concrete Limited</h1>
              <p>Started in 2008. Distributes sand and gravel</p>
            </div>
          </div>
      </section>
    {/*   Vision Statement*/ }

    <section className="aboutMission">
          <div className="container aboutMissionContainer">
          <div className="aboutSection-content">
              <h1>Matrix Engineering Limited</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing 
              elit. Quas neque hic veniam quam aperiam sequi, voluptatibus 
              tempore, eligendi eaque quia aliquam 
              aut officiis quis similique perferendis! Sunt possimus odit consequatur?</p>
            </div>
            <div className="aboutSection-image">
              <img src={Chemicals} alt="Chemicals" />
            </div>
           
          </div>
      </section>
    </Fragment>
   
   
  )
}

export default Services