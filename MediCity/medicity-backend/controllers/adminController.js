
import bcrypt from 'bcrypt'
import validator from "validator"
import {v2 as cloudinary} from 'cloudinary'
import doctorModel from '../models/doctorModel.js'
import  jwt from 'jsonwebtoken'
import appointmentModel from '../models/appointmentModel.js'
import userModel from '../models/userModel.js'
import messageModel from '../models/messageModel.js'
import careerModel from '../models/careerModel.js'


//API for adding doctors

const addDoctor = async(req, res) => {
      try {
          const {name, email, password, speciality, 
            degree, experience, about, fees, address} = req.body
          const imageFile = req.file

          console.log({name, email, password, speciality, degree, experience, about, fees, address}, imageFile);
          
//checking doctor details
           if (!name || !email || !password || !speciality || !degree || !experience || !about || !fees || !address) {
                  return res.json({success:false, message:"Some Details Are Missing"})
           }


//validating e-mail format
           if(!validator.isEmail(email))  {
                   return res.json({success:false, message:"Please Enter A Valid E-mail"})
           }

//validating password strength
            if (password.length < 8) {
                   return res.json({success:false, message:"Please Enter A Strong Password"})
            }           
     
//hashing doctor passsword
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)
        

//upload image to cloudinary 
          const imageUpload = await cloudinary.uploader.upload(imageFile.path, {resource_type:"image"})
          const imageUrl = imageUpload.secure_url
          
          const doctorData = {
                 name,
                 email,
                 image: imageUrl,
                 password: hashedPassword,
                 speciality,
                 degree,
                 experience,
                 about,
                 fees,
                 address: JSON.parse(address),
                 date: Date.now()
          }

          const newDoctor = new doctorModel(doctorData)
          await newDoctor.save()

          res.json({success:true, message: "New Doctor Added"})
      }
      catch (error){
           console.log(error);
           res.json({success:false, message:error.message})
           
      }
}

//API for admin Login
const loginAdmin = async (req,res) => {
    try{
        const {email, password} = req.body

        if(email === process.env.EMAIL_ADMIN && password === process.env.PASSWORD_ADMIN){
               const token = jwt.sign(email+password,process.env.JWT_SECRET)
               console.log("token : ", token);
               
               res.json({success:true,token})
        }
        else{
            res.json({success:false, message:"Invalid Credentials...!"})
        }

    }
    catch(error){
        console.log(error);
        res.json({success:false, message:error.message})
        
   }
}


//api to get all doctor list for admin panel

const allDoctors = async (req, res) => {
    try {
        const doctors = await doctorModel.find({}).select('-password')
        res.json({success:true, doctors})
    }
    catch(error){
        console.log(error)
        res.json({success:false, message:error.message})
    }
}

//api to get all appointments list

const appointmentsAdmin = async(req, res) => {

    try{
        const appointments = await appointmentModel.find({})
        res.json({success:true, appointments})

    }
    catch(error){
        console.log(error)
        res.json({success:false, message:error.message})
    }
}

//api to cancel appointment from admin side

const appointmentCancel = async (req, res) => {

    try{

        const { appointmentId} = req.body

        const appointmentData = await appointmentModel.findById(appointmentId)


        await appointmentModel.findByIdAndUpdate(appointmentId, {cancelled : true})

        //releasing doctor slot

        const {doctorId, slotDate, slotTime} = appointmentData

        const doctorData = await doctorModel.findById(doctorId)

        let slots_booked = doctorData.slots_booked

        slots_booked[slotDate] = slots_booked[slotDate].filter(e => e !== slotTime)

        await doctorModel.findByIdAndUpdate(doctorId, {slots_booked})

        res.json({success:true, message: 'Appointment Cancelled'})
    }
    catch(error){
        console.log(error)
        res.json({success: false, message: error.message})
    }
}


//api to get dashboard data for admin panel 

const adminDashboard = async (req,res) => {

    try{

        const doctors = await doctorModel.find({})
        const users = await userModel.find({})
        const appointments = await appointmentModel.find({})

            const dashData = {
                doctors: doctors.length,
                patients: users.length,
                appointments: appointments.length,
                latestAppointments: appointments.reverse().slice(0,5)
            }
        res.json({success:true, dashData})

    }
    catch(error){
        console.log(error)
        res.json({success: false, message: error.message})
    }
}


//api to get all messages for admin panel

const allMessages = async (req, res) => {
    try {
        const messages = await messageModel.find()
        res.json({success:true, messages})
    }
    catch(error){
        console.log(error)
        res.json({success:false, message:error.message})
    }
}


//API for adding careers

const addCareer = async(req, res) => {
    try {

        console.log("Request Body:", req.body)
        const {title, department, vaccancies, qualification, experience} = req.body
        

        console.log({title, department, vaccancies, qualification, experience});
        

         if (!title || !department || !vaccancies || !qualification || !experience) {
                return res.json({success:false, message:"Some Details Are Missing"})
         }

         
         const careerData = {
            title,
            department,
            vaccancies,
            qualification,
            experience,
            date: Date.now()
     }

     const newCareer = new careerModel(careerData)
     await newCareer.save()

     res.json({success:true, message: "New Career Added"})
 }
 catch (error){
      console.log(error);
      res.json({success:false, message:error.message})
      
 }
}

export {addDoctor, loginAdmin, allDoctors, appointmentsAdmin, appointmentCancel, adminDashboard, allMessages, addCareer};