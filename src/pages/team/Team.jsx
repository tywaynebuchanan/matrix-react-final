import React, { Fragment } from 'react'
import Header from '../../components/Header'
import TeamHeader from '../../assets/images/team/team-header.jpeg'
import TeamComponent from "../../components/Team/TeamComponent"


const Team = () =>{
    
    return (
        <Fragment>
             <Header title={"Our Team"} image={TeamHeader}>
                Lorem ipsum dolor sit amet consectetur adipisicing 
                elit. Blanditiis natus quidem voluptatem laboriosam 
                deserunt veniam aspernatur ullam ut reiciendis voluptatum 
                cum magni, aperiam maiores adipisci quibusdam consectetur, 
                ab sequi fuga.
        </Header>
        <TeamComponent />
        </Fragment>
       
    )
}

export default Team