import React, { useContext, useEffect } from 'react'
import { AdminContext } from '../../context/AdminContext'
import { AppContext } from '../../context/AppContext'

function AllAppointments() {

    const {aToken, appointments, getAllAppointments, cancelAppointment} = useContext(AdminContext)
    
    const {calculateAge} = useContext(AppContext)

     useEffect(() => {
          
        if(aToken) {
            getAllAppointments()
        }
     }, [aToken])
 
 
    return (
    <div className='w-full max-w-6xl m-5'>

          <p className='mb-3 text-lg font-medium'>All Appointments</p>
          <div className='bg-white border rounded text-sm max-h-[80vh] min-h-[60vh] overflow-y-scroll'>
               <div className='hidden sm:grid grid-cols-[0.5fr_3fr_1fr_3fr_3fr_1fr_1fr] grid-flow-col py-3 px-6 border-b'>
                   <p>#</p>
                   <p>Patient Name</p>
                   <p>Age</p>
                   <p>Date & Time</p>
                   <p>Doctor</p>
                   <p>Fees</p>
                   <p>Actions</p>
               </div>

               {appointments.map((item, index) => (

                   <div key={index} className='flex flex-wrap justify-between max-sm:gap-2 sm:grid sm:grid-cols-[0.5fr_3fr_1fr_3fr_3fr_1fr_1fr] items-center text-gray-500 py-3 px-6 border-b hover:bg-gray-50'>
                        <p className='max-sm:hidden'>{index+1}</p>

                        <div className='flex items-cemter gap-2'>
                            <img className='w-8 rounded-full' src={item.userData.image} alt="patient image"/> <p>{item.userData.name}</p>
                        </div>
                        <p className='max-sm:hidden'>{calculateAge(item.userData.dob)}</p>
                        <p>{item.slotDate} | {item.slotTime}</p>
                        <div className='flex items-center gap-2'>
                            <img className='w-8 rounded-full' src={item.doctorData.image} alt="doctor image"/> <p>{item.doctorData.name}</p>
                        </div>
                        <p>Rs. {item.amount}</p>
                        {
                            item.cancelled ?
                            <p className='text-red-400 text-xs font-medium'>Cancelled</p>
                            : item.isCompleted ?
                                 <p className='text-green-700 text-xs font-medium'>Completed</p>
                               : <p className='w-10 cursor-pointer'><i onClick={() => cancelAppointment(item._id)} class="fa-solid fa-rectangle-xmark fa-2x"></i></p>
                        
                        }
                        
                    </div>

               ))}
          </div>
    </div>
  )
}

export default AllAppointments