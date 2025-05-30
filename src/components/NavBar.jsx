import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Import images directly
import logo from '../photo/logo.gif';
import cv from '../photo/cv.gif';
import { Link } from 'react-scroll';
import { downloadCV } from '../service/download';

const NavBar = () => {
    useEffect(() => {
        AOS.init({
            duration: 800, // Animation duration
            once: false // Animation only triggers once
        });
    }, []);

    return (
        <div className=''>
            <nav className="bg-white  dark:bg-gray-900 w-full border-b border-gray-200 dark:border-gray-600">
                <div className="max-w-screen-xl  flex flex-wrap items-center justify-between mx-auto p-4">
                    {/* Logo Animation */}
                    <div 
                        className="flex items-center space-x-3 rtl:space-x-reverse" 
                        data-aos="fade-right"
                        data-aos-delay="200"
                    >
                        <img src={logo} className="size-12" alt="Flowbite Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                            Nanda
                        </span>
                    </div>

                    {/* Buttons Animation */}
                    <div 
                        className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse" 
                        data-aos="fade-left"
                        data-aos-delay="300"
                    >
                        <button type="button"  onClick={downloadCV} className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-2 mb-2">
                            <img src={cv} className="size-6 mr-4" alt="Download CV" />
                            Download CV
                        </button>
                        <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>

                    {/* Navigation Links Animation */}
                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky" data-aos="fade-down" data-aos-delay="400">
                        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <Link to="landing"  smooth={true} 
                    duration={1000}   className="block py-2 px-3 cursor-pointer text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">About me</Link></li>
                            <li><Link to="skills"  smooth={true} 
                    duration={1000}   className="block py-2 px-3 cursor-pointer text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Skills</Link></li>
                            <li><Link to="ui-ux"  smooth={true} 
                    duration={1000}   className="block py-2 px-3 cursor-pointer text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Ui & Ux</Link></li>
                            <li><Link to="frontend"  smooth={true} 
                    duration={1000}   className="block py-2 px-3 cursor-pointer text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Frontend</Link></li>
                            <li><Link to="footer"  smooth={true} 
                    duration={1000} 
                     className="block py-2 px-3 cursor-pointer text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;
