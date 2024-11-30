import React, { useContext, useEffect, useState } from 'react'
import { Form, Button } from "react-bootstrap"
import axios from "axios";
import { DoctorContext } from '../../context/DoctorContext';
import { toast } from 'react-toastify';

function AddPrescription({patientId}) {
    

    const {dToken, backendUrl, getAppointments, appointments} = useContext(DoctorContext)

    
    const [selectedPatient, setSelectedPatient] = useState("");
    const [prescriptionFile, setPrescriptionFile] = useState(null);
    const [prescriptiondetails, setPrescriptionDetails] = useState('');
    const [formData, setFormData] = useState({
        evaluationSummary: "",
        diagnosis: "",
        additionalNotes: "",
      });

      useEffect(()=> {
        if(dToken) {
          getAppointments()
         
        }
     }, [dToken])



      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };


      const handleSubmit = async (e) => {
        e.preventDefault();


        if (!selectedPatient || !prescriptionFile) {
            toast("Please select a patient and upload a prescription file.");
            return;
          }

          
        
          const formDataToSend = new FormData();
          formDataToSend.append("patientId", selectedPatient);
          formDataToSend.append("evaluationSummary", formData.evaluationSummary);
          formDataToSend.append("diagnosis", formData.diagnosis);
          formDataToSend.append("additionalNotes", formData.additionalNotes);
          formDataToSend.append("prescriptionFile", prescriptionFile);
          formDataToSend.append("prescriptionDetails", prescriptiondetails);

    try {
        console.log(prescriptiondetails, selectedPatient)

        console.log("Selected File:", prescriptionFile);

         //to log formData
        for (const [key, value] of formDataToSend.entries()) {
          console.log(`${key}:`, value);
        }

        

        const { data } = await axios.post(backendUrl + "/api/doctors/upload-medical-reports", formDataToSend, {headers: {dToken}});

        if (data.success) {
          toast.success("Prescription uploaded successfully!");
          setSelectedPatient('')
          setPrescriptionFile(false)
          setPrescriptionDetails('')
          setFormData('')

        } else {
          toast.error("Error uploading prescription: " + data.message);
        }
      } catch (error) {
        console.error("Error uploading prescription:", error);
        toast("Failed to upload prescription.");
      }
    };


  return (
    <div>

        <h3 className='mt-8 ms-8 mb-3 text-lg font-medium'>UPLOAD PRESCRIPTION</h3>
      <div className='ms-8 bg-gray-400 rounded text-sm max-h-[80vh] overflow-y-scroll'>
        
        <Form onSubmit={handleSubmit}  className='m-5 w-[900px]'>
           
      {/* Select Patient */}
      <div className='d-flex'>
      <Form.Group className=" mb-3 ms-6 mt-11">
        <Form.Label>Select Patient</Form.Label>
        <Form.Control 
          as="select"
          value={selectedPatient}
          onChange={(e) => setSelectedPatient(e.target.value) } className='ms-8 px-3 py-2 border rounded'
        >
          <option value="">-- Select Patient --</option>
          {appointments.map((item) => (
            <option key={item.userId} value={item.userId}>
              {item.userData.name} (ID: {item.userId}) 
            </option>
          ))}
        </Form.Control>
      </Form.Group>

      {/* Upload Prescription */}
      <Form.Group className="mb-3 ms-6">
        <Form.Label>Prescription File</Form.Label>
        <Form.Control
          type="file"
          accept=".pdf,.jpg,.png"
          onChange={(e) => setPrescriptionFile(e.target.files[0])} className='ms-4 border rounded px-3 py-2'
        />
      </Form.Group>
      </div>

      <Form.Group className="mb-3 ms-6">
      <Form.Label>Prescription Details</Form.Label>
        <Form.Control
          type="text"
          name="prescriptionDetails"
          placeholder="Enter prescription details"
          value={prescriptiondetails}
          onChange={(e) => setPrescriptionDetails(e.target.value)}  className='ms-8 border rounded px-3 py-2 w-2/3 mt-8'
        />
      </Form.Group>

        {/* Diagnosis */}
        <Form.Group className="mb-3 ms-6">
        <Form.Label>Diagnosis</Form.Label>
        <Form.Control
          type="text"
          name="diagnosis"
          value={formData.diagnosis}
          onChange={handleChange}
          placeholder="Enter diagnosis" className='ms-24 border rounded px-3 py-2 w-2/3'
        />
      </Form.Group>
      <br />

      

      

      {/* Additional Notes */}
      <Form.Group className="mb-3 ms-6">
        <Form.Label>Additional Notes</Form.Label>
        <Form.Control 
          as="textarea"
          rows={3}
          name="additionalNotes"
          value={formData.additionalNotes}
          onChange={handleChange}
          placeholder="Enter any additional notes" className='ms-12 border rounded px-3 py-2 w-2/3'
        />
      </Form.Group>

      

      

      {/* Evaluation Summary */}
      <Form.Group className="mb-3 ms-6">
        <Form.Label>Evaluation Summary</Form.Label>
        <Form.Control
          as="textarea"
          rows={4}
          name="evaluationSummary"
          placeholder="Enter evaluation summary"
          value={formData.evaluationSummary}
          onChange={handleChange} className='ms-6 border rounded px-3 py-2 w-2/3'
        
        />
      </Form.Group>
      

      


      <Button variant="primary" type="submit" className='bg-primary px-10 py-3 mt-8 ms-6 text-white border rounded-full'>
        Upload Prescription
      </Button>
    </Form>
    </div>

    </div>
  )
}

export default AddPrescription;