import React, { useRef } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Prescription from '../assets/prescription.jpg';
import { useReactToPrint } from 'react-to-print';


function Prescription1() {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const componentRef = useRef();

     const handlePrint = useReactToPrint({
        content : ()=> componentRef.current,
        documentTitle: 'Prescription',   //title
        onAfterPrint: () => alert('Print successful!'), //alert msg
     });


  return (
    <div>
         <Button variant="primary" onClick={handleShow}>
         Get My Prescription
         </Button>

         <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size='lg'
      >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                    My Prescription
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            
            <div ref={componentRef} className='d-flex ms-5 mt-5'>
                 <div>
                 <h5>Medical Prescription</h5>
                 <img  src={Prescription} alt="" height='400px'/>
                 </div>
                 <div className='ms-5'>
                 <h5>Evaluation Report</h5>
                 <h6>Patient Diagnosis: Tomato Flu</h6>
                 <p>Diagnosed with Tomato Flu, a viral infection characterized by red, tomato-shaped blisters on the skin. <br /> 
                    Symptoms : fever, joint pain, fatigue, skin rashes, and painful blisters that resemble tomatoes.
                    Reports itching and swelling in affected areas, accompanied by body aches and a sore throat. </p>
                   </div>
                   
            </div>
            <div className='mt-5 ms-5'> 
                    <h5>Evaluation Summary:</h5>
                    <p>Symptoms Duration: The onset of symptoms began approximately 3-7 days ago, starting with fever and body aches, followed by the development of skin rashes and blisters.
</p>
                     <p>
                     Current Condition: The patient is experiencing moderate discomfort due to skin lesions and joint pain.
                      The fever has been intermittent, but manageable with antipyretics.
                      </p>
                       <h6>Treatment Plan:</h6>
                      <p> <span className='text-decoration-underline'>Rest and Hydration:  </span> The patient is advised to take plenty of rest and maintain good hydration. 
                      </p><span className='text-decoration-underline'>Symptomatic Relief: </span> Prescribed analgesics for pain management and antihistamines to reduce itching. <br />
                     <p> <span className='text-decoration-underline'> Skin Care: </span> Use of topical antiseptics to prevent secondary infection and soothe blisters. 
                     </p>   <p><span className='text-decoration-underline'> Isolation: </span> To prevent the spread of the virus, isolation is recommended until the symptoms completely resolve.
                       </p>
                      <h6>Prognosis: The condition is generally self-limiting, with recovery expected within 1-2 weeks.</h6>
                       <h5>Recommendation: If the patient experiences worsening symptoms or signs of secondary bacterial infection, immediate medical attention is necessary.
                       </h5>

<p>
Doctor's Signature:
[Doctor's Name]
[Date]


                     </p>
                 </div>
        </Modal.Body>
        <Modal.Footer>
               <Button onClick={handlePrint} variant='primary' > Print </Button>

              <a href={Prescription} download="prescription.jpg">
                      <Button variant='success'>Save Image</Button>
              </a>
              <Button variant="secondary" onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Prescription1