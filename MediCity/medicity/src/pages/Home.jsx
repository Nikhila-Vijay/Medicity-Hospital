import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import hospital from '../assets/hospital1.jpg'
import doctors from '../assets/Doctors-Row.jpg'
import baby from '../assets/bby.jpg'
import bed from '../assets/medical-bed.jpg'
import surgery from '../assets/surgery.jpg'
import Departments from './Departments';
import OurDoctors from '../components/OurDoctors';
import Depart from './Depart';
import Banner from '../components/Banner';

import './Home.css'


function Home() {
  return (
    <div>
        <Carousel>
             <Carousel.Item interval={1000}>
                 <img src={hospital} alt="" height={'400px'} width={'100%'} />

                <Carousel.Caption>
                   <h3 style={{color:'black'}} className='fw-bold fs-1'>"The Healthcare You Can Trust..."</h3>
                   
                </Carousel.Caption>
             </Carousel.Item>
             <Carousel.Item interval={500}>
                  <img src={doctors} alt="" height={'400px'} width={'100%'}  />
                <Carousel.Caption>
                  <h3 style={{color:'black'}} className='fw-bold fs-1'>"Making A Connection Between Happiness And Health"</h3>
                
                </Carousel.Caption>
             </Carousel.Item>
             <Carousel.Item>
                   <img src={baby} alt="" height={'400px'} width={'100%'}  />
        
                <Carousel.Caption>
                     <h3 style={{color:'black'}} className='fw-bold fs-1'>"Welcoming New Life with Expert Care: Where Gynecology Meets Tender Newborn Moments."</h3>
                     
                </Carousel.Caption>
             </Carousel.Item>
             <Carousel.Item interval={500}>
                      <img src={bed} alt="" height={'400px'} width={'100%'}  />
                 <Carousel.Caption>
                       <h3 style={{color:'black'}} className='fw-bold fs-3'>"State-of-the-Art Care in a Cutting-Edge Facility: Where Modern Infrastructure Meets Compassionate Healing."</h3>
                       
                 </Carousel.Caption>
             </Carousel.Item>
             <Carousel.Item interval={500}>
                      <img src={surgery} alt="" height={'400px'} width={'100%'}  />
                   <Carousel.Caption>
                      <h3 style={{color:'black'}} className='fw-bold fs-1'>"Precision, Expertise, and Care: Transforming Lives One Surgery at a Time."</h3>
                      
                   </Carousel.Caption>
            </Carousel.Item>
       </Carousel>

       <div className='pDiv'>
           <p className='pDiv3'>Our hospital has established itself as a beacon of excellence, driven by a commitment to 
            providing compassionate care and improving the health of the community. Through unwavering dedication 
            to serving society, we have not only achieved remarkable success in patient outcomes but also advanced our 
            capabilities in technical and scientific growth. With cutting-edge technology, state-of-the-art facilities, 
            and a team of skilled professionals, we continuously push the boundaries of medical innovation to deliver world-class
             healthcare. Our focus on quality, research, 
            and patient-centric services underscores our mission to make a meaningful impact on every life we touch.</p>
           <br />
        </div>
        <div className='pDiv1'>
            <p className='pDiv2'>Our hospital is proud to house a diverse range of specialized departments, each staffed by highly 
              skilled doctors, dedicated nurses, and compassionate support teams who work tirelessly to deliver the best 
              possible care. From emergency services and surgical units to cardiology, pediatrics, and oncology, every department 
              is committed to excellence and collaboration in treating patients. Our doctors bring a wealth of expertise and our 
              staff upholds the highest standards of service, creating a healing environment for all. We extend our heartfelt 
              gratitude to everyone who has supported us on this journey—patients, families, and the entire 
              community—thank you for your trust and encouragement.</p>
       </div>

       <Departments/>
       <OurDoctors/>
       <Banner/>
       
    </div>
  )
}

export default Home