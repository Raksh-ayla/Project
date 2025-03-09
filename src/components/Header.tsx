import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaBars } from "react-icons/fa";
import { useState } from "react";

const Header: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="w-full bg-orange-400 py-4 px-6 shadow-md">
            <div className="container mx-auto flex items-center justify-between flex-wrap">
                <div className="flex items-center space-x-4 md:space-x-20">
                    <img src="/Link.png" alt="Logo" className="h-8 md:h-12 w-auto" />
                    <nav className={`md:flex ${isMobileMenuOpen ? 'block' : 'hidden'} w-full md:w-auto`}>
                        <ul className="flex flex-col md:flex-row space-x-0 text-sm md:text-lg md:space-x-7">
                            <li><Link to="/" className="text-black hover:text-gray-700 transition font-medium py-2 md:py-0">Home</Link></li>
                            <li><Link to="/courses" className="text-black hover:text-gray-700 transition font-medium py-2 md:py-0">Courses</Link></li>
                            <li><Link to="/aboutus" className="text-black hover:text-gray-700 transition font-medium py-2 md:py-0">About Us</Link></li>
                            <li><Link to="/pages" className="text-black hover:text-gray-700 transition font-medium py-2 md:py-0">Pages</Link></li>
                            <li><Link to="/blog" className="text-black hover:text-gray-700 transition font-medium py-2 md:py-0">Blog</Link></li>
                            <li><Link to="/contact" className="text-black hover:text-gray-700 transition font-medium py-2 md:py-0">Contact</Link></li>
                        </ul>
                    </nav>
                </div>
                <div className="flex items-center">
                    <div className="hidden md:block">
                        <Link to="/login" className="bg-green-500 text-white px-4 py-2 rounded-full flex items-center space-x-2 hover:bg-green-600 transition">
                            <span>Login/Register</span>
                            <FaArrowRight />
                        </Link>
                    </div>
                    <button className="md:hidden text-black focus:outline-none" onClick={toggleMobileMenu}>
                        <FaBars className="h-6 w-6" />
                    </button>
                </div>
                <div className={`mt-4 md:mt-0 md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} w-full`}>
                    <Link to="/login" className="bg-green-500 text-white px-4 py-2 rounded-full flex items-center space-x-2 hover:bg-green-600 transition w-full justify-center">
                        <span>Login/Register</span>
                        <FaArrowRight />
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;