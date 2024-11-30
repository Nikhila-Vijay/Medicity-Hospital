import React, { useRef, useState, useEffect, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useReactToPrint } from 'react-to-print';
import { AppContext } from '../context/AppContext';
import axios from 'axios';
import { toast } from 'react-toastify';

function Prescription1() {
    const [show, setShow] = useState(false);
    const [prescription, setPrescription] = useState([]);
    const [currentPrescription, setCurrentPrescription] = useState(null); // For modal content
    const { backendUrl, token } = useContext(AppContext);
    const componentRef = useRef();

    const handleClose = () => setShow(false);
    const handleShow = (prescription) => {
        setCurrentPrescription(prescription);
        setShow(true);
    };

    const handlePrint = useReactToPrint({
        content: () => {
          if (!componentRef.current) {
              console.error("Component reference is null.");
              toast.error("Unable to print. Please try again.");
              return null;
          }
          return componentRef.current;
      },
        documentTitle: 'Prescription',
        onAfterPrint: () => {
          console.log('Print completed');
          toast.success('Print successful!'); },
    })
  

    const getPrescription = async () => {
        try {
              const { data } = await axios.get(backendUrl + "/api/user/my-prescription", {headers: { token }});
          

            if (data.success) {
              console.log("Prescriptions:", data.prescriptions);
                setPrescription(data.prescriptions);
                
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            console.error(error);
            toast.error(error.message);
        }
    };

    useEffect(() => {
        getPrescription();
    }, [token]);

    return (
        <div>   

          {prescription.length > 0 ? (
               Array.isArray(prescription) &&  prescription.map((item, index) => (
                    <div key={item._id} >
                        <Button  variant="info" onClick={() => handleShow(item)}>
                        Get My Prescription #{index + 1}
                        </Button>
                    </div>
                ))
            ) : (
                <p>No prescriptions found. Please check back later.</p>
            )}

            {currentPrescription && (
                <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} size="lg">
                    <Modal.Header closeButton>
                        <Modal.Title>My Prescription</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div ref={componentRef}  className="d-flex ms-5 mt-5">
                            <div >
                                <h5>Medical Prescription</h5>
                                <img 
                                    src={`${backendUrl}/${currentPrescription.prescriptionFile}`}
                                    alt="Prescription"
                                    height="400px"
                                />
                            </div>
                            <div className="ms-5">
                                <h5>Evaluation Report</h5>
                                <h6>Patient Diagnosis:</h6>
                                <p>{currentPrescription.diagnosis}</p>
                                <p>{currentPrescription.prescriptionDetails}</p>
                            </div>
                        </div>
                        <div className="mt-5 ms-5">
                            <h5>Evaluation Summary:</h5>
                            <p>{currentPrescription.evaluationSummary}</p>
                            <h5>Additional Notes:</h5>
                            <p>{currentPrescription.additionalNotes}</p>
                            Doctor's Signature:
                            <br />
                            [Doctor's Name]
                            <br />
                            [Date]
                        </div>
                    </Modal.Body>
                    <Modal.Footer>

                              {componentRef && (
                                   <Button onClick={handlePrint} variant="primary">Print</Button>
                                   )}
                        
                        <a href={`${backendUrl}/${currentPrescription.prescriptionFile}`} download="prescription.jpg" target="_blank"
  rel="noopener noreferrer">
                            <Button variant="success">Save Image</Button>
                        </a>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            )}
        </div>
    );
}

export default Prescription1;








// import React, { useRef } from 'react'
// import { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
// import Prescription from '../assets/prescription.jpg';
// import { useReactToPrint } from 'react-to-print';
// import { useContext } from 'react';
// import { AppContext } from '../context/AppContext';
// import { useEffect } from 'react';
// import axios from 'axios';
// import {toast} from 'react-toastify';

// function Prescription1() {
//     const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   const {backendUrl, token} = useContext(AppContext)

//   const [prescription, setPrescription] = useState([])

//   const componentRef = useRef();

//      const handlePrint = useReactToPrint({
//         content : ()=> componentRef.current,
//         documentTitle: 'Prescription',   //title
//         onAfterPrint: () => toast.success('Print successful!'),
//      });

//      const getPrescription = async() => {
//       try {

//           const { data } = await axios.get(backendUrl + "/api/user/my-prescription", {headers: { token }});

//            if (data.success) {
//                setPrescription(data.prescription);
//                 console.log(data.prescription);
//         }else{
//           toast.error(data.message)
//           console.log(data.message)
//         }
          
//       } catch (error) {
//           console.log(error)
//           toast.error(error.message)        
//       }
//   }


//      useEffect(()=> {
//       getPrescription()
//    }, [token])


//   return (
//     <div>
//          <Button variant="primary" onClick={handleShow}>
//          Get My Prescription
//          </Button>
        
//            { prescription.map((item, index) => (
//          <Modal key={index}
//         show={show}
//         onHide={handleClose}
//         backdrop="static"
//         keyboard={false}
//         size='lg' >
     
//         <Modal.Header closeButton>
//             <Modal.Title id="contained-modal-title-vcenter">
//                     My Prescription
//             </Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
            
//             <div ref={componentRef} className='d-flex ms-5 mt-5'>
//                  <div>
//                  <h5>Medical Prescription</h5>
//                  <img  src={item.prescriptionFile} alt="" height='400px'/>
//                  </div>
//                  <div className='ms-5'>
//                  <h5>Evaluation Report</h5>
//                  <h6>Patient Diagnosis: </h6>
//                  <p>{item.diagnosis}</p>
//                  <p>{item.prescriptionDetails}</p>
//                    </div>
                   
//             </div>
//             <div className='mt-5 ms-5'> 
//                     <h5>Evaluation Summary:</h5>
//                     <p>{item.evaluationSummary}</p>
//                     <h5>Additional Notes : </h5>
//                     <p>{item.additionalNotes}</p>
// Doctor's Signature:
// [Doctor's Name]
// [Date]


                    
//                  </div>
//         </Modal.Body>
//         <Modal.Footer>
//                <Button onClick={handlePrint} variant='primary' > Print </Button>

//               <a href={Prescription} download="prescription.jpg">
//                       <Button variant='success'>Save Image</Button>
//               </a>
//               <Button variant="secondary" onClick={handleClose}>Close</Button>
//         </Modal.Footer> 
     
//       </Modal> ))
//        }
      
//     </div>
//   )
// }

// export default Prescription1;