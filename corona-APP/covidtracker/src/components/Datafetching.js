import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Datafetching() {
 const[post,setPost]=useState({});
 const[id,setId]=useState(1);
 const[idbutton,setIdButton]=useState(1)
 useEffect(()=>{
    axios.get(`https://jsonplaceholder.typicode.com/posts/${idbutton}`)
    .then(res=>{
        console.log(res);
        setPost(res.data)
    })
    .catch(err=>{
        console.log(err)
    })
  },[idbutton])

  console.log("test");
  const handlebutton=()=>{
    setIdButton(id);
  }
  return (
    <div>
        <input type='text' value={id} onChange={e=>setId(e.target.value)}/>
        <button type='button' onClick={handlebutton}>fetch data</button>

        <div>{post.title}</div>
        {/* <ul>
            {
                posts.map(item =>(
                    <li key={item.id}>{item.title}</li>
                ))
            }
        </ul> */}
        
    </div>
  )
}

export default Datafetching