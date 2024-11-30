import React from 'react'
import { useContext } from 'react';

import Card from 'react-bootstrap/Card';
import { AppContext } from '../context/AppContext';
import './careers.css'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';


function Careers() {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const {careers} = useContext(AppContext)

  return (
    <div>

      <p className='divP'>Careers...</p>

      <div className='cardDiv'>
          {careers.length > 0 ? (
            careers.map((item, index) => (
             
             <Card key={index} className='cDiv'>
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                 <Card.Subtitle>
                       Department:   {item.department}
                  </Card.Subtitle> <br /> <hr />
                  <Card.Text>
                     <strong>Vacancies:</strong> {item.vaccancies} <br /> <hr />
                     <strong>Qualification:</strong>    {item.qualification}  <br />
                     <strong>Experience:</strong>   {item.experience}
                 
                  </Card.Text>
                       
        
              </Card.Body>
              <button onClick={handleShow} className='btnCard'>Know More</button>
              
              <Modal show={show} onHide={handleClose}  backdrop="static" keyboard={false}>
                 <Modal.Header closeButton>
                    <Modal.Title>Job Details</Modal.Title>
                 </Modal.Header>
                 <Modal.Body>Interested candidates may send your detailed CV to "<span style={{color: 'blue'}}>hrd1@medicity.com</span>"  .</Modal.Body>
                 <Modal.Footer>
                      <Button variant="danger" onClick={handleClose}>
                          Close
                      </Button>
                 </Modal.Footer>
              </Modal>   
            </Card>

            
        ) )) 
        : ( <p>No career opportunities available at the moment.</p> 
        )}
         
      </div>

      
    </div>
  )
}

export default Careers