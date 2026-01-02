import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import images from '../assets/images.jpg'
import { BsStopwatchFill } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";




export default function RecipesItem() {

    let path= window.location.pathname==='/recepies'
    const allrecipes= useLoaderData()
    // console.log(allrecipes.recipe);
    
  return (
    <div className='card-container'>
        {
            allrecipes.map((item,index)=>{
                return(
                    <div key={index} className='card'>
                        <img src={`http://localhost:5000/images/${item.coverImg}`} width='120px' height='100px'></img>
                        <div className='card-body'>
                            <div className='title'>{item.title}</div>
                            <div className='icons'>
                                <div className='timer'><BsStopwatchFill />{item.time}</div>
                                {(!path)?
                                <FaHeart />:
                                <div className='action'>
                                    <Link to={`/editRecipe/${item._id}`} className='editIcon'><FaEdit /></Link>
                                    <MdDelete />
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
