import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { Link } from "react-router-dom";
import ScrollToTop from "./Scrolltotop";

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

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const style = { color: "white", fontSize: "1.9em" };

  return (
    <header className={`back ${isHeaderFixed ? "fixed" : ""} w-full z-10`}>
      <nav className="container flex items-center justify-between gap-2  lg:px-8">
        <div className="flex items-center">
          {/* <h1 className="text-xl font-bold text-gray-1000 cursor-pointer">Ethiography</h1> */}
          <img
            src="../../public/pictures/logo.png"
            alt=""
            className="w-50 h-20 rounded hidden md:block"
          />
        </div>
        <div className="hidden md:flex md:items-center">
          <ul className="flex lg:space-x-6 space-x-3 text-white text-md">
            <li className="">
              <Link to="../Home">
                <a href="#" className="nav-link pr-2">
                  Home
                </a>
              </Link>
            </li>
            <li>
              <Link to="../places">
                <a href="#places" className="w-full pr-2">
                  Places To Visit
                </a>
              </Link>
            </li>
            <li>
              <Link to="../Things">
                <a className="nav-link pr-2">Things To Do</a>
              </Link>
            </li>
            <Link to="../About">
              <li>
                <a href="#footer" className="nav-link pr-2">
                  About
                </a>
              </li>
            </Link>
            <li>
              <a href="#footer" className="nav-link pr-2">
                Contact
              </a>
            </li>
            <li className="hover:pr-[2px]">
              <Link to="../login">
                <button className="bg-white align-middle text-black px-3 ml-5 rounded font-semibold py-1 ">
                  Logout
                </button>
              </Link>
            </li>
          </ul>
        </div>
        <div className="md:hidden">
          <button
            className="text-gray-800 hover:text-gray-200 focus:outline-none"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? (
              <FaTimes style={style} />
            ) : (
              <FaBars style={style} />
            )}
          </button>
        </div>
        {isMobileMenuOpen && (
          <div className="md:hidden w-full pb-5 h-1/3">
            <ul className="mt-4 w-full space-y-6 text-2xl text-white items-center text-start flex flex-col">
            <li className="">
              <Link to="../Home">
                <a href="#" className="nav-link">
                  Home
                </a>
              </Link>
            </li>
            <li>
              <Link to="../places">
                <a href="#places" className="w-full ">
                  Places To Visit
                </a>
              </Link>
            </li>
            <li>
              <Link to="../Things">
                <a className="nav-link">Things To Do</a>
              </Link>
            </li>
            <Link to="../About">
              <li>
                <a href="#footer" className="nav-link">
                  About
                </a>
              </li>
            </Link>
            <li>
              <a href="#footer" className="nav-link">
                Contact
              </a>
            </li>
            <li className="hover:pr-[2px]">
              <Link to="../login">
                <button className="bg-white align-middle text-black px-2 rounded font-semibold py-1 ">
                  Logout
                </button>
              </Link>
            </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;
