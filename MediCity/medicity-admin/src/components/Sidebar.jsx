import React, { useContext } from 'react'
import { AdminContext } from '../context/AdminContext'
import { NavLink } from 'react-router-dom'
import { DoctorContext } from '../context/DoctorContext'


function Sidebar() {

    const {aToken} = useContext(AdminContext)
    const {dToken} = useContext(DoctorContext)

  return (
    <div className='min-h-screen bg-white border'>
        {
            aToken && <ul className='mt-5 text-[#515151]'>

                <NavLink to={'/admin-dashboard'} className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-r-4 border-primary' : ''}`}>
                   <i class="fa-solid fa-house-chimney-medical"></i>
                   <p className='hidden md:block'> Dashboard</p>
                </NavLink>
                <NavLink to={'/all-appointments'} className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-r-4 border-primary' : ''}`}>
                    <i class="fa-regular fa-calendar-check"></i>
                    <p className='hidden md:block'> Appointments</p>
                </NavLink>
                <NavLink to={'/add-doctor'} className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-r-4 border-primary' : ''}`}>
                    <i class="fa-solid fa-user-plus"></i>
                    <p className='hidden md:block'> Add New Doctor</p>
                </NavLink>
                <NavLink to={'/doctor-list'} className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-r-4 border-primary' : ''}`}>
                    <i class="fa-solid fa-user-doctor"></i>
                    <p className='hidden md:block'> Doctors List</p>
                </NavLink>
                <NavLink to={'/patient-messages'} className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-r-4 border-primary' : ''}`}>
                    <i class="fa-regular fa-envelope"></i>
                    <p className='hidden md:block'> Patient Messages</p>
                </NavLink>
                <NavLink to={'/add-careers'} className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-r-4 border-primary' : ''}`}>
                    <i class="fa-solid fa-copyright"></i>
                    <p className='hidden md:block'> Add Careers</p>
                </NavLink>
            </ul>
        }

        {
            dToken && <ul className='mt-5 text-[#515151]'>

                <NavLink to={'/doctor-dashboard'} className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-r-4 border-primary' : ''}`}>
                   <i class="fa-solid fa-house-chimney-medical"></i>
                   <p className='hidden md:block'> Dashboard</p>
                </NavLink>
                <NavLink to={'/doctor-appointments'} className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-r-4 border-primary' : ''}`}>
                    <i class="fa-regular fa-calendar-check"></i>
                    <p className='hidden md:block'> Appointments</p>
                </NavLink>
                <NavLink to={'/add-prescription'} className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-r-4 border-primary' : ''}`}>
                <i class="fa-solid fa-file-prescription"></i>
                    <p className='hidden md:block'> Add Prescription</p>
                </NavLink>
                <NavLink to={'/doctor-profile'} className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-r-4 border-primary' : ''}`}>
                    <i class="fa-solid fa-user-doctor"></i>
                    <p className='hidden md:block'> My Profile</p>
                </NavLink>

            </ul>
        }
    </div>
  )
}

export default Sidebar