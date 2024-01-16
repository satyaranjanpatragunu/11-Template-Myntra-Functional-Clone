import React, { useState } from 'react'

export default function Usestatehook() {
    const initialState=0;
    const [count, setCount] = useState(initialState);
     const decrementby5=()=>{
        for(let i=0;i<5;i++){
            setCount(count+5)
        }
     }
    return (
        <div>
            <h1>{count}</h1>

            <div>
                <button onClick={()=>{setCount(count+1)}}>Increment</button>
                <button onClick={()=>{setCount(initialState)}}>RESET</button>
                <button onClick={()=>{setCount(count-1)}}>Decrement</button>
                <button onClick={decrementby5}>DecrementBY 5</button>
            </div>


        </div>
    )
}
