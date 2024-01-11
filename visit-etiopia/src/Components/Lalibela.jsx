import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import photosData from '../Photos.json';

function Lalibela() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: true,
    draggable: true,
    autoplay: true,
    autoplaySpeed: 3000, 
  };
  const settings2 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    swipeToSlide: true,
    draggable: true,
    autoplay: true,
    autoplaySpeed: 3000, 
  };

  return (
    <div className="mx-8 mt-7">
      <Slider {...settings} className="responsive-slider hidden lg:block">
        {photosData.slice(20, 45).map((photo) => (
          <div key={photo.id} className="relative border rounded shadow-md mx-2 md:mx-4 lg:mx-6 xl:mx-8">
            <img
              src={photo.imageUrl}
              alt={photo.title}
              className="w-full object-cover rounded-t h-80"
            />
          </div>
        ))}
      </Slider>
      <Slider {...settings2} className="responsive-slider lg:hidden">
        {photosData.slice(20, 45).map((photo) => (
          <div key={photo.id} className="relative border rounded shadow-md mx-2 md:mx-4 lg:mx-6 xl:mx-8">
            <img
              src={photo.imageUrl}
              alt={photo.title}
              className="w-full object-cover rounded-t h-80"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Lalibela;
