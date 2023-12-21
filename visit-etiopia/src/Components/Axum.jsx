// Lalibela.jsx

import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import photosData from '../Photos.json';

function Axum() {


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    swipeToSlide: true,
    draggable: true,
    autoplay: true,
    autoplaySpeed: 3000, // 5 seconds per slide
  };
  return (
    <>
    {/* <Header /> */}
    <div className="mx-8 mt-7">

      <Slider {...settings}>
        {photosData.slice(64, 69).map((photo) => (
          <div key={photo.id} className="relative -z-1  border rounded shadow-md mx-10 ">
            <img
              src={photo.imageUrl}
              alt={photo.title}
              className="w-full object-cover rounded-t h-80"
            />
          
            
          </div>
        ))}
      </Slider>
    </div>
    </>
  );
}

export default Axum;
