import React from 'react'
import { useLoaderData } from 'react-router-dom'
import images from '../assets/images.jpg'
import { BsStopwatchFill } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";


export default function RecipesItem() {

    const allrecipes= useLoaderData()
    // console.log(allrecipes.recipe);
    
  return (
    <div className='card-container'>
        {
            allrecipes?.recipe?.map((item,index)=>{
                return(
                    <div key={index} className='card'>
                        <img src={`http://localhost:5000/images/${item.coverImg}`} width='120px' height='100px'></img>
                        <div className='card-body'>
                            <div className='title'>{item.title}</div>
                            <div className='icons'>
                                <div className='timer'><BsStopwatchFill />30 min</div>
                                <FaHeart />
                            </div>

                        </div>
                    </div>
                )
            })
        }

    </div>
  )
}
