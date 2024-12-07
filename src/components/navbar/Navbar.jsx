import React, { useState } from 'react';

const Navbar = () => {
  return (
    <nav className="bg-nav-bg p-4 flex justify-around text-xl"> {/* Custom background */}
      <ul className="flex space-x-6 text-white">
        {/* Home Link */}
        <li>
          <a href="/" > {/* Link color */}
            Home
          </a>
        </li>

        {/* About Link */}
        <li>
          <a href="/about" > {/* Link color */}
            About
          </a>
        </li>

        {/* Services Link */}
        <li>
          <a href="/services" > {/* Link color */}
            Services
          </a>
        </li>

        {/* Contact Link */}
        <li>
          <a href="/contact" > {/* Link color */}
            Contact
          </a>
        </li>

        {/* Dropdown for Courses */}
        <li className="relative group"> {/* Use group for hover state on parent and child */}
          <a href="#" className="flex items-center">
            Courses
            <svg
              className="ml-1 w-4 h-4"
              viewBox="0 0 360 360"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393 c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393 s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
              />
            </svg>
          </a>

          {/* Dropdown menu */}
          <ul className="absolute left-0 mt-2 w-48 bg-black text-white rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {/* Nested List for Courses */}
            <li>
              <a
                href="/course1"
                className="block px-4 py-2 text-sm hover:bg-blue-600"
              >
                Course 1
              </a>
            </li>
            <li>
              <a
                href="/course2"
                className="block px-4 py-2 text-sm hover:bg-blue-600"
              >
                Course 2
              </a>
            </li>
            <li>
              <a
                href="/course3"
                className="block px-4 py-2 text-sm hover:bg-blue-600"
              >
                Course 3
              </a>
            </li>
            <li>
              <a
                href="/course4"
                className="block px-4 py-2 text-sm hover:bg-blue-600"
              >
                Course 4
              </a>
            </li>

            {/* Nested Dropdown (if needed) */}
            <li className="relative group">
              <a href="#" className="block px-4 py-2 text-sm hover:bg-blue-600">
                Advanced Courses
              </a>

              {/* Nested Nested Dropdown */}
              <ul className="absolute left-full top-0 mt-2 w-48 bg-gray-800 text-white rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <li>
                  <a
                    href="/advanced-course1"
                    className="block px-4 py-2 text-sm hover:bg-blue-600"
                  >
                    Advanced Course 1
                  </a>
                </li>
                <li>
                  <a
                    href="/advanced-course2"
                    className="block px-4 py-2 text-sm hover:bg-blue-600"
                  >
                    Advanced Course 2
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
