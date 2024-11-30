import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema({
    firstName : {type:String, required:true},
    lastName: {type:String, required:true},
    email : {type:String, required:true},
    phone : {type:Number, required:true},
    message : {type:String, required:true}
})


const messageModel = mongoose.models.message || mongoose.model('message', messageSchema)

export default messageModel;