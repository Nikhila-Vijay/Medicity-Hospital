import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
    firstName: {type:String, required: true},
    lastName: {type: String, required:true},
    email: {type: String, required:true},
    phone: {type: String, required:true},
    idNo: {type: String, required:true},
    age: {type: Number, required:true},
    gender: {type: Number, required:true},
    slotDate: {type: Number, required:true},
    department: {type:String, required:true},
    doctor: {type:String, required:true},
    doctorId: {type: String, required:true},
    doctorData: {type: Object, required:true},
    address: {type:String, required:true},
    status: {type:String, default:"Pending"}
    })


const bookingModel = mongoose.models.booking || mongoose.model('booking', bookingSchema)

export default bookingModel;