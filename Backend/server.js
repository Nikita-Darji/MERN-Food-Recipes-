const express = require("express")
const app = express()
const dotenv = require("dotenv").config()
const connectionDb=require('./config/connectionDB');
const cors = require('cors')

const PORT = process.env.PORT || 3000
connectionDb()
app.use(express.json())
app.use(cors())

app.use('/recipe',require('./routes/recipe'))

app.listen(PORT,(err)=>{
    console.log(`app is listning on port ${PORT}`);
    
})