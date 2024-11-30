import React from 'react'
import banner from '../assets/banner2.png'
import './banner.css'
import { useNavigate } from 'react-router-dom'

function Banner() {
    const navigate = useNavigate()

  return (
    <div className='bannerdiv d-flex'>

        <div className='bannerdiv1'>
             <div>
                <p className='p1'>A trusted place for quality healthcare</p>
                <p className='p2'>Where expertise and empathy come together.</p>
             </div>
             <button className='button1' onClick={()=>navigate('/departments')}>BOOK AN APPOINTMENT</button>
        </div>

        <div className='imageDiv'>
             <img src={banner} alt="" className='bannerImage' />
        </div>
    </div>
  )
}

export default Banner;