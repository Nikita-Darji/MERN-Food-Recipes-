const Recipes= require("../models/recipes")
const getrecipe=async(req,res)=>{
    const recipe = await Recipes.find()
    res.json({recipe})
}
const getrecipesid=async(req,res)=>{
    const recipe = await Recipes.findById(req.params.id)
    res.json(recipe)
}
const addrecipies=async(req,res)=>{
    const {title,ingredients,instructions,time}=req.body

    if(!title || !ingredients|| !instructions){
        res.json({message:"Required fields cant be empty"})
    }
    const newRecipe = await Recipes.create({
        title,ingredients,instructions,time
    })
    return res.json({newRecipe})
}
const editrecepies=async(req,res)=>{
    const {title,ingredients,instructions,time}=req.body
    let recipe= await Recipes.findById(req.params.id)

    try{
        if(recipe){
        await Recipes.findByIdAndUpdate(req.params.id,req.body,{new:true})
        res.json({title,ingredients,instructions,time})
    }
    }catch(err){
        return res.status(404).json({message:"error"})
    }
}
const deleterecepies=(req,res)=>{
    res.json({message:"heluuuullo"})
}

module.exports={getrecipe,getrecipesid,addrecipies,editrecepies,deleterecepies}