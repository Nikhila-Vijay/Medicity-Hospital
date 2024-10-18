import React, { useContext, useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './depart.css'
import {  useNavigate, useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Depart() {

    const {speciality} = useParams();
    const [filterDr, setFilterDr] = useState([])
    const navigate = useNavigate();

    const {doctors} = useContext(AppContext);


    const applyFilter = ()=>{
        if (speciality) {
            setFilterDr(doctors.filter(doc => doc.speciality === speciality))
        }
        else {

            setFilterDr(doctors)
        }
    }

    useEffect (()=> {
        applyFilter()
    },[doctors,speciality])


  return (

    <Container fluid>
       <Row>
          <Col xs={3} className="bg-light sidebar mt-5">

    
              <div className='mt-4 d-flex flex-column gap-2 align-items-center'>
                 <p onClick={()=> speciality === 'Cardiology' ? navigate('/departments') : navigate('/departments/Cardiology')} className='dept '>Cardiology</p>
                 <p onClick={()=> speciality === 'Neurology' ? navigate('/departments') : navigate('/departments/Neurology')} className='dept'>Neurology</p>
                 <p onClick={()=> speciality === 'NeuroSurgery' ? navigate('/departments') : navigate('/departments/NeuroSurgery')} className='dept'>NeuroSurgery</p>
                 <p onClick={()=> speciality === 'Nephrology' ? navigate('/departments') : navigate('/departments/Nephrology')} className='dept'>Nephrology</p>
                 <p onClick={()=> speciality === 'Pediatrics' ? navigate('/departments') : navigate('/departments/Pediatrics')} className='dept'>Pediatrics</p>
                 <p onClick={()=> speciality === 'Gynecology' ? navigate('/departments') : navigate('/departments/Gynecology')} className='dept'>Gynecology</p>
                 <p onClick={()=> speciality ===  'Oncology' ? navigate('/departments') : navigate('/departments/Oncology')} className='dept'>Oncology</p>
                 <p onClick={()=> speciality === 'Neonatology' ? navigate('/departments') : navigate('/departments/Neonatology')} className='dept'>Neonatology</p>
                 <p onClick={()=> speciality === 'Gastroenterology' ? navigate('/departments') : navigate('/departments/Gastroenterology')} className='dept'>Gastroenterology</p>
                 <p onClick={()=> speciality === 'Dermatology' ? navigate('/departments') : navigate('/departments/Dermatology')} className='dept'>Dermatology</p>
                 <p onClick={()=> speciality === 'General Medicine' ? navigate('/departments') : navigate('/departments/General Medicine')} className='dept'>General Medicine</p>
                 <p onClick={()=> speciality === 'Ophthalmology' ? navigate('/departments') : navigate('/departments/Ophthalmology')} className='dept'>Ophthalmology</p>
                 <p onClick={()=> speciality === 'ENT' ? navigate('/departments') : navigate('/departments/ENT')} className='dept'>ENT</p>
                 <p onClick={()=> speciality === 'Urology' ? navigate('/departments') : navigate('/departments/Urology')} className='dept'>Urology</p>
                 <p onClick={()=> speciality === 'Orthopedics' ? navigate('/departments') : navigate('/departments/Orthopedics')} className='dept'>Orthopedics</p>
                 
              </div>

        </Col>
        <Col xs={9} className='mt-5'>
           <div className="image-grid p-3">
                 {
                    filterDr.map((item,index) => (
                        <Card style={{ width: '10rem',  cursor: 'pointer' }} className='ms-4 mb-5'>
                        <Card.Img variant="top" src={item.image} height={'250px'}/>
                        <Card.Body>
                           <Card.Title>{item.name}</Card.Title>
                           <Card.Text>{item.speciality}</Card.Text>
                           <Button onClick={()=> navigate(`/book-an-appointment/${item._id}`)} variant="primary">Know More</Button>
                           </Card.Body>
                        </Card>
                   ))
                 }
              </div>

              </Col>
       </Row>
     </Container>     
        

  );
}



export default Depart

    
    // <Container fluid>
    //   <Row>
    //     <Col xs={3} className="bg-light sidebar mt-5">
          
    //       <Nav className="flex-column mt-5 ms-5">
           
    //         <NavLink to='/departments/cardiology' className='sidebar-link' style={{textDecoration:'none'}}>Cardiology</NavLink>
    //         <NavLink to='/departments/cardiology' className='sidebar-link'style={{textDecoration:'none'}}>Neurology</NavLink>
    //         <NavLink to='/departments/cardiology' className='sidebar-link'style={{textDecoration:'none'}}>NeuroSurgery</NavLink>
    //         <NavLink to='/departments/cardiology' className='sidebar-link'style={{textDecoration:'none'}}>Nephrology</NavLink>
    //         <NavLink to='/departments/cardiology' className='sidebar-link'style={{textDecoration:'none'}}>Pediatrics</NavLink>
    //         <NavLink to='/departments/cardiology' className='sidebar-link'style={{textDecoration:'none'}}>Gynecology</NavLink>
    //         <NavLink to='/departments/cardiology' className='sidebar-link'style={{textDecoration:'none'}}>Urology</NavLink>
    //         <NavLink to='/departments/cardiology' className='sidebar-link'style={{textDecoration:'none'}}>ENT</NavLink>
    //         <NavLink to='/departments/cardiology' className='sidebar-link'style={{textDecoration:'none'}}>Ophthalmology</NavLink>
    //         <NavLink to='/departments/cardiology' className='sidebar-link'style={{textDecoration:'none'}}>General Medicine</NavLink>
    //         <NavLink to='/departments/cardiology' className='sidebar-link'style={{textDecoration:'none'}}>Dermatology</NavLink>
    //         <NavLink to='/departments/cardiology' className='sidebar-link'style={{textDecoration:'none'}}>Gastroenterology</NavLink>
    //         <NavLink to='/departments/cardiology' className='sidebar-link'style={{textDecoration:'none'}}>Neonatology</NavLink>
    //         <NavLink to='/departments/cardiology' className='sidebar-link'style={{textDecoration:'none'}}>Oncology</NavLink>
            
    //       </Nav>
    //     </Col>
    //     <Col xs={9}>
    //       <div className="content p-3">
    //         <h2>Main Content Area</h2>
    //         <p>This is where your main content will go.</p>
    //       </div>
    //     </Col>
    //   </Row>
    // </Container>
 