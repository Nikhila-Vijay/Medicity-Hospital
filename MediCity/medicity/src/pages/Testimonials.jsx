import React from 'react'
import { testimonials } from '../assets/departments'
import './Testimonials.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Testimonials() {
       
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
          ],
      };

  return (

    <div>

        <div className='divA'>
            <p>Testimonials...!</p>
        </div>
        <div className='mainDiv'>
        <Slider {...settings}>
           { testimonials.map((item)=> (
              <div className='testDiv'>
                   <p className='nameDiv'>{item.name}</p>
                   <p>{item.review}</p>
              </div>
           ))}
        </Slider>
        </div>
    </div>
  );
}

export default Testimonials;