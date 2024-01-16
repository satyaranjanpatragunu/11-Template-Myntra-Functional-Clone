import React, { useState } from 'react'

export default function Usestatehook2() {
    const [name, setName] = useState({ firstName: '', lastName: '' });


    return (
       <div>
            <input type='text' placeholder='FIRSTNAME' value={name.firstName} onChange={e=>setName({...name,firstName:e.target.value})}  />
            <input type='text' placeholder='LASTNAME' value={name.lastName} onChange={e=>setName({...name,lastName:e.target.value})} />
     <div>
        <h1>THE TEXT WRITTEN IN FIRST NAME:{name.firstName}</h1>
        <h1>THE TEXT WRITTEN IN LAST NAME:{name.lastName}</h1>
        <h2>{JSON.stringify(name)}</h2>
     </div>
        </div>
    )
}
