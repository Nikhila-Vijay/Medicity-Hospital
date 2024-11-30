import React, { useContext, useEffect } from 'react'
import { AdminContext } from '../../context/AdminContext'

function doctorList() {
    const {doctors, aToken, getAllDoctors, changeAvailability} = useContext(AdminContext)
     
     useEffect(()=> {
        if (aToken){
            getAllDoctors()
        }
     },[aToken])
  
    return (
    <div className='m-5 max-h-[90vh] overflow-y-scroll'>
         <div>
             <h1 className='text-lg font-medium'>All Doctors</h1>
         </div>
         <div className='w-full flex flex-wrap gap-4 pt-5 gap-y-6'>
            {
                doctors.map((item,index) => (
                    <div className='border border-indigo-200 rounded-xl max-w-56 overflow-hidden cursor-pointer group' key={index}>
                         <img className=' group-hover:scale-110 transition-all duration-500 ease-in-out'  src={item.image} alt="" />
                         <div className='p-4'>
                            <p className='text-neutral-900 text-lg font-medium'>{item.name}</p>
                            <p className='text-neutral-600 text-sm'>{item.speciality}</p>
                            <div className='mt-2 flex items-center gap-1 text-sm'>
                                <input onChange={() => changeAvailability(item._id)} type="checkbox" checked={item.availability} />
                                <p>Available</p>
                            </div>
                         </div>
                    </div>
                ))
            }
         </div>
    </div>
  )
}

export default doctorList;


