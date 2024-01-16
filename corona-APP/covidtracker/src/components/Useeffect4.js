import React, { useEffect, useState } from 'react'

function Useeffect4() {
const[count,setCount]=useState(0);
  const timeinterval=()=>{
        // setCount(count+1)
        setCount(prevCount=>prevCount+1)//this set count keeps tracks of previous value so we dont have to specify that in useeffect dependency
  }
useEffect(()=>{
    const interval=setInterval(timeinterval,1000);
    return ()=>{
        clearInterval(interval)
    }
// },[count])
},[])

  return (
    <div>
        {count}
    </div>
  )
}

export default Useeffect4