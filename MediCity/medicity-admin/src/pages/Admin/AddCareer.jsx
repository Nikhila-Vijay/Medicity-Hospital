import React, { useContext, useState } from 'react'
import { AdminContext } from '../../context/AdminContext'
import axios from 'axios'
import { toast } from 'react-toastify'

function AddCareer() {

    const [title, setTitle] = useState('')
    const [department, setDepartment] = useState('')
    const [vaccancies, setVaccancies] = useState('')
    const [qualification, setQualification] = useState('')
    const [experience, setExperience] = useState('')

    const {backendUrl, aToken} = useContext(AdminContext)


   const onHandleSubmit = async (event) => {
    event.preventDefault()

    try {

        // const formData = new FormData() 

        // formData.append('title', title)
        // formData.append('department', department)
        // formData.append('vaccancies', vaccancies)
        // formData.append('qualification', qualification)
        // formData.append('experience', experience)
        

        // formData.forEach((value,key)=>{
        //     console.log(`${key}:${value}`)
        // })


        const {data} = await axios.post(backendUrl + '/api/admin/careers' , { title, department, vaccancies, qualification, experience }, {headers:{aToken}})

            if(data.success){
                toast.success(data.message) 
                setTitle('')
                setDepartment('')
                setVaccancies('')
                setQualification('')
                setExperience('')
                

            } else{
                toast.error(data.message)
            }
        }
        
     catch (error) {
             toast.error(error.message)
            console.log(error)
    }

   }

  return (
    <div>
        
        <form onSubmit={onHandleSubmit} className='m-5 w-[900px] '>
            <p className='mb-3 text-lg font-medium'>Add New Jobs </p>
        
            <div >
                <div className='bg-blue-200 mt-6 p-7 border rounded-md ms-16'>
                        <div className='flex-1 flex flex-col gap-1'>
                            <p>Job Title</p>
                            <input onChange={(e)=> setTitle(e.target.value)} value={title} className='border rounded px-3 py-2' type="text" placeholder='Title' required/>
                         </div>
                         <div className='flex-1 flex flex-col gap-1 mt-5'>
                            <p>Department</p>
                            <input onChange={(e)=> setDepartment(e.target.value)} value={department} className='border rounded px-3 py-2' type="text" placeholder='Department' required/>
                         </div>
                         <div className='flex-1 flex flex-col gap-1 mt-5'>
                            <p>Vaccancies</p>
                            <input onChange={(e)=> setVaccancies(e.target.value)} value={vaccancies} className='border rounded px-3 py-2' type="text" placeholder='Vaccancies' required/>
                         </div>
                         <div className='flex-1 flex flex-col gap-1 mt-5'>
                            <p>Qualification</p>
                            <input onChange={(e)=> setQualification(e.target.value)} value={qualification} className='border rounded px-3 py-2' type="text" placeholder='Qualification' required/>
                         </div>
                         <div className='flex-1 flex flex-col gap-1 mt-5 mb-5'>
                            <p>Experience</p>
                            <input onChange={(e)=> setExperience(e.target.value)} value={experience} className='border rounded px-3 py-2' type="text" placeholder='Experience' required/>
                         </div>
                </div>

                <button type='submit' className='bg-primary px-10 py-3 mt-8  ms-96 text-white border rounded-full'>ADD JOB</button>
            </div>

        </form>
    </div>
  )
}

export default AddCareer;