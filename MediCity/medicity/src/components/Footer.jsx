import React from 'react'
import { Link } from 'react-router-dom'
import medicity from '../assets/medicity.png'

export default function Footer() {

  
  return (
    <div className='bg-dark mt-5 d-flex justify-content-center align-items-center p-3'>
        
      <div className='footer d-flex align-items-center justify-content-evenly'>
        <div style={{ width: '400px' }}>
          <img src={medicity} alt="" height={'100px'} className='mt-4'/>
          <p style={{ textAlign: 'justify', color: 'white'}} className='mt-4' >Every life is precious to us. You are important, and we care for you. 
            We at MEDICITY Hospitals are there for you when you need us the most. Our hospital is where science, 
            technology, and research merge to embrace good health.</p>
            </div>
        <div className='d-flex flex-column ms-5'>
          <h4  style={{color:'white'}}>Links</h4>
          <Link to='/' style={{ textDecoration: 'none', color: 'white' }}>
            Home
          </Link>
          <Link to='/departments' style={{ textDecoration: 'none', color: 'white' }}>
            Departments
          </Link>
          <Link to='/contact-us' style={{ textDecoration: 'none', color: 'white' }}>
            Contact Us
          </Link>
          <Link to='/book-an-appointment' style={{ textDecoration: 'none', color: 'white' }}>
             Appointments
          </Link>
        </div>
        <div className='d-flex flex-column ms-5'>
          {/* <h4 style={{color:'white'}}>Guides</h4> */}
          <p style={{color:'white'}}>EMERGENCY : 6672908754</p>
          <p style={{color:'white'}}>For Appointments : 675438966, 0484-768965</p>
          <p style={{color:'white'}}>Patient Enquiries : 7890665430, 0484-788965</p>
        </div>
        <div className='ms-5'>
          <h4 style={{color:'white'}}>Let's Stay In Touch...</h4>
          <div className='d-flex'>
            <input type="email" className='form-control' placeholder='Enter your email Id' />
            <button  className='btn btn-warning ms-2'>SUBSCRIBE</button>
          </div>
          <div>
            <h4 style={{color:'white'}} className='mt-5'>Follow us on...</h4>
          </div>
          <div className='d-flex justify-content-evenly align-items-center mt-3' >
            <Link style={{ textDecoration: 'none', color: 'white' }}>
              <i class="fa-brands fa-instagram fa-2x"></i>
            </Link>
            <Link style={{ textDecoration: 'none', color: 'white' }}>
              <i class="fa-brands fa-twitter fa-2x"></i>
            </Link>
            <Link style={{ textDecoration: 'none', color: 'white' }}>
              <i class="fa-brands fa-facebook fa-2x"></i>
            </Link>
            <Link style={{ textDecoration: 'none', color: 'white' }}>
              <i class="fa-brands fa-reddit fa-2x"></i>
            </Link>
          </div>


        </div>
      </div>

    </div>
    
  )
}
