import express from 'express'
import { allCareers, bookAppointment, cancelAppointment, getProfile, listAppointment, loginUser, myPrescription, paymentOnline, postAppointment, registerUser, sendMessage, updateProfile } from '../controllers/userController.js'
import userAuth from '../middlewares/userAuthentication.js'
import uploads from '../middlewares/multer.js'




const userRouter = express.Router()

userRouter.post('/register', registerUser)
userRouter.post('/login', loginUser)

userRouter.get('/get-profile',userAuth, getProfile)
userRouter.post('/update-profile',uploads.single('image'), userAuth, updateProfile)
userRouter.post('/book-appointment', userAuth, bookAppointment)
userRouter.get('/appointments',userAuth, listAppointment)
userRouter.post('/cancel-appointment', userAuth, cancelAppointment)

userRouter.post('/messages', sendMessage)
userRouter.post('/bookings', postAppointment)
userRouter.get('/all-careers', allCareers)
userRouter.post('/payment-online', userAuth, paymentOnline)
userRouter.get('/my-prescription', userAuth, myPrescription)

export default userRouter;