



//import dotenv module
require('dotenv').config()

//import express module
const express = require('express');

//import cors module
const cors = require('cors')

//create server using express
const pfserver = express()

//inject cors into pfserver
   pfserver.use(cors())

//use middleware to convert JSON data to js object
   pfserver.use(express.json())

//Provide PORT
const PORT = 4000;

//run the server
pfserver.listen(PORT, ()=>{
    console.log("Our server is running successfully in PORT 4000");
    
})
