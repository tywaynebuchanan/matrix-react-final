import React from 'react'
import { Avatar } from '@material-ui/core';

const TestimonialCard = ({image,atl}) => {
  return (
    <div style={{
         display: 'flex',
        justifyContent: 'center',
    }}>
         <Avatar src={image} atl={atl} style={{
            width:120,
            height:120,
            border: '3px solid var(--color-gray-100)',
            }}/>
    </div>
   
  )
}

export default TestimonialCard