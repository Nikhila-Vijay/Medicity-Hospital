import React, { useContext} from 'react'
import {AppContext} from '../context/AppContext'
import './PatientAppointment.css'

function PatientAppointment() {

  const {doctors} =useContext(AppContext);

  


  return (
    <div>
        <p className='myDiv'>My Appointments</p>
         <div>
            {doctors.slice(0,2).map((item,index)=>(
              <div key={index} className='d-flex'>
                  <div className='mb-5'>
                      <img className='appImage' src={item.image} alt="" />
                  </div>
                  <div className='myDiv1'>
                      <p className='myDivP'>{item.name}</p>
                      <p>{item.speciality}</p>
                      
                      
                      <p><span>Date & Time:</span> 25, November, 2024 | 10:30 AM</p>
                  </div>
                  <div>  </div>
                  <div className='myDivBtn'>
                      <button className='myDivBtn1'> Pay Online</button>
                      <button className='myDivBtn2'>Cancel Appointment</button>
                  </div>
              </div>
            ))}
             
         </div>
    </div>
  )
}

export default PatientAppointment