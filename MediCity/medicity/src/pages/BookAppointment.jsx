import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext';
import './Book.css'
import { toast } from 'react-toastify';
 import axios from 'axios';


function BookAppointment() {

  const navigate = useNavigate();

  const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']

  const {doctorId} = useParams();
  const {doctors, backendUrl, token, getDoctorsData} = useContext(AppContext)

  const [docInfo, setDocInfo] = useState(null)
  const [docSlot, setDocSlot] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState('')


  const doctorInfo = async ()=>{
    const docInfo = doctors.find(doctor => doctor._id === doctorId)
    setDocInfo(docInfo)

  }
//console.log(docInfo);

   const getAvailableSlots = async () => {
           setDocSlot([])

           //current date
           let today = new Date()

           for(let i=0 ; i<7 ; i++) {
            //date with index
                let currentDate = new Date(today)
                currentDate.setDate(today.getDate()+i);

                //setting end time of the date with index

                let endTime = new Date()
                endTime.setDate(today.getDate()+i)
                endTime.setHours(21,0,0,0)

                //setting hours
                if (today.getDate() === currentDate.getDate()){
                  currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10)
                  currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0)
                }
                else {
                   currentDate.setHours(10);
                   currentDate.setMinutes(0);
                }

                let timeSlots = []

                while (currentDate < endTime) {
                     let formattedTime = currentDate.toLocaleTimeString([], {hour: '2-digit' , minute: '2-digit'})


                     let day = currentDate.getDate()
                     let month = currentDate.getMonth()+1
                     let year = currentDate.getFullYear()

                     const slotDate = day + "-" + month + "-" + year
                     const slotTime = formattedTime
           
                     const isSlotAvilable = docInfo.slots_booked[slotDate] && docInfo.slots_booked[slotDate].includes(slotTime) ? false : true


                     if (isSlotAvilable){

                    //add slot to array
                         timeSlots.push({
                         datetime : new Date(currentDate),
                         time: formattedTime
                       })

                     } 

                      //increment current time by 30 minutes

                      currentDate.setMinutes(currentDate.getMinutes() + 30)
                      
                }

                setDocSlot(prev => ([...prev, timeSlots]))
           }
   }

   const bookAppointment = async () => {
      if(!token) {
         toast.warn('Please Login to Book Appointment...!')
         return navigate('/login')
      }

      try{
          const date = docSlot[slotIndex][0].datetime

          let day = date.getDate()
          let month = date.getMonth()+1
          let year = date.getFullYear()

          const slotDate = day + "-" + month + "-" + year

          console.log(slotDate);

          const {data} = await axios.post(backendUrl + '/api/user/book-appointment', {doctorId, slotDate, slotTime}, {headers: {token}})

          if(data.success) {
               toast.success(data.message)
               console.log(data.message);
               
               getDoctorsData()
               navigate('/patient-appointment')
          }
          else {
               toast.error(data.message)

               
          }

      }
      catch(error){
            console.log(error)
            toast.error(error.message)
            
      }
   }

  useEffect(()=> {
        doctorInfo()
  }, [doctors,doctorId]);

  useEffect(()=> {
        getAvailableSlots()
  },[docInfo]);

  useEffect(() => {
       console.log(docSlot);
       
  },[docSlot]);

  return docInfo &&(
    <div>
      
         <div>
               <div >
                       <p className='p1'>{docInfo.name}</p>
                   </div>
         
          <div className='d-flex'>
              <div className='imgP '>
                   
                   <img  src={docInfo.image} alt="" className='bookDr' />
                   
              </div>
              <div>
                   <p className='bookingDiv'>
                      BOOKING SLOTS
                   </p>
                   <div className='mainDateDiv'>
                        {
                          docSlot.length && docSlot.map((item,index) => (
                                  <div onClick={()=> setSlotIndex(index)} key={index} className={`dateDiv ${slotIndex === index ? 'bg-primary text-white' : 'bg-white text-primary'}`}>
                                      <p>{item[0] && days[item[0].datetime.getDay()]}</p>
                                      <p>{item[0] && item[0].datetime.getDate()}</p>
                                  </div>
                          ))
                        }
                   </div>

                   <div className="d-flex mainTimeDiv">
                      {docSlot.length && docSlot[slotIndex].map((item,index) => (
                           <p onClick={()=> setSlotTime(item.time)} className={`timeDiv  ${item.time === slotTime ? 'bg-primary text-white' : 'bg-white text-primary'}`} key={index}>
                             {item.time.toLowerCase()}</p>
                             
                             
                      ))}
                      
                   </div>
                   <button onClick={bookAppointment}  className='bookingButton'>Book An Appointment</button>
              </div>
          </div>

              <div className='detailsDiv'>
                   
                   <div className='detailsDiv1'>
                       <p className='specialityP'>Qualification : {docInfo.degree}</p>
                       <p className='specialityP'>Department : {docInfo.speciality}</p>
                       <button className='expButton'>Experience : {docInfo.experience}</button>
                   </div>
                   <br />
                   
                   <div className='feeDiv'>
                       <p>Appointment Fee : <span className='spanClass'> Rs.{docInfo.fees}</span></p>
                   </div>

                   <div className='aboutDiv'>
                      <p className='aboutP'>About </p>
                      <p className='aboutP1'>{docInfo.about}</p>
                   </div>
                   
              </div>

              
         </div> 
         
    </div>
  )
}


export default BookAppointment;