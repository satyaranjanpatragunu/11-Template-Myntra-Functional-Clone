import React, { useState } from 'react'

function Usestatehook3() {
  const[items,setItems]=useState([])
  const addItem=()=>{
    setItems([...items,{
        id:items.length,
        value:Math.floor(Math.random()*10356)+1
    }])
  }
    return (
    <div>
        <button onClick={addItem}>ADD a item</button>
        <ul>
            {
                items.map(item=>(
                    <li key={item.id}>{item.value}</li>
                ))
            }
        </ul>
    </div>
  )
}

export default Usestatehook3