import React, { useEffect, useState } from 'react'
import Model from './Model'
import Form from './Form'
import { NavLink } from 'react-router-dom'

export default function Navbar() {

  let userData = JSON.parse(localStorage.getItem("user"))
  // const user = userData.newUser
  const [isopen, setisopen] = useState(false)
  let token = localStorage.getItem('token')
  const [isLogin, setisLogin] = useState(token?true:false)

  useEffect(() => {
    setisLogin(token?true:false)
  }, [token])
  

  const checkisOpen=()=>{
    if(token){
      localStorage.removeItem('token')
      localStorage.removeItem('user')
      setisLogin(false)
    }else{
        setisopen(true)
    }
  }
  return (
    <>
    <header>
        <h2>Food Blog</h2>
        <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/recepies">MyRecepies</NavLink></li>
            <li><NavLink to="/favorites">MyFavorites</NavLink></li>
            <li onClick={checkisOpen}><p className='login'>{isLogin?'LogOut':'LogIn'}{userData?.newUser.email ? `(${userData.newUser.email})`:" "}</p></li>
            {/* <li>{user.email}</li> */}
        </ul>
    </header>
    {(isopen) && <Model onClose={()=>setisopen(false)}><Form setisopen={()=>setisopen(false)}/></Model>}
    </>
  )
}
