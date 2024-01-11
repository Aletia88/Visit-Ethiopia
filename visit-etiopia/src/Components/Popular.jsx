import React, { useState, useEffect } from 'react';
import photosData from '../Mainp.json';

function PopularSlideshow() {
  const [slideshowIndex, setSlideshowIndex] = useState(0);
  const [slideshowPhotos, setSlideshowPhotos] = useState([]);

  useEffect(() => {
    const randomPopular = new Set();
    while (randomPopular.size < 7) {
      const randomIndex = Math.floor(Math.random() * 7);
      randomPopular.add(photosData[randomIndex]);
    }
    setSlideshowPhotos(Array.from(randomPopular));
  }, []);

  useEffect(() => {
    const slideshowInterval = setInterval(() => {
      setSlideshowIndex((prevIndex) => (prevIndex + 1) % slideshowPhotos.length);
    }, 6000); // Change slide every 2 seconds

    return () => clearInterval(slideshowInterval);
  }, [slideshowIndex, slideshowPhotos]);

  return (
    <>
    <div className="slideshow-container lg:h-screen bg-black w-full  ">
      {slideshowPhotos.map((photo, index) => (
        <div key={photo.id} className='absolute '>
        <img
          
          src={photo.imageUrl}
          alt={photo.title}
          className={index === slideshowIndex ? 'lg:slide lg:active w-screen  lg:w-screen lg:h-screen object-fit lg:absolute' : 'slide'}
        />
        <div className='flex flex-col px-4 lg:w-[97%] lg:top-[250px] top-[260px] bg-white bg-opacity-40 lg:ml-4  rounded-md relative hidden lg:block' >
        <h1 className={index === slideshowIndex ? 'dea active text-black font-bold mb-0 pt-4 text-6xl' : 'slide'}>{photo.title}</h1>
        <p className={index === slideshowIndex ? 'mt-0 lg:slide lg:active lg:text-black hidden lg:block text-white w-full self-center justify-end pt-10' : 'slide'}>{photo.description} <br /> <button className='border-yellow-400 border px-2 py-1 rounded-md mt-4 text-white hover:text-yellow-400 hover:bg-black hover:bg-opacity-60 mb-4'>Read More</button></p>
       
        </div>
        </div>
      ))}
    </div>
    <div>
    
    </div>
    </>
  );
}

export default PopularSlideshow;
