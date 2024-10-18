// import React, { useRef } from 'react'
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
// import Prescription from '../assets/prescription.jpg'
// import { useReactToPrint } from 'react-to-print';




// function PrescriptionModal(props) {

//      const componentRef = useRef();

//      const handlePrint = useReactToPrint({
//         content : ()=> componentRef.current,
//         documentTitle: 'Prescription',   //title
//         onAfterPrint: () => alert('Print successful!'), //alert msg
//      });


//   return (
//     <div>
//          <Modal
//       {...props}
//       size="lg"
//       aria-labelledby="contained-modal-title-vcenter"
//       centered
//     >
//       <Modal.Header closeButton>
//         <Modal.Title id="contained-modal-title-vcenter">
//           My Prescription
//         </Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <h4></h4>
//         <div ref={componentRef}>
//             <img  src={Prescription} alt="" height='400px'/>
//         </div>
        

//       </Modal.Body>
//       <Modal.Footer>
        
//             <Button onClick={handlePrint} > Print </Button>

//             <a href={Prescription} download="prescription.jpg">
//                  <Button >Save Image</Button>
//              </a>
//             <Button onClick={props.onHide}>Close</Button>
        
//       </Modal.Footer>
//     </Modal>
//     </div>
//   );
// }

// export default PrescriptionModal