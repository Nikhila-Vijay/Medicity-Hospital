import mongoose from 'mongoose';

const prescriptionSchema = new mongoose.Schema({
    patientId : {type:String, required:true},
    prescriptionFile: {type:String, required:true},
    prescriptionDetails : {type:String, required:true},
    diagnosis : {type:String, required:true},
    additionalNotes : {type:String, required:false},
    evaluationSummary : {type:String, required:true}
},
     { timestamps: true }   //timestamps to automatically include createdAt and updatedAt

);


const prescriptionModel = mongoose.models.prescription || mongoose.model('prescriptions', prescriptionSchema)

export default prescriptionModel;