import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function EditRecepie() {
    const navigate=useNavigate()
    const [recepiesData, setrecepiesData] = useState({})
    const {id}=useParams()

    useEffect(() => {
      let userData = async()=>{
        await axios.get(`http://localhost:5000/recipe/${id}`)
        .then(response=>{
            let res=response.data
            setrecepiesData({
                title:res.title,
                ingredients:res.ingredients.join(','),
                instructions:res.instructions,
                time:res.time,
            })
        })
      }
      userData()
    }, [])
    

    const handlechange=(e)=>{
        let val = (e.target.name==="ingredients")?e.target.value.split(','):(e.target.name==="file")?e.target.files[0]:e.target.value
        setrecepiesData(pre=>({...pre,[e.target.name]:val}))
    }
    const handlesubmit=async(e)=>{
        e.preventDefault()
        console.log(recepiesData);
        
        await axios.put(`http://localhost:5000/recipe/${id}`,recepiesData,{
            headers:{
                'Content-Type':'multipart/form-data',
                'authorization':'bearer '+localStorage.getItem('token')
            }
        })
        .then(navigate('/'))
    }
  return (
    <div className='container'>
        <form className='form' onSubmit={handlesubmit}>
            <div className='form-control'>
                <label>Title</label>
                <input type='text' className='input' name='title' onChange={handlechange} value={recepiesData.title}></input>
            </div>
            <div className='form-control'>
                <label>Time</label>
                <input type='text' className='input' name='time' onChange={handlechange} value={recepiesData.time} ></input>
            </div>
            <div className='form-control'>
                <label>Ingredients</label>
                <textarea type='text' className='input' name='ingredients' row="5" onChange={handlechange} value={recepiesData.ingredients} ></textarea>
            </div>
            <div className='form-control'>
                <label>Instructions</label>
                <textarea type='text' className='input' name='instructions' row="5" onChange={handlechange} value={recepiesData.instructions} ></textarea>
            </div>
            <div className='form-control'>
                <label>Images</label>
                <input type='file' className='input' name='file' onChange={handlechange}></input>
            </div>
            <button type='submit'>Update</button>
        </form>

    </div>
  )
}
