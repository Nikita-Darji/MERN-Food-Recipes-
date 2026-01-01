import React, { useState } from 'react'
import photo from '../assets/photo.jpg'
import RecipesItem from '../components/RecipesItem'
import { useNavigate } from 'react-router-dom'
import Model from '../components/Model'
import Form from '../components/Form'

export default function Home() {
    const navi = useNavigate()
    const [isopen,setisopen]=useState(false)
    const addRecepi=()=>{
        let token= localStorage.getItem('token')
        if(token){
            navi('/addFoodRecipes')
        }else{
            setisopen(true)
        }
    }
  return (
    <>
    <section className='home'>
        <div className='left'>
            <h1>Food Recipe</h1>
            <h5>It is long establised that the lorem is sooo good to have we can do the both so pls dont judge</h5>
            <button onClick={addRecepi}>Share your Reccipe</button>
        </div>
        <div className='right'>
            <img src={photo} width='350' height='300'></img>
        </div>
    </section>
    <div className="divider">
        <div className="marquee">
            <div className="marquee-content">
            <p>Food Recipe</p>
            <p>Food Recipe</p>
            <p>Food Recipe</p>
            <p>Food Recipe</p>
            <p>Food Recipe</p>
            <p>Food Recipe</p>
            <p>Food Recipe</p>
            <p>Food Recipe</p>
            <p>Food Recipe</p>
            <p>Food Recipe</p>
            <p>Food Recipe</p>
            <p>Food Recipe</p>
            </div>
        </div>
    </div>
    {(isopen) && <Model onClose={()=>setisopen(false)}><Form setisopen={()=>setisopen(false)}/></Model>}

        <div className='recipe'>
            <RecipesItem/>
        </div>
    </>
  )
}
