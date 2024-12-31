import React, { useState, useEffect, useRef } from 'react';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import logo1 from '../../assets/images/logo1.png';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDesktopDropdownOpen, setIsDesktopDropdownOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const mobileMenuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
        setIsMobileDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setMobileDropdownOpen(false);
  };

  const toggleDesktopDropdown = (e) => {
    e.preventDefault();
    setIsDesktopDropdownOpen(!isDesktopDropdownOpen);
  };

  const toggleMobileDropdown = (e) => {
    e.preventDefault();
    setIsMobileDropdownOpen(!isMobileDropdownOpen);
  };

  return (
    <nav className="bg-nav-bg p-4 relative">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex-shrink-0">
          <a href="/" className="flex items-center">
            <img src={logo1} alt="Life Computer" className="h-12 w-auto" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="text-white lg:hidden"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? (
            <FaTimes className="w-6 h-6" />
          ) : (
            <FaBars className="w-6 h-6" />
          )}
        </button>

        {/* Desktop Links */}
        <ul className="hidden lg:flex space-x-6 text-white">
          <li>
            <a href="/" className="hover:text-blue-300">Home</a>
          </li>
          <li>
            <a href="/about" className="hover:text-blue-300">About</a>
          </li>
          <li>
            <a href="/services" className="hover:text-blue-300">Services</a>
          </li>
          <li>
            <a href="/contact" className="hover:text-blue-300">Contact</a>
          </li>

          {/* Dropdown for Courses */}
          <li className="relative">
            <button
              className="flex items-center hover:text-blue-300"
              onClick={toggleDesktopDropdown}
            >
              Courses
              <FaChevronDown className={`ml-1 w-4 h-4 transition-transform duration-200 ${
                isDesktopDropdownOpen ? 'rotate-180' : ''
              }`} />
            </button>

            {/* Dropdown menu */}
            <ul className={`absolute left-0 mt-2 w-48 bg-nav-bg text-white rounded-lg shadow-lg ${
              isDesktopDropdownOpen ? 'block' : 'hidden'
            }`}>
              <li>
                <a href="/course1" className="block px-4 py-2 text-sm hover:bg-blue-600">
                  Course 1
                </a>
              </li>
              <li>
                <a href="/course2" className="block px-4 py-2 text-sm hover:bg-blue-600">
                  Course 2
                </a>
              </li>
              <li>
                <a href="/course3" className="block px-4 py-2 text-sm hover:bg-blue-600">
                  Course 3
                </a>
              </li>
              <li>
                <a href="/course4" className="block px-4 py-2 text-sm hover:bg-blue-600">
                  Course 4
                </a>
              </li>
            </ul>
          </li>
        </ul>

        {/* Mobile Menu */}
        <div
          ref={mobileMenuRef}
          className={`lg:hidden fixed inset-0 bg-nav-bg z-50 transform transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <button
            onClick={toggleMobileMenu}
            className="absolute top-4 right-4 text-white p-2"
          >
            <FaTimes className="w-6 h-6" />
          </button>

          <div className="flex flex-col h-full pt-16 px-4">
            <ul className="space-y-4 text-white">
              <li>
                <a href="/" className="block hover:text-blue-300">Home</a>
              </li>
              <li>
                <a href="/about" className="block hover:text-blue-300">About</a>
              </li>
              <li>
                <a href="/services" className="block hover:text-blue-300">Services</a>
              </li>
              <li>
                <a href="/contact" className="block hover:text-blue-300">Contact</a>
              </li>
              <li>
                <button
                  onClick={toggleMobileDropdown}
                  className="flex items-center w-full hover:text-blue-300"
                >
                  <span>Courses</span>
                  <FaChevronDown className={`ml-2 w-4 h-4 transition-transform duration-200 ${
                    isMobileDropdownOpen ? 'rotate-180' : ''
                  }`} />
                </button>
                <ul className={`mt-2 pl-4 space-y-2 ${isMobileDropdownOpen ? 'block' : 'hidden'}`}>
                  <li>
                    <a href="/course1" className="block text-sm hover:text-blue-300">
                      Course 1
                    </a>
                  </li>
                  <li>
                    <a href="/course2" className="block text-sm hover:text-blue-300">
                      Course 2
                    </a>
                  </li>
                  <li>
                    <a href="/course3" className="block text-sm hover:text-blue-300">
                      Course 3
                    </a>
                  </li>
                  <li>
                    <a href="/course4" className="block text-sm hover:text-blue-300">
                      Course 4
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
