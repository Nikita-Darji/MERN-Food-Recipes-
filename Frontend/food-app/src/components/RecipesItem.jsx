import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import images from '../assets/images.jpg'
import { BsStopwatchFill } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

export default function RecipesItem() {

    let path= window.location.pathname==='/recepies'?true:false
    const allrecipes= useLoaderData()

    const [allRecipe,setallRecipe] = useState()

    let favorite = JSON.parse(localStorage.getItem('fav')) ?? []
    const [isfavRecipe,setisfavRecipe] =useState(false)

    const favRecepi=(item)=>{
        const favo = favorite.filter(reci=>reci._id !== item._id)
        favorite = favorite.filter(reci=>reci._id === item._id).length===0?[...favorite,item]:favo
        localStorage.setItem("fav",JSON.stringify(favorite))
        // setallRecipe(prv=>!prv)
    }

    useEffect(() => {
        setallRecipe(allrecipes)
    }, [allrecipes])
    
    const deleteItem=async(id)=>{
        await axios.delete(`http://localhost:5000/recipe/${id}`)
        .then((res)=>console.log(res))
        setallRecipe(recipe=>recipe.filter(recipe=>recipe._id !== id))
        const favo = favorite.filter(reci=>reci._id !== id)
        localStorage.setItem("fav",JSON.stringify(favo))
    }
    
  return (
    <div className='card-container'>
        {
            allRecipe?.map((item,index)=>{
                return(
                    <div key={index} className='card'>
                        <img src={`http://localhost:5000/images/${item.coverImg}`} width='120px' height='100px'></img>
                        <div className='card-body'>
                            <div className='title'>{item.title}</div>
                            <div className='icons'>
                                <div className='timer'><BsStopwatchFill />{item.time}</div>
                                {(!path)?
                                <FaHeart onClick={()=>favRecepi(item)}
                                style={{color:(favorite.some(res=>res._id===item._id))?"red":""}}/>:
                                <div className='action'>
                                    <Link to={`/editRecipe/${item._id}`} className='editIcon'><FaEdit /></Link>
                                    <MdDelete onClick={()=>deleteItem(item._id)} />
                                </div>
                                }
                                
                            </div>

                        </div>
                    </div>
                )
            })
        }

    </div>
  )
}
