import React, { useContext } from 'react'
import medicity from '../assets/medicity.png'
import { AdminContext } from '../context/AdminContext'
import { useNavigate } from 'react-router-dom'
import { DoctorContext } from '../context/DoctorContext'

function Navbar() {
    
    const {aToken, setAToken} = useContext(AdminContext)
    const {dToken, setDToken} = useContext(DoctorContext)
    
    const navigate = useNavigate()

    const logout = ()=> {
        navigate('/')
        aToken && setAToken("")
        aToken && localStorage.removeItem('aToken')
        dToken && setDToken('')
        dToken && localStorage.removeItem('dToken')
    }

  return (
    <div className='flex justify-between items-center px-4 sm:px-10 py-3 border-b bg-blue-300'>
        <div className='flex '>
           <img src={medicity} alt="" className='cursor-pointer p-4 w-60 sm:w-64'  />
            <p className='border  rounded-full border-gray-500 bg-blue-600 py-7  px-3 -mx-8'>{aToken? 'ADMIN Panel' : 'Doctor Panel'}</p>
        </div>
            <button onClick={logout} className='bg-red-400 border-black text-white rounded-full py-3 px-4'>LOG OUT</button>
    </div>
  )
}

export default Navbar