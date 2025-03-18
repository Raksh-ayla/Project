import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaBars, FaTimes } from "react-icons/fa";

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="w-full bg-slate-300 py-4 px-6 shadow-md">
            <div className="container mx-auto flex items-center justify-between">
                <div className="flex items-center space-x-6">
                    <img src="/Link.png" alt="Logo" className="h-12 w-auto" />
                    <nav className="hidden md:flex">
                        <ul className="flex space-x-7 text-lg">
                            {["Home", "Courses", "About Us", "Pages", "Blog", "Contact"].map((item, index) => (
                                <li key={index}>
                                    <Link
                                        to={`/${item.toLowerCase().replace(/\s+/g, "")}`}
                                        className="text-black hover:text-gray-700 transition font-medium"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
                <div className="hidden md:flex">
                    <Link
                        to="/login"
                        className="bg-green-500 text-white px-4 py-2 rounded-full flex items-center space-x-2 hover:bg-green-600 transition"
                    >
                        <span>Login/Register</span>
                        <FaArrowRight />
                    </Link>
                </div>

                <button
                    className="md:hidden text-gray-700 text-2xl"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle Menu"
                >
                    {isMenuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            <nav
                className={`fixed top-0 left-0 w-full h-full bg-white shadow-lg transform ${isMenuOpen ? "translate-x-0" : "-translate-x-full"
                    } transition-transform duration-300 ease-in-out z-50`}
            >
                <div className="flex justify-end p-5">
                    <button
                        className="text-gray-700 text-3xl"
                        onClick={() => setIsMenuOpen(false)}
                        aria-label="Close Menu"
                    >
                        <FaTimes />
                    </button>
                </div>
                <ul className="flex flex-col items-center space-y-6 text-lg mt-10">
                    {["Home", "Courses", "About Us", "Pages", "Blog", "Contact"].map((item, index) => (
                        <li key={index}>
                            <Link
                                to={`/${item.toLowerCase().replace(/\s+/g, "")}`}
                                className="text-black hover:text-gray-700 transition font-medium text-xl"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item}
                            </Link>
                        </li>
                    ))}

                    <li>
                        <Link
                            to="/login"
                            className="bg-green-500 text-white px-5 py-2 rounded-full flex items-center space-x-2 hover:bg-green-600 transition text-xl"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <span>Login/Register</span>
                            <FaArrowRight />
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
