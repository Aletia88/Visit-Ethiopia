import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from "react-router-dom";


function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isFixed = window.pageYOffset > 0;
      setIsHeaderFixed(isFixed);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`back ${isHeaderFixed ? 'fixed' : ''} w-full z-10`}>
      <nav className="container flex items-center justify-between  px-8">
        <div className="flex items-center">
          {/* <h1 className="text-xl font-bold text-gray-1000 cursor-pointer">Ethiography</h1> */}
          <img src="../../public/pictures/logo.png" alt="" className='w-50 h-20 rounded' />
        </div>
        <div className="hidden lg:flex lg:items-center">
          <ul className="flex space-x-6 text-white text-lg">
            <li>
              <Link to="../Home">
              
              <a href="#" className="nav-link">Home</a>
              </Link>
            </li>
            <li>
              <Link to="../places">
              <a href="#places" className="nav-link">Places To Visit</a>
              </Link>
              
            </li>
            <li>
              <Link to="../Things">
              
              <a  className="nav-link">Things To Do</a>
              </Link>
            </li>
              <Link to='../About'>

            <li>
              <a href="#footer" className="nav-link">About</a>
            </li>
              </Link>
            <li>
              <a href="#footer" className="nav-link">Contact</a>
            </li>
            <li className='hover:pr-[2px]'>
              <Link to="../login">
               <button className='bg-white align-middle text-black px-3 ml-5 rounded font-semibold py-1 '>Logout</button> 
                </Link>
            </li>
          </ul>
        </div>
        <div className="lg:hidden">
          <button
            className="text-gray-800 hover:text-gray-200 focus:outline-none"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        {isMobileMenuOpen && (
          <div className="lg:hidden">
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="nav-link">Home</a>
              </li>
              <li>
                <a href="#" className="nav-link">Places To Visit</a>
              </li>
              <li>
                <a href="#" className="nav-link">Things To Do</a>
              </li>
              <li>
                <a href="#" className="nav-link">About</a>
              </li>
              <li>
                <a href="#" className="nav-link">Contact</a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;
