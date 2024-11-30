import React, { useContext, useState } from 'react'
import profile from '../assets/qmark.png'
import './patientProfile.css'
import axios from 'axios'
import Prescription1 from './Prescription1'
import { AppContext } from '../context/AppContext'
import { toast } from 'react-toastify'




function PatientProfile() {

    //static user data for frontend only
    // const [patientData, setPatientData] = useState({
    //     name : "Mr. Stephen",
    //     image : profile,
    //     email : "stephen2024@gmail.com",
    //     phone : 8943123456,
    //     address : {
    //       Street:"Kavery Nagar",
    //       City: "Palakkad",
    //       State: "Kerala"
    //     },
    //     gender : 'Male',
    //     dob : '1998-05-12'

    // })

    const {userData, setUserData, token, backendUrl, loadUserProfileData} = useContext(AppContext) 

    const [showEdit, setShowEdit] = useState(false)
    const [image, setImage] = useState(false)

    const updateUserProfileData = async () => {

       try{

         const formData = new FormData()

         formData.append('name', userData.name)
         formData.append('phone', userData.phone)
         formData.append('address', JSON.stringify(userData.address))
         formData.append('gender', userData.gender)
         formData.append('dob', userData.dob)

         image && formData.append('image', image)

          const {data} = await axios.post(backendUrl + '/api/user/update-profile', formData, {headers: {token}})
           
          if (data.success) {
            toast.success(data.message)
            await loadUserProfileData()
            setShowEdit(false)
            setImage(false)
          } else {
             toast.error(data.message)
          }
       }catch(error) {
                console.log(error)
                toast.error(error.message)
                
       }

    }


  return userData && (
    <div>
      {/* <div  className='d-flex'> */}
        <div className='patientDiv'> 
        {
          showEdit ?

              <input style={{width: '200px', height: '40px', borderRadius:'20%'}}  type="text" value={userData.name}  onChange={e => setUserData(prev => ({...prev, name:e.target.value}))} />
               : <p className='patientName'>{userData.name}</p>

        } 
            <div className='preDiv'>
                    <Prescription1/>
            </div>
        </div>
        <div  className='d-flex'>
          <div className='profileImgDiv'>

            {
              showEdit ? 
              <label htmlFor="image">
                <div>
                    <img className="profileImg" style={{ opacity: 0.4 , cursor:'pointer'}} src={image ? URL.createObjectURL(image): userData.image} alt="" />
                    <img  className=" newImage"  style={{height:'100px'}} src={image ? '' : profile} alt="" />
                </div>
                <input onChange={(e)=>setImage(e.target.files[0])} type="file" id='image' hidden />
              </label>
              : <img className="profileImg" src={userData.image} alt="" />
            }
            
          </div> 
        {/* {
          showEdit ?

              <input type="text" value={userData.name}  onChange={e => setUserData(prev => ({...prev, name:e.target.value}))} />
               : <p>{userData.name}</p>

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
                    }} type="text" value={userData.email} onChange={e => setUserData(prev => ({...prev, email:e.target.value }))} />

                     : <p className=''>{userData.email}</p>
                 }
                 <p className='fw-bold'>Phone No.:</p>

                 {
                  showEdit ?
                     <input style={{
                      width: '200px', 
                      height: '40px' , borderRadius:'20%', border:'none'
                    }} type="text" value={userData.phone} onChange={e => setUserData(prev => ({...prev, phone:e.target.value }))} />

                     : <p>{userData.phone}</p>
                 }
                 <p className='fw-bold'>Address :</p>
                 {
                    showEdit ?
                    <p> 
                      <input style={{width: '200px', height: '40px', borderRadius:'20%', border:'none', marginBottom:'5px'}} type="text" value={userData.address.line1} onChange={(e) => setUserData(prev =>({...prev, address:{...prev.address, line1:e.target.value}}))} />    
                      <br />
                      <input style={{width: '200px', height: '40px', borderRadius:'20%',border:'none', marginBottom:'5px'}} type="text" value={userData.address.line2} onChange={(e) => setUserData(prev =>({...prev, address:{...prev.address, line2:e.target.value}}))} />
                      
                      </p>
                    : <p>{userData.address.line1} <br />
                          {userData.address.line2}
                            </p> 
                 }
                 
            </div>
        </div>

        <div className='basicDiv'>
              <p className='basic'>BASIC INFORMATION</p>
              <div className='basicDetails'>
                   <p className='fw-bold'>Gender :</p>
                   {
                    showEdit ?
                    <select style={{width: '200px', height: '40px', borderRadius:'20%', border:'none'}} onChange={(e) => setUserData(prev => ({...prev, gender: e.target.value}))} value={userData.gender}>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                    : <p>{userData.gender}</p>
                   }

                   <p className='fw-bold'>Date Of Birth : </p>
                   {
                    showEdit ?
                       <input style={{width: '200px', height: '40px', borderRadius:'20%', border:'none'}} type="date" onChange={(e) => setUserData(prev => ({...prev, dob: e.target.value}))} value={userData.dob}/>
                       : <p>{userData.dob}</p>
                   }
              </div>
        </div>
      </div>
      
        <div className='btn1' style={{height:'50px'}}>
             {
              showEdit ?
                  <button className='editButton1' onClick={updateUserProfileData}>Save My Details</button>   :
                  <button className='editButton' onClick={() => setShowEdit(true)}>Edit My Details</button>
             }
           
        </div>
      

    </div>
  )
}

export default PatientProfile