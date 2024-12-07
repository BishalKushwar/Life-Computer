import React from 'react';
import logo from '../../assets/images/logo1.png'; // Make sure the logo path is correct
import './Header.css';

const Header = () => {
  return (
    <header className="bg-primary-dark-blue text-white shadow-md py-4 w-full">
      <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
        {/* Logo Section */}
        <div className="flex-shrink-0 mb-4 sm:mb-0">
          <a href="">
            <img
              src={logo}
              alt="Life Computer Logo"
              className="h-25 sm:h-24 lg:h-32 w-auto" // Adjust height based on screen size
            />
          </a>
        </div>

        {/* Button Section */}
        <div>
          <button className=" text-white font-bold py-2 px-6 rounded-md transition-all sm:w-auto w-full sm:py-3">
            Apply Now
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
