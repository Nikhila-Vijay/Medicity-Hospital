import React, { useContext, useState } from 'react'
import {adminAssets} from '../assets/adminAssets'
import { AdminContext } from '../context/AdminContext'
import axios from 'axios'
import { toast } from 'react-toastify'
import { DoctorContext } from '../context/DoctorContext'

function Login() {

    const [state, setState] = useState("Admin")
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const {setAToken, backendUrl} = useContext(AdminContext)
    const {setDToken} = useContext(DoctorContext)


    const onHandleSubmit = async (event)=> {
        event.preventDefault()

        try{

          if(state === 'Admin') {
              const {data} = await axios.post(backendUrl + '/api/admin/login', {email, password})
              if(data.success){
                console.log(data.token)
                localStorage.setItem('aToken', data.token)
                setAToken(data.token)
                
              }else{
                 toast.error(data.message)
              }
          }
          else{

            const {data} = await axios.post(backendUrl + '/api/doctors/login', {email, password})
            
            if(data.success){
              console.log(data.token)
              localStorage.setItem('dToken', data.token)
              setDToken(data.token)
              console.log(data.token);
              
              
            }else{
               toast.error(data.message)
            }


          }
          
          
        }
        catch(error){

        }

      }
  return (
    
          <form onSubmit={onHandleSubmit} classname='min-h-[80vh] flex items-center '>
              <div className=' flex flex-col gap-3  items-center mt-40 p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-[#5E5E5E] text-md shadow-lg'>
                   <p className='text-2xl font-semibold m-auto'><span className='text-primary'>{state}</span>  LOGIN</p>
                   <div className='w-1/2 '>
                      <p>Email</p>
                      <input onChange={(e)=> setEmail(e.target.value)} value={email} className='border border-[#ee6161] rounded w-full p-2 mt-1' type="email" required />
                   </div>
                   <div className='w-1/2 '>
                       <p>Password</p>
                       <input onChange={(e)=> setPassword(e.target.value)} value={password} className='border border-[#ee6161] rounded w-full p-2 mt-1' type="password" required />
                   </div>
                   <button className='bg-primary text-white rounded-md py-2 text-base w-[200px] '>Login</button>
                   {
                    state === 'Admin'
                    ? <p>Doctor Login ? <span className='text-primary underline cursor-pointer' onClick={()=> setState('Doctor')}>Click here</span></p>
                    : <p>Admin Login ? <span className='text-primary underline cursor-pointer' onClick={()=> setState('Admin')}>Click here</span></p>
                   }
              
              
              </div>
          </form>

    
  )
}

export default Login;