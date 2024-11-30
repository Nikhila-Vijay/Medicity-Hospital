import React, { useContext, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { loginApi, registerApi } from '../services/allApi';
import { ToastContainer, toast } from 'react-toastify';
import login from '../assets/patient.jpeg'
import 'react-toastify/dist/ReactToastify.css';
import { AppContext } from '../context/AppContext';
import axios from 'axios';

function Auth({ register }) {
    const registerForm = register ? true : false;

    const {backendUrl, token, setToken} = useContext(AppContext)
    // useNavigate() hook is used to redirect to a particular path
    const navigate = useNavigate()
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        password: ""
    })
    const handleRegister = async (e) => {
        e.preventDefault();
    try{
        const { name, email, password } = userData;
        if (!name || !email || !password) {
            toast.warning("Please fill the form completely")
            console.log(userData);
            
        }
        else {
            const {data} = await axios.post(backendUrl + '/api/user/register',userData)
            console.log(data.message)
            if (data.success) {
                localStorage.setItem('token', data.token)
                setToken(data.token)
                // toastify implement
                setUserData({
                    name: "",
                    email: "",
                    password: ""
                })
                toast.success(`${name} registered successfully`)
                // navigate to login page on successfull user registration
                navigate('/login')
            }
            else if (data.status == 400) {
                toast.error(data.message)
            }
            else {
                toast.error("Something happened")
            }
        }
        
    }catch (error){
        toast.error(error.message)
    }

    }
    const handleLogin = async (e) => {
        e.preventDefault();
    try{
        const { email, password } = userData;
        if (!email || !password) {
            toast.warning("Please fill the form completely")
        }
        else {
            const {data} = await axios.post(backendUrl + '/api/user/login',userData);
            
            if (data.success) {
                localStorage.setItem('token', data.token)
                setToken(data.token)
                setUserData({
                   
                    email: "",
                    password: ""
                })
                toast.success('Logged in successfully')
                navigate('/')
            }
            else if (data.status === 401) {
                toast.error("Invalid Email or password")
            }
            else {
                toast.error("Something went wrong")
            }

        }
    }catch(error){
        toast.error(error.message)
    }
    }
    return (
        <>
            <div style={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div className='container w-75'>
                    <h5>
                        <Link className='text-warning' style={{ textDecoration: 'none', fontWeight: 'bolder' }} to={'/'}>
                            <i class="fa-solid fa-arrow-left me-3"></i>BACK TO HOME</Link>
                    </h5>
                    <div className='bg-light'>
                        <Row>
                            <Col md={6} className='p-4 d-flex justify-content-center align-items-center'>
                                {/* <img src="https://img.freepik.com/free-vector/login-concept-illustration_114360-739.jpg" */}
                                    <img src={login}
                                    width='70%'
                                    alt=""

                                />
                            </Col>
                            <Col md={6} className='p-5 d-flex justify-content-center '>
                                <form className='w-100'>
                                    <h5 className='text-center'>Your Health Is Our Priority</h5>
                                    {registerForm ?
                                        <>
                                            <h6 className='text-center mb-3 mt-3'>Create Your Account</h6>
                                            <input type="text" name="" id="" placeholder='Name' className='form-control rounded'
                                                value={userData.name}
                                                onChange={(e) => setUserData({ ...userData, name: e.target.value })}
                                            />
                                        </>

                                        :
                                        <h6 className='text-center mb-3 mt-3'>Sign In To Your Account</h6>
                                    }
                                    <div className='mb-3 mt-3'>
                                        <input type="text" placeholder='Email Id' className='form-control rounded'
                                            value={userData.email}
                                            onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                                        />
                                    </div>
                                    <div className='mb-3'>
                                        <input type="password" placeholder='password' className='form-control rounded'
                                            value={userData.password}
                                            onChange={(e) => setUserData({ ...userData, password: e.target.value })}
                                        />
                                    </div>
                                    {registerForm ?
                                        <div className='mb-3 mt-3'>
                                            <button className='btn btn-warning w-100 rounded' onClick={handleRegister}> REGISTER</button>
                                            <p className='mt-3'> Already A User? Click Here To
                                                <Link className='ms-2' style={{ textDecoration: 'none' }} to={'/login'}>LOGIN</Link></p>
                                        </div> :
                                        <div >
                                            <button className='btn btn-warning w-100 rounded' onClick={handleLogin}>LOGIN</button>
                                            <p className='mt-3'> Not Registered yet? Click Here To
                                                <Link className='ms-2' style={{ textDecoration: 'none' }} to={'/register'}>REGISTER</Link></p>
                                        </div>
                                    }
                                </form>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
            {/* <ToastContainer /> */}
        </>
    )
}

export default Auth