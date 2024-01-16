import React, { useEffect, useState } from 'react'

function Useeffect2() {
   const[x,setX]=useState(0);
   const[y,setY]=useState(0);
    const logMouseMovement=(e)=>{
        console.log('coordinates are')
        setX(e.clientX)
        setY(e.clientY);
    }

useEffect(()=>{

   window.addEventListener('mousemove',logMouseMovement)
   console.log('mouse moved')
   return ()=>{
    window.removeEventListener('mousemove',logMouseMovement)
    console.log('component unmount')
   }
},[]
)
return(
   <div>
    REACT HOOK x={x}, y={y}
   </div>
)}

export default Useeffect2