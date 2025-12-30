import React, { useState } from 'react'
import Model from './Model'

export default function Navbar() {

  const [isopen, setisopen] = useState(false)

  const checkisOpen=()=>{
    setisopen(true)
  }
  return (
    <>
    <header>
        <h2>Food Blog</h2>
        <ul>
            <li>Home</li>
            <li>Recepies</li>
            <li>Favorites</li>
            <li onClick={checkisOpen}>Login</li>
        </ul>
    </header>
    {(isopen) && <Model onClose={()=>setisopen(false)}/>}
    </>
  )
}
