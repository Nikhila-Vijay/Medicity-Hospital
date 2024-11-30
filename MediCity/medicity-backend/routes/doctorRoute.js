import express from 'express';
import { appointmentCancel, appointmentComplete, doctorAppointments, doctorDashboard, doctorList, doctorLogin, doctorProfile,  updateDoctorProfile, uploadMedicalDetails } from '../controllers/doctorController.js';
import doctorAuth from '../middlewares/doctorAuthentication.js';
import upload from '../middlewares/multerPrescription.js';


const doctorRouter = express.Router()

doctorRouter.get('/list', doctorList)
doctorRouter.post('/login', doctorLogin)
doctorRouter.get('/appointments', doctorAuth, doctorAppointments)
doctorRouter.post('/complete-appointment', doctorAuth, appointmentComplete)
doctorRouter.post('/cancel-appointment', doctorAuth, appointmentCancel)
doctorRouter.get('/dashboard', doctorAuth, doctorDashboard)
doctorRouter.get('/profile', doctorAuth, doctorProfile)
doctorRouter.post('/update-profile', doctorAuth, updateDoctorProfile)
doctorRouter.post('/upload-medical-reports',upload.single("prescriptionFile"), doctorAuth, uploadMedicalDetails)

export default doctorRouter;