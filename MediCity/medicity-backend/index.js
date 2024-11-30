
//import dotenv module
import 'dotenv/config'

//import express module
import express from 'express'


//import cors module
import cors from 'cors'


//create server using express
const mediserver = express()


//inject cors into pfserver
   mediserver.use(cors())

//use middleware to convert JSON data to js object
   mediserver.use(express.json())

//Provide PORT
const PORT = 4000;

import adminRouter from './routes/adminRoute.js'
mediserver.use('/api/admin', adminRouter)

import doctorRouter from './routes/doctorRoute.js'
mediserver.use('/api/doctors', doctorRouter)

import userRouter from './routes/userRoute.js'
mediserver.use('/api/user', userRouter)

mediserver.get('/', (req,res)=>{
   res.send("API is working successfully ")
})

import path from 'path';
import { fileURLToPath } from 'url';

// Simulate __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files from the 'uploads' folder
mediserver.use('/uploads', express.static(path.join(__dirname, 'uploads')));


//run the server
mediserver.listen(PORT, ()=>{
    console.log("Our server is running successfully in PORT 4000");
    
})



//connecting DataBase
import cnctDataBase from './config/monodb.js'
cnctDataBase()

//connecting cloudinary
import cnctCloudinary from './config/cloudinary.js'

cnctCloudinary()