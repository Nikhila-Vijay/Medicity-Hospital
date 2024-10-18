import React from 'react'
import contact from '../assets/contact.jpg'
import Message from '../components/Message'
import './ContactUs.css'


function ContactUs() {

  return (
    <div>
      <div>
          <img src={contact} alt="" height={"400px"} width={"100%"}/>
      </div>
      
      <div className='d-flex  ms-5 align-items-center justify-content-evenly' style={{height: '700px'}} >
          <div className=' form-body' style={{height:'550px', width:'500px'}}>
             <h2 className='fs-1 fw-bolder ms-5 mt-5'>Our Location :</h2>
             <h4 className='fs-3 mt-5 ms-5'>256 NorthShore</h4>
             <h4 className='fs-3  ms-5'>William Street</h4>
             <h4 className='fs-3  ms-5'>KOCHI</h4>
             <h4 className='fs-3  ms-5'>KERALA</h4>
             <br />
             <br />
             <p className='fw-bold fs-5 ms-5'>Tel : 678954320</p>
             <p className='fw-bold fs-5 ms-5'>E-mail : medicityhs@gmail.com</p>
             
             

          </div>
          <div className=' ms-4 mt-0'>
            
            {/* <p>WHAT WE DO</p>
            <p>We offer extensive medical procedures to outbound and inbound patients <br />
                 what it is and we are very proud of achievpatients for recovery</p> */}

                 <p>To Know More....</p>
             
             <Message/>
              
          </div>
      </div>

    </div>
  )
}

export default ContactUs