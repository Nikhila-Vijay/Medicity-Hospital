import React, { useContext } from 'react'
import { doctors } from '../assets/departments'
import './OurDoctors.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';


function OurDoctors() {

    const navigate = useNavigate()
    const {doctors} = useContext(AppContext)

  return (
    <div className=' div1 d-flex flex-column align-items-center mb-5 mt-5'>
         <h1 className='mt-5 fw-bold'>Our Doctors</h1>
         <p className='mt-3'>Heroes in white coats, healing hands, and caring hearts. Our frontline warriors of health and hope.</p>
         <div style={{color:'lightskyblue'}}>
         <div className='mt-5 d-flex' >
         {doctors.slice(0,4).map((item,index) => (
              <Card key={index}  style={{ width: '15rem', cursor: 'pointer' }} className='ms-4'>
              <Card.Img variant="top" src={item.image} height={'250px'}/>
              <Card.Body>
                
                 <Card.Subtitle className='d-flex align-items-center'><p className={`${item.availability ? 'bg-success': 'bg-gray'} rounded-circle `} style={{ width: '10px', height: '10px' }}></p><p style={{ color: 'green' }}>{item.availability ? 'Available' : 'Not Available' } </p></Card.Subtitle>
                 <Card.Title>{item.name}</Card.Title>
                 <Card.Text>{item.speciality}</Card.Text>
                 <Button onClick={()=> navigate(`./book-an-appointment/${item._id} `)} variant="primary">Know More</Button>
                 </Card.Body>
              </Card>
         ))}
         </div>

         <div className='mt-5 d-flex'>
         {doctors.slice(4,8).map((item,index) => (
              <Card key={index}  style={{ width: '15rem',cursor: 'pointer' }} className='ms-4 mb-5'>
              <Card.Img variant="top" src={item.image} height={'250px'}/>
              <Card.Body>
                 <Card.Subtitle className='d-flex align-items-center'><p className={`${item.availability ? 'bg-success': 'bg-gray'} rounded-circle `} style={{ width: '10px', height: '10px' }}></p><p style={{ color: 'green' }}>{item.availability ? 'Available' : 'Not Available' } </p></Card.Subtitle>
                 <Card.Title>{item.name}</Card.Title>
                 <Card.Text>{item.speciality}</Card.Text>
                 <Button onClick={()=> navigate(`./book-an-appointment/${item._id}`)} variant="primary">Know More</Button>
                 </Card.Body>
              </Card>
         ))}
         </div>
         </div>
         <button onClick={()=>navigate('./departments')} className='btn btn-primary mt-5'>See All</button>
    </div>
  )
}

export default OurDoctors;