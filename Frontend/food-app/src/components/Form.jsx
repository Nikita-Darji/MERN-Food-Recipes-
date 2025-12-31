import React, { useState } from 'react'
import axios from 'axios'

export default function Form({setisopen}) {
    // localStorage.clear()
    const [email, setemail] = useState('')
    const [password, setpasswoed] = useState('')
    const [isSignUp, setisSignUp] = useState(false)
    const [error, seterror] = useState('')

    const handleFormSubmit=async(e)=>{
        e.preventDefault()
        let endpoint= isSignUp?'signUp':'loginIn'
        await axios.post(`http://localhost:5000/${endpoint}`,{email,password})
        .then((res)=>{
            localStorage.setItem('token',res.data.token)
            localStorage.setItem('user',JSON.stringify(res.data))
            setisopen()
        })
        .catch(error=>{
            seterror(error.response?.data?.message)
        });
    }
  return (
    <>
    <form className='form' onSubmit={handleFormSubmit}>
        <div className='form-control'>
            <label>Email</label>
            <input type='email' className='input' onChange={(e)=>setemail(e.target.value)} required></input>
        </div>
        <div className='form-control'>
            <label>Password</label>
            <input type='password' className='input' onChange={(e)=>setpasswoed(e.target.value)} required></input>
        </div>
        <button type='submit'>{isSignUp?'SignUp':'Login'}</button><br></br>
        {(error != '') && <h6 className='error'>{error}</h6>}
        <p onClick={()=>setisSignUp(pre=>!pre)}>{isSignUp?'Alraedy have account':'Create New Account'}</p>
    </form>
    </>
  )
}
