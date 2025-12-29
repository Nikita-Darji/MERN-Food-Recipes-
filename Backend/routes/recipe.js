const express = require("express")
const { getrecipe,getrecipesid,addrecipies,editrecepies,deleterecepies } = require("../controller/recipe")
const router = express.Router()

router.get('/',getrecipe)  //get all recipes
router.get('/:id',getrecipesid) //get recepies by id
router.post('/',addrecipies) //add recipes
router.put('/:id',editrecepies) //edit recepies
router.delete('/:id',deleterecepies) //delete recepies
module.exports=router