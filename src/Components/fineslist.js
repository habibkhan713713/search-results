import React from 'react'
import Fine from './finecomp'


export default function Finecomp(props) {
   
  return (
    props.fineList.map(
   (fine,i)=>{
        return <Fine fine={fine} key={i}/>
  
   }

    )
 
  
    


    

  )
}

