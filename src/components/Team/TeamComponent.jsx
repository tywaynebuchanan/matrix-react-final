import React, { Fragment } from 'react'
import MaleAvatar from '../../assets/images/team/male-avatar.jpg'
import FemaleAvatar from '../../assets/images/team/female-avatar.jpg'
import "./team.css"

const TeamComponent = () => {

const members = [
        {
            id: 1,
            name: "Juliene Williams",
            position: "Director",
            division: "Engineering",
            email: "Julienne.Williams@matrixgroupjm.com",
            gender: "Female"
        },
        {
            id: 2,
            name: "Max Williams",
            position: "Director",
            division: "Engineering | Concrete",
            email: "Max.Williams@matrixgroupjm.com",
            gender: "Female"
        },
        {
            id: 3,
            name: "Roger Williams",
            position: "Director",
            division: "Tech | Concrete | Chemical | Engineering",
            email: "Roger.Williams@matrixgroupjm.com",
            gender: "Female"
        },
        {
            id: 4,
            name: "Raine Williams",
            position: "Assistant Managing Director",
            division: "Tech | Engineering",
            email: "Raine.williams@matrixgroupjm.com",
            gender: "Female"
        },
        {
            id: 5,
            name: "Donald Louis Williams",
            position: "Chairman",
            division: "Tech | Engineering",
            email: "louis.williams@matrixgroupjm.com",
            gender: "Male"
        },
        {
            id: 6,
            name: "Kerith Foster",
            position: "Managing Director",
            division: "Tech | Concrete | Chemical | Engineering",
            email: "Kerith.Foster@matrixgroupjm.com",
            gender: "Male"
        },
    ]
  return (
    
    <Fragment>
          <div class="cardContainer">
            <div class="teamCards">
            {members.map(({id,name,position,division,email,gender})=>(
                <div class="teamCard" key = {id}>
                    <div class="card-image">
                        {gender === "Male" ? <img src={MaleAvatar} alt="" srcset=""/> : <img src={FemaleAvatar} alt="" srcset=""/> }
                    </div>
                    <div class="card-info">
                        <h3>{name}</h3>
                        <p>{position}</p>
                        <p>{division}</p>
                        <p>{email}</p>
                    </div>
                </div>
            ))}
                
            </div>
        </div>


    </Fragment>

  )
}

export default TeamComponent