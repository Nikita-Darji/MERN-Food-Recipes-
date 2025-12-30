const express = require('express')
const router = express.Router()
const {usersignUp,userLogin,getUser} = require('../controller/user')

router.post('/signUp',usersignUp)
router.post('/loginIn',userLogin)
router.get('/user/:id',getUser)

module.exports=router