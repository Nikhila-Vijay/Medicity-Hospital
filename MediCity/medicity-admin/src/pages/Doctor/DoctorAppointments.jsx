import React, { useContext, useEffect } from 'react'
import { DoctorContext } from '../../context/DoctorContext'
import { AppContext } from '../../context/AppContext'

function DoctorAppointments() {

       const {dToken, appointments, getAppointments, completeAppointment, cancelAppointment} = useContext(DoctorContext)

       const {calculateAge} = useContext(AppContext)

       useEffect(()=> {
          if(dToken) {
            getAppointments()
          }
       }, [dToken])


  return (
    <div className='w-full max-w-6xl m-5'>
        
        <p className='mb-3 text-lg font-medium'>ALL APPOINTMENTS</p>

        <div className='bg-gray-400 rounded text-sm max-h-[80vh] overflow-y-scroll'>
           
           <div className='max-sm:hidden grid grid-cols-[0.5fr_2fr_1fr_3fr_1fr_1fr_1fr] gap-1 py-3 px-6 border-b'>
               <p>#</p>
               <p>Patient</p>
               <p>Age</p>
               <p>Date & Time</p>
               <p>Fees</p>
               <p>Payment</p>
               <p>Action</p>
           </div>

           {
            appointments.map((item, index) => (
              <div className='flex flex-wrap justify-between max-sm:gap-5 max-sm:text-base sm:grid grid-cols-[0.5fr_2fr_1fr_3fr_1fr_1fr_1fr] gap-1 items-center text-black py-3 px-6 border-b hover:bg-gray-300' key={index}>
                 <p className='max-sm:hidden' >{index+1}</p>
                 <div className='flex items-center gap-2'>
                     <img className='w-8 rounded-full' src={item.userData.image} alt="" /> <p>{item.userData.name}</p>
                 </div>
                 <p className='max-sm:hidden'>{calculateAge(item.userData.dob)}</p>
                 <p>{item.slotDate}   , {item.slotTime}</p>
                 <p>Rs. {item.amount}</p>
                 <div>
                    <p className='text-xs inline border border-primary px-2 rounded-full'>
                       {item.payment ? 'online' : 'CASH'}
                    </p>
                 </div>
                 
                 

                
                {
                  item.cancelled 
                  ? <p className='text-red-500 text-xs font-medium'>Cancelled</p>
                  : item.isCompleted
                      ? <p className='text-green-600 text-xs font-medium'>Completed</p>
                      :  <div className='flex'>
                            <i onClick={() => cancelAppointment(item._id)} className="w-10 cursor-pointer fa-regular fa-rectangle-xmark"></i>
                            <i onClick={() => completeAppointment(item._id)} className="w-10 cursor-pointer fa-regular fa-square-check"></i>
                         </div>
                }

              </div>
            ))
           }
        </div>
    </div>
  )
}

export default DoctorAppointments;