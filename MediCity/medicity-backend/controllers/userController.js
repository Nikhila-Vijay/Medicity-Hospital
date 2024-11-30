import validator from "validator"
import bcrypt from 'bcrypt'
import userModel from "../models/userModel.js"
import jwt from "jsonwebtoken"
import {v2 as cloudinary} from 'cloudinary'
import doctorModel from "../models/doctorModel.js"
import appointmentModel from "../models/appointmentModel.js"
import messageModel from "../models/messageModel.js"
import bookingModel from "../models/bookingModel.js"
import careerModel from "../models/careerModel.js"
import prescriptionModel from "../models/prescriptionModel.js"


//api to register user

const registerUser = async (req, res) => {
    try{
        const {name, email, password} = req.body


        if( !name || !password || !email) {
            return res.json({success:false, message:"Some details are missing...!"})
        }
        
        if (!validator.isEmail(email)) {
            return res.json({success:false, message:"Please Enter A Valid Email Address...!"})
        }

        if (password.length < 8) {
            return res.json({success:false, message:"Please Enter A Strong Password"})
        }

        //hashing password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const userData = {
            name, email,
            password : hashedPassword,
        }

        const newUser = new userModel(userData)
        const user = await newUser.save()

        // creating token for user
         const token = jwt.sign({id:user._id}, process.env.JWT_SECRET)

         res.json({success:true, token})
    }
    catch (error){
           console.log(error)
           res.json({success:false, message:error.message})
           
    }
}

//api for user login

const loginUser = async (req, res) => {
    try{

        const {email, password} = req.body
        const user = await userModel.findOne({email})

        if (!user){
            return res.json({success:false, message:'User does not exists..!'})

        }

        const isMatch = await bcrypt.compare(password,user.password)

        if(isMatch) {
            const token = jwt.sign({id:user._id}, process.env.JWT_SECRET)
            res.json({success:true, token})
        } else {
            res.json({success:false, message:"Wrong Password...!"})
        }

    }
    catch (error){
        console.log(error)
        res.json({success:false, message:error.message})
    }
}


//api to get user profile

const getProfile = async(req,res) => {

    try{
        const {userId} = req.body

        const userData = await userModel.findById(userId).select('-password')

        res.json({success:true, userData})
    }
    catch (error){
        console.log(error)
        res.json({success:false, message:error.message})
    }
}

//api to update user profile

const updateProfile = async(req,res) => {
    try {

        const {userId, name, phone, address, dob, gender} = req.body
        const imageFile = req.file

        if (!name || !phone || !dob || !gender) {
            return res.json({success:false, message: "Data Missing...!"})  
        }

        await userModel.findByIdAndUpdate(userId, {name, phone, address:JSON.parse(address), dob, gender})

        if (imageFile) {

            //uploading to cloudinary
            const imageUpload = await cloudinary.uploader.upload(imageFile.path, {resource_type:'image'})
            const imageUrl = imageUpload.secure_url

            await userModel.findByIdAndUpdate(userId,{image:imageUrl})

        }
        
        res.json({success:true, message:"Profile Updated...!"})

    }
    catch (error){
        console.log(error)
        res.json({success:false, message:error.message})
        
    }
}

//api to book an appointment

const bookAppointment = async (req, res) => {

    try{
        const {userId, doctorId, slotDate, slotTime} = req.body

        const doctorData = await doctorModel.findById(doctorId).select('-password')

        if(!doctorData.availability) {
            return res.json({success: false, message: "Doctor not available"})

        }

        let slots_booked = doctorData.slots_booked

        //checking for slot availability
        if (slots_booked[slotDate]) {
            if (slots_booked[slotDate].includes(slotTime)) {
                return res.json({success: false, message:'Slot not Available'})
            }
            else {
                slots_booked[slotDate].push(slotTime)
            }
        }
        else {
            slots_booked[slotDate] = []
            slots_booked[slotDate] . push(slotTime)
        }

        const userData = await userModel.findById(userId).select('-password')

        delete doctorData.slots_booked

        const appointmentData = {

            userId, doctorId, userData, doctorData, amount : doctorData.fees,
            slotTime, slotDate, date: Date.now()
        }

        const newAppointment = new appointmentModel(appointmentData)
        await newAppointment.save()

        //save new slots data in doctors Data

        await doctorModel.findByIdAndUpdate(doctorId, {slots_booked})

        res.json({success:true, message: "Appointment Booked"})

    }
    catch(error){
        console.log(error)
        res.json({success:false, message:error.message})
        
    }
}


