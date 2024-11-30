import doctorModel from "../models/doctorModel.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import appointmentModel from "../models/appointmentModel.js"
import prescriptionModel from "../models/prescriptionModel.js";

import mongoose from "mongoose";


//api to change availability
const changeAvailability = async (req,res) => {
    try {
        const {doctorId} = req.body

        const docData = await doctorModel.findById(doctorId)
        await doctorModel.findByIdAndUpdate(doctorId, {availability: !docData.availability})
        res.json({success:true, message:'Availability Changed'})
    }

    catch (error) {
        console.log(error)
        res.json({success:false, message: error.message})
        
    }
}

// api to list doctor
const doctorList = async (req,res) => {
    try {
        const doctors = await doctorModel.find({}).select(['-password', '-email'])
        
         res.json({success:true, doctors})
    }
    catch (error){
        console.log(error)
        res.json({success:false, message: error.message})
        
    }
}


//api for doctor login

const doctorLogin = async (req, res) => {
   
    try{

        const {email, password} = req.body
        const doctor = await doctorModel.findOne({email})

        if(!doctor){
            return res.json({success:false, message:"Invalid Credentials"})
        }

        const isMatch = await bcrypt.compare(password, doctor.password)

        if(isMatch){
            const token = jwt.sign({id:doctor._id}, process.env.JWT_SECRET)
            res.json({success:true, token})
        }else {
            res.json({success:false, message:'Invalid Credentials'})
        }


    }
    catch(error){
        console.log(error)
        res.json({success:false, message: error.message})
    }
}

//api to get appointments of a particular doctor for doctor panel

const doctorAppointments = async(req, res) => {
    try {

        const {doctorId} = req.body
        const appointments = await appointmentModel.find({doctorId})

        res.json({success:true, appointments})
        
    } catch (error) {
        console.log(error)
        res.json({success:false, message: error.message})
    }
}

//api to mark completed appointments for doctor panel

const appointmentComplete = async (req, res) => {

    try {
        const {doctorId, appointmentId} = req.body

        const appointmentData = await appointmentModel.findById(appointmentId)

        if (appointmentData && appointmentData.doctorId === doctorId) {
               
              await appointmentModel.findByIdAndUpdate(appointmentId, {isCompleted: true})
              return res.json({success:true, message:'Appointment Completed'})
        }
        else {
            return res.json({success: false, message: 'Failed To Mark'})
        }


    } catch (error) {
         console.log(error)
         res.json({success:false, message:error.message})
         
    }
}



//api to cancel appointments for doctor panel

const appointmentCancel = async (req, res) => {

    try {
        const {doctorId, appointmentId} = req.body

        const appointmentData = await appointmentModel.findById(appointmentId)

        if (appointmentData && appointmentData.doctorId === doctorId) {
               
              await appointmentModel.findByIdAndUpdate(appointmentId, {cancelled: true})
              return res.json({success:true, message:'Appointment Cancelled'})
        }
        else {
            return res.json({success: false, message: 'Cancellation Failed'})
        }


    } catch (error) {
         console.log(error)
         res.json({success:false, message:error.message})
         
    }
}


//api to get dashboard data for doctor panel

const doctorDashboard = async (req, res) => {

    try {

        const { doctorId } = req.body

        const appointments = await appointmentModel.find({doctorId})

        let patients = []

        appointments.map((item) => {
            if (!patients.includes(item.userId)) {
                patients.push(item.userId)
            }
        })

        const dashData = {

            appointments : appointments.length, 
            patients : patients.length,
            latestAppointments: appointments.reverse().slice(0,5)
        }

        res.json({success:true, dashData})

    } catch (error) {
        console.log(error)
         res.json({success:false, message:error.message})
         
    }
}


//api to get doctor profile for Doctor Panel

const doctorProfile = async (req, res) => {

    try {

        const {doctorId} = req.body
        const profileData = await doctorModel.findById(doctorId).select('-password')
        
        res.json({success:true, profileData})

    } catch (error) {
        console.log(error)
         res.json({success:false, message:error.message})
         
    }
}


//api to update doctor profile data from doctor panel

const updateDoctorProfile = async (req, res) =>{

    try {

        const {doctorId, fees, address, availability} = req.body

        await doctorModel.findByIdAndUpdate(doctorId, {fees, address, availability})

        res.json({success:true, message:'Profile Updated'})
        
    } catch (error) {
        console.log(error)
        res.json({success:false, message:error.message})
      
    }
}




 //api to upload medical details

 const uploadMedicalDetails = async (req, res) => {

     try {
        const { patientId, prescriptionDetails, diagnosis, additionalNotes, evaluationSummary } = req.body;

        console.log(patientId, prescriptionDetails, diagnosis, additionalNotes, evaluationSummary)

        if (!patientId || !req.file || !prescriptionDetails || !diagnosis || !evaluationSummary) {
            return res.json({ success: false, message: "Missing required fields" });
        }
        console.log("Patient ID:", patientId, "Type:", typeof patientId);

        console.log("Received Patient ID:", patientId);

        console.log("Uploaded File:", req.file);

        if (!req.file) {
            return res.json({ success: false, message: "Prescription file is required" });
        }

         // Check if the patient exists in appointmentModel
        const patientAppointment = await appointmentModel.findOne( { userId: patientId } );
        if (!patientAppointment) {
         return res.json({ success: false, message: "Patient not found in appointments" });
         }

          const prescriptionData = {
            patientId,
            prescriptionFile : req.file.path,
            prescriptionDetails,
            diagnosis,
            additionalNotes,
            evaluationSummary,
            date: Date.now()
             }

                 const newPrescription = new prescriptionModel(prescriptionData)
                 await newPrescription.save()
      
          res.json({ success: true, message: "Prescription uploaded successfully!" });
        } catch (error) {
            console.error("Error uploading prescription:", error);
             res.json({ success: false, message: "Failed to upload prescription" });
        }
 }
     
 



export {changeAvailability, doctorList, doctorLogin, doctorAppointments, appointmentComplete, appointmentCancel, doctorDashboard, 
    doctorProfile, updateDoctorProfile, uploadMedicalDetails}