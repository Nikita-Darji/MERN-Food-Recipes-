import React from 'react';
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Home from './pages/Home';
import './App.css'
import MainNavigation from './components/MainNavigation';
import axios from 'axios';
import AddFoodRecipes from './pages/AddFoodRecipes';
import EditRecepie from './pages/EditRecepie';

const getAllRecipes = async ()=>{
  let allRecipes=[]
  await axios.get('http://localhost:5000/recipe').then(res=>{
    allRecipes=res.data;
  })
  return allRecipes
}
const myrecepies=async()=>{
  let userData = JSON.parse(localStorage.getItem("user"))
  // console.log(userData.user);
  
  let getAll = await getAllRecipes()
  // console.log(getAll);
  
  return getAll.filter(item=>item.createdby===userData.user._id)
}

const router = createBrowserRouter([
  {path:'/',element:<MainNavigation/>,children:[
     {path:'/',element:<Home/>,loader:getAllRecipes},
      {path:'/recepies',element:<Home/>,loader:myrecepies},
      {path:'/favorites',element:<Home/>},
      {path:'/addFoodRecipes',element:<AddFoodRecipes/>},
      {path:'/editRecipe/:id',element:<EditRecepie/>}
  ]}
])
export default function App() {
  return (
    <>
    <RouterProvider router={router}></RouterProvider>
    </>
  )
}