//api to get user appointments for my appointments page(frontend)
     
const listAppointment = async (req, res) => {

    try {
        const {userId} = req.body
        const appointments = await appointmentModel.find({userId})

        res.json({success:true, appointments})
    }
    catch (error) {
        console.log(error)
        res.json({success: false, message: error.message})
    }
}


//api to cancel appointment

const cancelAppointment = async (req, res) => {

    try{

        const {userId, appointmentId} = req.body

        const appointmentData = await appointmentModel.findById(appointmentId)

        //verify appointment user
        if (appointmentData.userId !== userId) {
            return res.json({success: false, message: "Unauthorized action"})
        }

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



//api to send message in contact us page

const sendMessage = async (req,res) => {

    try {

        const {firstName, lastName, email, phone, message} = req.body


        if (!firstName || !lastName || !email || !phone || !message) {
            return res.json({success: false, message: "Please fill all fields...!"})
        } else {
           const newMessage  = await messageModel.create({firstName, lastName, email, phone, message})
            console.log(newMessage);
            
           res.json({success: true, message: "Message Send Successfully!"})
        }
        
    } catch (error) {
        console.log(error)
        res.json({success: false, message: error.message})
    
    }
}


//api to book an appointment without logging in

// const postAppointment = async (req,res) => {

//     try {
         
//              const {firstName, lastName, email, phone,idNo, age, gender, slotDate, department, newDoctor, address} = req.body

//               if(!firstName || !lastName || !email || !phone || !idNo || !age || !gender || !slotDate || !department || !newDoctor || !address){
                  
//                  return res.json({success:false, message: "Please Fill the Form Completely..!"})
//         }
//               else {
//                 const doctorData = await doctorModel.findById(doctorId).select('-password')

//                    if(!doctorData.availability) {
//                    return res.json({success: false, message: "Doctor not available"})

//                    }
//                    let slots_booked = doctorData.slots_booked

//         //checking for slot availability
//                      if (slots_booked[slotDate]) {
                        
//                              return res.json({success: false, message:'Slot not Available'})
//                        }
                        
//                  else {
                    
//                     slots_booked. push(slotDate)
//                   }

//                  const userData = await userModel.findById(userId).select('-password')

//                    delete doctorData.slots_booked

//                    const appointmentData = {

//                     userId, doctorId, userData, doctorData,  slotDate, date: Date.now()
//                 }
        
//                 const newBooking = new bookingModel(appointmentData)
//                 await newBooking.save()
        
//                 //save new slots data in doctors Data
        
//                 await doctorModel.findByIdAndUpdate(doctorId, {slots_booked})
        
//                 res.json({success:true, message: "Appointment Booked"})
//         }
//     } catch (error) {
//         console.log(error)
//         res.json({success: false, message: error.message})
//     }
// }
const postAppointment = async (req,res) => {


   try {
         const { firstName, lastName, email, slotDate, doctorId } = req.body;

         console.log("Request Body:", req.body);
    

    // Check if all required fields are provided
       if (!firstName || !lastName || !email || !phone || !idNo || !age || !gender || !slotDate || !department || !doctorId || !address) {
                    return res.status(400).json({ success: false, message: "Please fill the form completely." });
       }

    // Fetch doctor data by doctorId
      const doctorData = await doctorModel.findById(doctorId).select('-password');
      console.log("Doctor Data:", doctorData);
      if (!doctorData) {
          return res.status(404).json({ success: false, message: "Doctor not found" });
      }

    // Check doctor availability
     if (!doctorData.availability) {
          return res.status(400).json({ success: false, message: "Doctor not available" });
     }

    // Check slot availability
    const slotsBooked = doctorData.slots_booked || []; // Assuming `slots_booked` is an array
       if (slotsBooked.includes(slotDate)) {
           return res.status(400).json({ success: false, message: 'Slot not available' });
       }

    // Add the new slot to the slots_booked array
     slotsBooked.push(slotDate);



    
    // Prepare appointment data
    const appointmentData = {
        patientName: `${firstName} ${lastName}`,
        email,
        phone,
        idNo,
        age,
        gender,
        slotDate,
        department,
        doctorId,
        doctorName: doctorData.name,
        address,
        date: new Date(),
    };

    // Save the appointment in bookingModel
    const newBooking = new bookingModel(appointmentData);
    await newBooking.save();

    console.log("New Booking Saved:", newBooking);

    // Update doctor's slots_booked in the database
    await doctorModel.findByIdAndUpdate(doctorId, { slots_booked: slotsBooked });

    res.status(201).json({ success: true, message: "Appointment booked successfully." });
} catch (error) {
    
    res.status(500).json({ success: false, message: "An error occurred while booking the appointment. Please try again later." });
    console.error("Error booking appointment:", error.message, error.stack);
}
};


// api to get careers 

const allCareers = async (req, res) => {
    try {
        const careers = await careerModel.find()
        res.json({success:true, careers})
    }
    catch(error){
        console.log(error)
        res.json({success:false, message:error.message})
    }
}

//api to get prescription

const myPrescription = async (req, res) => {
    try {

        const {userId} = req.body
        console.log("userId is ", userId);
        

        const prescriptions = await prescriptionModel.find({ patientId : userId }); 

        if (!prescriptions || prescriptions.length === 0) {
            return res.json({ success: false, message: "No prescriptions found for this user. Please check back later." });
        }

        prescriptions.forEach(prescription => {
            prescription.prescriptionFile = prescription.prescriptionFile.replace(
                'C:\\Users\\DELL\\Desktop\\MEARN Stack\\Main Project\\MediCity\\medicity-backend\\',
                ''
            );
        });
        res.json({ success: true, prescriptions });
        

       
        console.log(prescriptions);
        
    } catch (error) {
        console.error("Error fetching prescription:", error);
        res.json({ success: false, message: error.message });
    }
};


//api for payment

const paymentOnline = async (req,res) => {

    console.log("Backend: Request body:", req.body);

    try {
        
        const {userId, appointmentId} = req.body;

        if (!userId || !appointmentId) {
            return res.json({ success: false, message: "Missing userId or appointmentId" });
          }

        const appointmentData = await appointmentModel.findById(appointmentId)

        //verify appointment user
        if (appointmentData.userId !== userId) {
            return res.json({success: false, message: "Unauthorized action"})
        }

        const updatedAppointment = await appointmentModel.findByIdAndUpdate(
            appointmentId,
            { payment: true },
            { new: true }
          );

          console.log(updatedAppointment)
    
        if (!updatedAppointment) {
            
            return res.json({ success: false, message: "Failed to update payment status" });
          }
      
          res.json({ success: true, message: "Payment Successful", data: updatedAppointment });

        // await appointmentModel.findByIdAndUpdate(appointmentId, {payment : true},
        //     { new: true })
        // res.json({success:true, message: 'Payment Successfull'})
    }
    catch(error){
        console.log(error)
        res.json({success: false, message: error.message})
    } 
}
export {registerUser, loginUser, getProfile, updateProfile, bookAppointment, listAppointment, 
    cancelAppointment, sendMessage, postAppointment, allCareers, paymentOnline, myPrescription}