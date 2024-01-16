import React, { useEffect, useState } from 'react'

function Useeffect() {
    const[count,setCount]=useState(0);
    const[name,setName]=useState('')
    useEffect(()=>{
            console.log('component is updating')
            document.title=`clicked button ${count} times`
        
    },[count])
  return (
    <div>
        <input type='text' value={name} onChange={e=>setName(e.target.value)} />
        <button onClick={()=>{setCount(count+1)}}>Button {count} clicked</button>
    </div>
  )
}

export default Useeffect
