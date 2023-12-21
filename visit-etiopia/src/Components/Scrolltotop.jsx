import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div
      className={`${isVisible ? 'fixed bottom-4 right-4' : 'hidden'} z-50`}
    >
      <button
        onClick={scrollToTop}
        className="bg-gray-500 hover:bg-gray-600 text-white rounded-full p-2 transition-colors duration-300"
      >
        <FaArrowUp />
      </button>
    </div>
  );
}

export default ScrollToTop;