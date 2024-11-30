import React, { useContext, useState } from 'react'
import { AdminContext } from '../../context/AdminContext'
import { toast } from 'react-toastify'
import axios from 'axios'
import doctor from '../../assets/addDoctor.jpeg'

function AddDoctor() {

    const [doctorImage, setDoctorImage] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [experience, setExperience] = useState('1 Year')
    const [fees, setFees] = useState('')
    const [speciality, setSpeciality] = useState('cardiology')
    const [degree, setDegree] = useState('')
    const [address1, setAddress1] = useState('')
    const [address2, setAddress2] = useState('')
    const [about, setAbout] = useState('')


      const {backendUrl, aToken} = useContext(AdminContext)

    const onHandleSubmit = async (event) => {
        event.preventDefault()

        try{
            if (!doctorImage) {
                return toast.error("Please Select An Image")
            }
            const formData = new FormData() 

            formData.append('image', doctorImage)
            formData.append('name', name)
            formData.append('email', email)
            formData.append('password', password)
            formData.append('experience', experience)
            formData.append('fees', Number(fees))
            formData.append('speciality', speciality)
            formData.append('degree', degree)
            formData.append('about', about)
            formData.append('address', JSON.stringify({line1:address1, line2:address2}))

            formData.forEach((value,key)=>{
                console.log(`${key}:${value}`)
            })


            const {data} = await axios.post(backendUrl + '/api/admin/add-doctor' ,formData, {headers:{aToken}})

            if(data.success){
                toast.success(data.message) 
                setDoctorImage(false)
                setName('')
                setEmail('')
                setPassword('')
                setExperience('')
                setDegree('')
                setAbout('')
                setFees('')
                setAddress1('')
                setAddress2('')

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
         <form onSubmit={onHandleSubmit} className='m-5 w-[900px]'>
             <p className='mb-3 text-lg font-medium'>Add Doctor</p>

             <div className='bg-white px-8 py-8 border rounded w-full max-w-4xl max-h-[80vh] overflow-y-scroll'>
                 <div className='flex items-center gap-4 mb-8 text-gray-500'>
                    <label htmlFor="doctorImage">
                         <img src={doctorImage ? URL.createObjectURL(doctorImage) : doctor} alt="" /> 
                    </label>
                        <input onChange={(e)=> setDoctorImage(e.target.files[0])} type="file" id='doctorImage' hidden />
                        <p>Upload Image</p>
                 </div>
                 <div className='flex flex-col lg:flex-row items-start gap-10 text-gray-600'> 
                     <div className='w-full lg:flex-1 flex flex-col gap-4'>
                         
                         <div className='flex-1 flex flex-col gap-1'>
                            <p>Doctor name</p>
                            <input onChange={(e)=> setName(e.target.value)} value={name} className='border rounded px-3 py-2' type="text" placeholder='Name' required/>
                         </div>
                         
                         <div className='flex-1 flex flex-col gap-1'>
                            <p>Doctor Email</p>
                            <input onChange={(e)=> setEmail(e.target.value)} value={email} className='border rounded px-3 py-2' type="email" placeholder='Email' required/>
                         </div>
                         
                         <div className='flex-1 flex flex-col gap-1'>
                            <p>Doctor Password</p>
                            <input onChange={(e)=> setPassword(e.target.value)} value={password} className='border rounded px-3 py-2' type="password" placeholder='Password' required/>
                         </div>
                         
                         <div className='flex-1 flex flex-col gap-1'>
                            <p>Experience</p>
                            <select onChange={(e)=> setExperience(e.target.value)} value={experience} className='border rounded px-3 py-2' >
                                <option value="1 Year">1 Year</option>
                                <option value="2 Years">2 Years</option>
                                <option value="3 Years">3 Years</option>
                                <option value="4 Years">4 Years</option>
                                <option value="5 Years">5 Years</option>
                                <option value="6 Years">6 Years</option>
                                <option value="7 Years">7 Years</option>
                                <option value="8 Years">8 Years</option>
                                <option value="9 Years">9 Years</option>
                                <option value="10 Years">10 Years</option>
                                <option value="11 Years">11 Years</option>
                            </select>
                         </div>
                         
                         <div className='flex-1 flex flex-col gap-1'>
                            <p>Fees</p>
                            <input onChange={(e)=> setFees(e.target.value)} value={fees} className='border rounded px-3 py-2' type="number" placeholder='Fees' required/>
                         </div>
                     </div>

                     <div className='w-full lg:flex-1 flex flex-col gap-4'>
                          <div className='flex-1 flex flex-col gap-1'>
                             <p>Speciality</p>
                             <select onChange={(e)=> setSpeciality(e.target.value)} value={speciality} className='border rounded px-3 py-2' >
                                 
                                 <option value="Cardiology"> Cardiology</option>
                                 <option value="Dermatology">Dermatology</option>
                                 <option value="ENT">ENT</option>
                                 <option value="Neurology">Neurology</option>
                                 <option value="Nephrology">Nephrology</option>
                                 <option value="Ophthalmology">Ophthalmology</option>
                                 <option value="Gyneacology">Gyneacology</option>
                                 <option value="Paediatrics">Paediatrics</option>
                                 <option value="Orthopedics">Orthopedics</option>
                                 <option value="General Medicine">General Medicine</option>
                                 <option value="NeuroSurgery">Neuro Surgery</option>
                                 <option value="Urology">Urology</option>
                                 <option value="Gastroenterology">Gastroenterology</option>
                                 <option value="Oncology">Oncology</option>
                                 <option value="Neonatology">Neonatology</option>

                             </select>
                          </div>
                          
                          <div className='flex-1 flex flex-col gap-1'>
                               <p>Education</p>
                               <input onChange={(e)=> setDegree(e.target.value)} value={degree} className='border rounded px-3 py-2' type="text" placeholder='Education' required />
                          </div>
                          
                           <div className='flex-1 flex flex-col gap-1'>
                               <p>Address</p>
                               <input onChange={(e)=> setAddress1(e.target.value)} value={address1} className='border rounded px-3 py-2' type="text" placeholder='address 1' required />
                               <input onChange={(e)=> setAddress2(e.target.value)} value={address2} className='border rounded px-3 py-2' type="text" placeholder='address 2' required />
                          </div>
                     </div>
                 </div>

                 <div>
                     <p className='mt-4 mb-2'>About Doctor</p>
                     <textarea onChange={(e)=> setAbout(e.target.value)} value={about} className='w-full px-4 pt-2 border rounded' type="text" placeholder='Details about Doctor' rows={5} required />
                 </div>
                     <button type='submit' className='bg-primary px-10 py-3 mt-4 text-white border rounded-full'>ADD DOCTOR</button>
             </div>
         </form>
        
    </div>
  )
}

export default AddDoctor