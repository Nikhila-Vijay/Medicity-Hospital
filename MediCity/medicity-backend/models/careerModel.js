import mongoose from 'mongoose';

const careerSchema = new mongoose.Schema({
    title : {type:String, required:true},
    department: {type:String, required:true},
    vaccancies : {type:String, required:true},
    qualification : {type:String, required:true},
    experience : {type:String, required:true}
})


const careerModel = mongoose.models.career || mongoose.model('careers', careerSchema)

export default careerModel;