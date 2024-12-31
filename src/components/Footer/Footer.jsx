import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import logo1 from '../../assets/images/logo1.png';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-b from-red-600  to-blue-600 text-white pt-12 pb-6">
            <div className="container mx-auto px-4">
                {/* Footer Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                    {/* Company Info */}
                    <div className="space-y-4">
                        <img src={logo1} alt="Life Computer" className="h-12 w-auto mb-4" />
                        <p className="text-gray-300">
                            Empowering individuals with cutting-edge technology education and professional development solutions.
                        </p>
                        <div className="flex space-x-4">
                            <a href="https://facebook.com" className="hover:text-blue-400 transition-colors">
                                <FaFacebookF className="w-5 h-5" />
                            </a>
                            <a href="https://twitter.com" className="hover:text-blue-400 transition-colors">
                                <FaTwitter className="w-5 h-5" />
                            </a>
                            <a href="https://linkedin.com" className="hover:text-blue-400 transition-colors">
                                <FaLinkedinIn className="w-5 h-5" />
                            </a>
                            <a href="https://instagram.com" className="hover:text-blue-400 transition-colors">
                                <FaInstagram className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="/about" className="text-gray-300 hover:text-blue-400 transition-colors">About Us</a>
                            </li>
                            <li>
                                <a href="/services" className="text-gray-300 hover:text-blue-400 transition-colors">Services</a>
                            </li>
                            <li>
                                <a href="/courses" className="text-gray-300 hover:text-blue-400 transition-colors">Courses</a>
                            </li>
                            <li>
                                <a href="/contact" className="text-gray-300 hover:text-blue-400 transition-colors">Contact</a>
                            </li>
                        </ul>
                    </div>

                    {/* Courses */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Our Courses</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="/course1" className="text-gray-300 hover:text-blue-400 transition-colors">Course 1</a>
                            </li>
                            <li>
                                <a href="/course2" className="text-gray-300 hover:text-blue-400 transition-colors">Course 2</a>
                            </li>
                            <li>
                                <a href="/course3" className="text-gray-300 hover:text-blue-400 transition-colors">Course 3</a>
                            </li>
                            <li>
                                <a href="/course4" className="text-gray-300 hover:text-blue-400 transition-colors">Course 4</a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start space-x-3">
                                <FaMapMarkerAlt className="w-5 h-5 text-blue-400 mt-1" />
                                <span className="text-gray-300">123 Education Street, Tech City, ST 12345</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <FaPhoneAlt className="w-5 h-5 text-blue-400" />
                                <a href="tel:+1234567890" className="text-gray-300 hover:text-blue-400 transition-colors">
                                    (123) 456-7890
                                </a>
                            </li>
                            <li className="flex items-center space-x-3">
                                <FaEnvelope className="w-5 h-5 text-blue-400" />
                                <a href="mailto:info@lifecomputer.com" className="text-gray-300 hover:text-blue-400 transition-colors">
                                    info@lifecomputer.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-700 pt-6">
                    {/* Bottom Footer */}
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-gray-400 text-sm">
                            &copy; {new Date().getFullYear()} Life Computer. All rights reserved.
                        </p>
                        <div className="flex space-x-6">
                            <a href="/privacy" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                                Privacy Policy
                            </a>
                            <a href="/terms" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                                Terms of Service
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;