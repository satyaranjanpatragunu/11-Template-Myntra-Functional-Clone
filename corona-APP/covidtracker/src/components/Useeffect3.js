import React, { useState } from 'react'
import Useeffect2 from './Useeffect2';

function Useeffect3() {
    const[display,setDisplay]=useState(true);
  return (
    <div>
<button onClick={()=>setDisplay(!display)}>toggle button</button>
{display && <Useeffect2/>}
    </div>
  )
}

export default Useeffect3