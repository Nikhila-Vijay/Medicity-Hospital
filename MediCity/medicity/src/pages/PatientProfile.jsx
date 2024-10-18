import React, { useState } from 'react'
import profile from '../assets/profilepic.jpeg'
import './patientProfile.css'

import Prescription1 from './Prescription1'




function PatientProfile() {
    const [patientData, setPatientData] = useState({
        name : "Mr. Stephen",
        image : profile,
        email : "stephen2024@gmail.com",
        phone : 8943123456,
        address : {
          Street:"Kavery Nagar",
          City: "Palakkad",
          State: "Kerala"
        },
        gender : 'Male',
        dob : '1998-05-12'

    })

    const [showEdit, setShowEdit] = useState(false)


  return (
    <div>
      {/* <div  className='d-flex'> */}
        <div className='patientDiv'> 
        {
          showEdit ?

              <input style={{width: '200px', height: '40px', borderRadius:'20%'}}  type="text" value={patientData.name}  onChange={e => setPatientData(prev => ({...prev, name:e.target.value}))} />
               : <p className='patientName'>{patientData.name}</p>

        } 
        <Prescription1/>
        </div>
        <div  className='d-flex'>
          <div className='profileImgDiv'>
        <img className="profileImg" src={patientData.image} alt="" />
        </div> 
        {/* {
          showEdit ?

              <input type="text" value={patientData.name}  onChange={e => setPatientData(prev => ({...prev, name:e.target.value}))} />
               : <p>{patientData.name}</p>

        } */}

        {/* <hr /> */}
      {/* </div> */}
        <div className='contactDiv'>
          
            <p className='contact'>
              CONTACT INFORMATION
            </p>
            <div className='contactDetails'>
                 <p className='fw-bold'>E-mail Id :</p>
                 {
                  showEdit ?
                     <input style={{
                      width: '200px', 
                      height: '40px' , borderRadius:'20%', border:'none'
                    }} type="text" value={patientData.email} onChange={e => setPatientData(prev => ({...prev, email:e.target.value }))} />

                     : <p className=''>{patientData.email}</p>
                 }
                 <p className='fw-bold'>Phone No.:</p>

                 {
                  showEdit ?
                     <input style={{
                      width: '200px', 
                      height: '40px' , borderRadius:'20%', border:'none'
                    }} type="text" value={patientData.phone} onChange={e => setPatientData(prev => ({...prev, phone:e.target.value }))} />

                     : <p>{patientData.phone}</p>
                 }
                 <p className='fw-bold'>Address :</p>
                 {
                    showEdit ?
                    <p> 
                      <input style={{width: '200px', height: '40px', borderRadius:'20%', border:'none', marginBottom:'5px'}} type="text" value={patientData.address.Street} onChange={(e) => setPatientData(prev =>({...prev, address:{...prev.address, Street:e.target.value}}))} />    
                      <br />
                      <input style={{width: '200px', height: '40px', borderRadius:'20%',border:'none', marginBottom:'5px'}} type="text" value={patientData.address.City} onChange={(e) => setPatientData(prev =>({...prev, address:{...prev.address, City:e.target.value}}))} />
                      <br />
                      <input style={{width: '200px', height: '40px', borderRadius:'20%', border:'none'}} type="text" value={patientData.address.State} onChange={(e) => setPatientData(prev =>({...prev, address:{...prev.address, State:e.target.value}}))} />
                      </p>
                    : <p>{patientData.address.Street} <br />
                          {patientData.address.City} <br />
                          {patientData.address.State}  </p> 
                 }
                 
            </div>
        </div>

        <div className='basicDiv'>
              <p className='basic'>BASIC INFORMATION</p>
              <div className='basicDetails'>
                   <p className='fw-bold'>Gender :</p>
                   {
                    showEdit ?
                    <select style={{width: '200px', height: '40px', borderRadius:'20%', border:'none'}} onChange={(e) => setPatientData(prev => ({...prev, gender: e.target.value}))} value={patientData.gender}>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                    : <p>{patientData.gender}</p>
                   }

                   <p className='fw-bold'>Date Of Birth : </p>
                   {
                    showEdit ?
                       <input style={{width: '200px', height: '40px', borderRadius:'20%', border:'none'}} type="date" onChange={(e) => setPatientData(prev => ({...prev, dob: e.target.value}))} value={patientData.dob}/>
                       : <p>{patientData.dob}</p>
                   }
              </div>
        </div>
      </div>
      
        <div className='btn1' style={{height:'50px'}}>
             {
              showEdit ?
                  <button className='editButton1' onClick={() => setShowEdit(false)}>Save My Details</button>   :
                  <button className='editButton' onClick={() => setShowEdit(true)}>Edit My Details</button>
             }
           
        </div>
      

    </div>
  )
}

export default PatientProfile