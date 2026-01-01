const express = require("express")
const { getrecipe,getrecipesid,addrecipies,editrecepies,deleterecepies,upload} = require("../controller/recipe")
const verifytoken = require("../middleware/auth")
const router = express.Router()

router.get('/',getrecipe)  //get all recipes
router.get('/:id',getrecipesid) //get recepies by id
router.post('/',upload.single('file'),addrecipies) //add recipes
router.put('/:id',editrecepies) //edit recepies
router.delete('/:id',deleterecepies) //delete recepies
module.exports=router