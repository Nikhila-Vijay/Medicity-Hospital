import React from 'react'
import './Gallery.css'
import { newPhotos, photos } from '../assets/departments'

function Gallery() {
  return (
    <div>
         <div className='gallDiv'>
             <p className='textDiv'>Photo Gallery</p>
         </div>

         <p className='textDiv1'>Medical Camp and Celebrations @ Medicity</p>
         <div className="grid-container">
          {photos.map((item,index) => (
               <div className="grid-item" key={index}>
                <img src={item.image} alt="celebrations @ Medicity"/>
               <div class="desc">{item.title}</div>
               </div>
               
          ))}
          </div>

         <p className='textDiv1'>Facilities @ Medicity</p>
         <div className="grid-container">
          {newPhotos.map((item,index) => (
               <div className="grid-item" key={index}>
                 <img src={item.image} alt="Facilities @ Medicity"/>
               <div className="desc">{item.title}</div>
               </div>
               
          ))}
            </div>
        </div>
            

    
  )
}

export default Gallery