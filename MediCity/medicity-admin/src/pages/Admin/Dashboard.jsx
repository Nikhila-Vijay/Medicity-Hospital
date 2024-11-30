import React, { useContext, useEffect } from 'react'
import { AdminContext } from '../../context/AdminContext'

function Dashboard() {

  const {aToken, getDashData, cancelAppointment, dashData} = useContext(AdminContext)
    

  useEffect(() => {
    if (aToken) {
      getDashData()
    }
  }, [aToken])
  
  
  
  
  return dashData && (
    <div className='m-5'>
        <div className='flex flex-wrap gap-32'>

            <div className='ms-6 flex items-center gap-5 bg-white p-4 min-w-52 rounded border-2 border-red-800 cursor-pointer hover:scale-105 transition-all'>
               <i class="fa-solid fa-stethoscope fa-3x"></i>
               <div>
                 <p className='text-xl font-semibold text-green-800'>{dashData.doctors}</p>
                 <p>Doctors</p>
               </div>
            </div>

            <div className='flex items-center gap-5 bg-white p-4 min-w-52 rounded border-2 border-red-800 cursor-pointer hover:scale-105 transition-all'>
               <i class="fa-regular fa-calendar-check fa-3x"></i>
               <div>
                 <p className='text-xl font-semibold text-gray-600'>{dashData.appointments}</p>
                 <p>Appointments</p>
               </div>
            </div>

            <div className='flex items-center gap-5 bg-white p-4 min-w-52 rounded border-2 border-red-800 cursor-pointer hover:scale-105 transition-all'>
               <i class="fa-solid fa-bed fa-3x"></i>
               <div>
                 <p className='text-xl font-semibold text-red-600'>{dashData.patients}</p>
                 <p>Patients</p>
               </div>
            </div>
        </div>

        <div className='bg-white ms-6'>
           <div className='flex items-center gap-2.5 px-4 py-4 mt-10 rounded-t border'>
            <i class="fa-solid fa-list fa-2x"></i>
            <p className='font-semibold text-xl'>Latest Appointments</p>
           </div>

           <div className='pt-4 border border-t-0'>

            {
              dashData.latestAppointments.map((item, index) => (
                <div className='flex items-center px-6 py-3 gap-3 hover:bg-green-400' key={index}>
                    <img className='rounded-full w-10' src={item.doctorData.image} alt="" />
                    <div className='flex-1 text-sm'>
                       <p className='text-blue-950 font-medium' >{item.doctorData.name}</p>
                       <p className='text-blue-400'>{item.slotDate}</p>
                    </div>
                    {
                            item.cancelled ?
                            <p className='text-red-400 text-xs font-medium'>Cancelled</p>
                            : item.isCompleted ?
                                 <p className='text-green-700 text-xs font-medium'>Completed</p>
                               : <p className='w-10 cursor-pointer'><i onClick={() => cancelAppointment(item._id)} class="fa-solid fa-rectangle-xmark fa-2x"></i></p>
                        
                        }
                        

                </div>
              ))
            }
           </div>
        </div>
    </div>
  )
}

export default Dashboard