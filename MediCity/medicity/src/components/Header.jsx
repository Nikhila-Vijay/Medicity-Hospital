import React, { useContext, useState } from 'react'
import medicity from '../assets/medicity.png'
import { Link } from 'react-router-dom'
import profile from '../assets/profilepic.jpeg'
import Dropdown from 'react-bootstrap/Dropdown';
import { AppContext } from '../context/AppContext';


 function Header() {

  const {token, setToken, userData} = useContext(AppContext)
        
  const [showMenu, setShowMenu] = useState(false);

  const logout = () => {
    setToken('')
    localStorage.removeItem('token')
  }
  

  return (
    <>
    <div className=' d-flex align-items-center'>
        <img src={medicity} alt="" className='mt-4' />
        <div className='d-flex justify-content-end  align-items-center w-50'>
           {/* <Link to={"/book-an-appointment"}>
                 <button className='btn btn-outline-dark btn-primary text-white fs-5 fw-bold me-5 mt-4'>BOOK AN APPOINTMENT </button> 
            </Link> */}
            {token && userData ?
            <Dropdown >
                 <Dropdown.Toggle  id="dropdown-basic">
                     {/* <div className='position-relative'> */}
                            <img src={userData.image} alt="" className='rounded-circle' width="100" height="100" />
                 </Dropdown.Toggle>     
                  <Dropdown.Menu>
                            <Dropdown.Item href="/patient-profile">My Profile</Dropdown.Item>
                            <Dropdown.Item href="/patient-appointment">My Appointments</Dropdown.Item>
                            <Dropdown.Item href="/" onClick={logout}>Log Out</Dropdown.Item>
                 </Dropdown.Menu>
            </Dropdown>
                  
                  
                  
                   
            // </div>
            :
            <Link to={"/login"}>
                <button className='btn btn-outline-dark btn-success fs-5 text-white mt-4 ms-4'>Patient Login </button>
            </Link>
             }
            
        </div>
    </div>
    <div className='bg=primary'>

    </div>
    </>
  )
}

export default Header

