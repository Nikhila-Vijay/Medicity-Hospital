import express from 'express'
import { addCareer, addDoctor, adminDashboard, allDoctors, allMessages, appointmentCancel, appointmentsAdmin, loginAdmin } from '../controllers/adminController.js'
import uploads from '../middlewares/multer.js'
import adminAuth from '../middlewares/adminAuthentication.js'
import { changeAvailability } from '../controllers/doctorController.js'


const adminRouter = express.Router()

adminRouter.post('/add-doctor',adminAuth, uploads.single('image'),addDoctor)
adminRouter.post('/login', loginAdmin)
adminRouter.post('/all-doctors', adminAuth, allDoctors)
adminRouter.post('/change-availability', adminAuth, changeAvailability)
adminRouter.get('/appointments', adminAuth, appointmentsAdmin)
adminRouter.post('/cancel-appointment', adminAuth, appointmentCancel)
adminRouter.get('/dashboard', adminAuth, adminDashboard)
adminRouter.get('/get-all-messages', adminAuth, allMessages)
adminRouter.post('/careers', adminAuth, addCareer)


export default adminRouter;