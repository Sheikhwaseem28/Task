import { useState } from 'react';
import logo1 from "../Logo1.png";
import "./Navbar.css";

const Navbar = () => {
  // State to manage the mobile menu open/closed state
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the state of the mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="Navbar relative">
      <nav className="flex flex-col md:flex-row justify-between items-center bg-slate-600 bg-opacity-60 h-12 px-4 md:px-8">
        {/* Logo */}
        <img className="w-24 md:w-32 h-10 lg:w-48 mr-44" src={logo1} alt="logo" />
        
        {/* Desktop Navigation Links */}
        <div className="hidden md:flex flex-grow items-center gap-4 md:gap-6 font-medium text-white">
          <a href="#" className="hover:text-gray-200">PRODUCTS</a>
          <a href="#" className="hover:text-gray-200">ENTERPRISES</a>
          <a href="#" className="hover:text-gray-200">FREE TRIALS</a>
          <a href="#" className="hover:text-gray-200">PRICING</a>
          <a href="#" className="hover:text-gray-200">SUPPORT & LEARNING</a>
          <a href="#" className="hover:text-gray-200">ABOUT US</a>
          <a href="#" className="hover:text-gray-200">YOUR ACCOUNT</a>
          <a href="#" className="hover:text-gray-200">TELERIK PLATFORM</a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex items-center z-30">
          <button onClick={toggleMenu}>
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        {/* Slider Menu for mobile */}
        <div className={`fixed top-0 left-0 h-full w-64 bg-slate-800 text-white transform ${isOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out z-40`}>
          {/* Close button for the slider menu */}
          <button className="absolute top-4 right-4 text-white" onClick={toggleMenu}>
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
          {/* Navigation links in the slider menu */}
          <nav className="flex flex-col items-center p-8 space-y-4 text-lg">
            <a href="#" className="hover:text-gray-400">PRODUCTS</a>
            <a href="#" className="hover:text-gray-400">ENTERPRISES</a>
            <a href="#" className="hover:text-gray-400">FREE TRIALS</a>
            <a href="#" className="hover:text-gray-400">PRICING</a>
            <a href="#" className="hover:text-gray-400">SUPPORT & LEARNING</a>
            <a href="#" className="hover:text-gray-400">ABOUT US</a>
            <a href="#" className="hover:text-gray-400">YOUR ACCOUNT</a>
            <a href="#" className="hover:text-gray-400">TELERIK PLATFORM</a>
          </nav>
        </div>

        {/* Overlay to darken the background when the slider menu is open */}
        {isOpen && <div className="fixed inset-0 bg-black opacity-50 z-30" onClick={toggleMenu}></div>}
      </nav>

      {/* Main heading and description */}
      <div className="flex flex-col items-center w-full max-w-screen-xl px-4 md:px-6 lg:px-8 text-white mx-auto mt-16">
  {/* Main heading */}
  <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center mb-4 sm:mb-6 md:mb-8 lg:mb-10">
    Developers Experiences
  </p>
  {/* Description */}
  <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-center w-full sm:w-11/12 md:w-4/5 lg:w-3/4">
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ad at officiis.
  </p>
</div>

    </div>
  );
};

export default Navbar;
