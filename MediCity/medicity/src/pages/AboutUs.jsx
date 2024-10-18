import React from 'react'
import about from '../assets/about.jpg'

function AboutUs() {
  return (
    <div>
        <div>
          <img src={about} alt="" height={"400px"} width={"100%"}/>
      </div>
      <div className='mt-5 fs-1 justify-content-center align-items-center ms-5' 
      style={{height:'500px', width:'1250px',  backgroundColor: 'lightblue' , borderRadius:'15%'}}>
        <p className='fw-bold'>Who We Are...</p>
        <p className='ms-5'>Located in the vibrant heart of India, 
            MEDICITY Hospitals is one of the largest private multi-specialist hospitals in Asia. 
            We are dedicated to providing the most sophisticated healthcare to people from all walks of life. Our team of highly skilled doctors, nurses, and support staff work tirelessly to provide personalized care and 
            attention to each individual who walks through our doors. </p>
      </div>
      <br />
      <br />
      
      <div className='bg-warning d-flex align-items-center justify-content-center border p-3 rounded-pill'>
          <div className='ms-3 mt-5'>
              <b className='fs-3'>Our Vision</b>
              <p className='fs-5'>To provide healthcare of the highest quality to all in a spirit of compassion and continually improve the 
                standard of care provided to the community through the promotion of value-based quality education and research.</p>
          </div>
          <div className="d-flex">
      <div className="border-end" style={{ height: '190px', borderWidth: '3px', borderColor: 'black'}}></div>
    </div>
          <div className='ms-3 mt-5'>
              <b className='fs-3'>Our Mission</b>
              <p className='fs-5 ms-2'>Establishing a Center of Excellence in healthcare and <br />improving the well-being of the community through quality programs of preventive and curative medicine, medical education, and research. Providing outstanding and affordable medical care in a patient-friendly 
                environment and in a spirit of compassion to all, regardless of race, caste, religion, or economic condition.</p>
          </div>
          <div className="d-flex">
      <div className="border-end" style={{ height: '190px', borderWidth: '3px', borderColor: 'black' }}></div>
    </div>
          <div className='ms-3 mt-5'>
               <b className='fs-3'>Our Philosophy</b>
               <p className='fs-5 ms-2'>At the heart of our mission lies the belief that exceptional healthcare should be accessible to everyone. We aim to create a warm and supportive 
                healing environment where every patient feels heard, respected, and treated with compassionate care.</p>
          </div>
      </div>

    </div>
  )
}

export default AboutUs