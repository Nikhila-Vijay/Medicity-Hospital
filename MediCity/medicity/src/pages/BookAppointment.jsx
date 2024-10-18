import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext';
import './Book.css'


function BookAppointment() {

  const navigate = useNavigate();

  const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']

  const {doctorId} = useParams();
  const {doctors} = useContext(AppContext)

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


                      //add slot to array

                      timeSlots.push({
                        datetime : new Date(currentDate),
                        time: formattedTime
                      })
                     

                      //increment current time by 30 minutes

                      currentDate.setMinutes(currentDate.getMinutes() + 30)
                      
                }

                setDocSlot(prev => ([...prev, timeSlots]))
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
         
          <div className='d-flex'>
              <div className='imgP '>
                   <img  src={docInfo.image} alt="" className='bookDr' />
                    <div>
                   <p className='p1'>{docInfo.name}</p>
                   </div>
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
                   <button onClick={()=> navigate('/book-an-appointment')}  className='bookingButton'>Book An Appointment</button>
              </div>
          </div>

              <div className='detailsDiv'>
                   
                   <div className='detailsDiv1'>
                       <p className='specialityP'>{docInfo.degree}-{docInfo.speciality}</p>
                       <button className='expButton'>{docInfo.experience}</button>
                   </div>
                   
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

export default BookAppointment