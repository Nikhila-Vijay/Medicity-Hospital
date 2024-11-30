import React from 'react'
import { generalDept } from '../assets/departments'
import { Link } from 'react-router-dom'
import './departments.css'

const chunkArray = (array, chunkSize) => {
    const result = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      result.push(array.slice(i, i + chunkSize));
    }
    return result;
  };

function GeneralDept() {

    const chunkedArray = chunkArray(generalDept, 4);
    

  return (
    <div className='mt-5'>
         <div className='mt-5 ms-5 me-5 mb-5 '>
             <h5 style={{color:'lightskyblue'}} className='ms-5 mt-5'>Compassionate Care for a Healthier Tomorrow.</h5>
             <h1 style={{color:'blue'}} className='ms-5 fw-bold'>GENERAL DEPARTMENTS</h1>
             <p className='ms-5'>We adopt latest technologies and techniques 
                           rapidly and provide personalized care to every patient at every time 
                           that exceeds their expectations.</p>
              {/* <div className='d-flex ms-5'>
                  {specialityDept.map((item,index)=> (
                       <Link key={index} to={`/doctors/${item.speciality}`} style={{textDecoration:'none', color:'black'}}>
                           <img src={item.image} alt="" width={'300px'} height={'300px'} className='ms-4 mt-5 mb-3 border border-dark shadow-lg' style={{ borderWidth: '2px'}}/>
                            <p className='fs-3 ms-4 mb-3 text-center'>{item.speciality}</p>
                       </Link>
                  ))}
                   
                </div>              */}

<div className="ms-5 superDiv mt-2">
      {chunkedArray.map((row, rowIndex) => (
        <div className="d-flex justify-content-center mb-5" key={rowIndex}>
          {row.map((item, index) => (
            <Link className='myLink1'
              key={index}
              to={`/departments/${item.speciality}`}
              style={{ textDecoration: 'none', color: 'black' }}
            >
              <img
                src={item.image}
                alt=""
                width="150px"
                height="150px"
                className="deptImage ms-4 me-4 mt-5 mb-2  rounded-circle"
                style={{ borderWidth: '2px' }}
              />
              <p className="text fs-5 ms-4 mb-2 text-center">{item.speciality}</p>
            </Link>
          ))}
        </div>
      ))}
    </div>
          </div>                 
    </div>
  )
}

export default GeneralDept