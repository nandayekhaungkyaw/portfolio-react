import  { useEffect } from 'react';
import Typewriter from 'typewriter-effect';
import AOS from 'aos';
import 'aos/dist/aos.css';

import cv from '../photo/cv.gif';
import profile from '../photo/profile.jpg';
import { downloadCV } from '../service/download';

const Landing = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true
        });
    }, []);

    return (
        <div className="mt-[60px] max-w-screen-xl mx-auto px-6">
            <main className="flex flex-col-reverse lg:flex-row justify-between items-center w-full mx-auto">
                {/* Animated introduction text */}
                <div 
                    className="flex flex-col gap-6 lg:w-1/2 text-center lg:text-left" 
                    data-aos="fade-right"
                    data-aos-delay="500"
                >
                    <p className="py-2.5 px-5 text-sm font-medium w-fit mx-auto lg:mx-0 text-white bg-red-600 rounded-full">
                        Nanda Ye Khaung Kyaw
                    </p>

                    <div className="text-xl sm:text-2xl font-bold" data-aos="zoom-in" data-aos-delay="1000">
                        <Typewriter 
                            options={{
                                strings: ['Hello, I am a Frontend Developer', 'And also a UI & UX designer'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </div>
                    
                    <div 
                        className="flex flex-col justify-end gap-4"
                        data-aos="fade-up"
                        data-aos-delay="1500"
                    >
                        <p className="text-sm sm:text-base px-4 lg:px-0">
                            With a keen eye for design and a strong foundation in modern web technologies, I bridge the gap between aesthetics and functionality, ensuring seamless user experiences across all devices.
                        </p>
                        <button 
                            type="button" 
                            className="text-gray-900 mx-auto lg:ml-0 w-fit bg-white hover:bg-gray-100 border border-gray-200 rounded-lg text-sm px-5 py-2.5 flex items-center dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
                            data-aos="fade-up"
                            data-aos-delay="2000"
                            onClick={downloadCV}
                        >
                            <img src={cv} className="size-6 mr-4" alt="CV Icon" />
                            Download CV
                        </button>
                    </div>
                </div>

                {/* Animated profile image */}
                <div className="flex justify-center lg:justify-end mb-6 lg:mb-0 w-full lg:w-1/2" data-aos="fade-left" data-aos-delay="1000">
                    <img src={profile} className="w-2/3 sm:w-1/2 lg:w-full max-w-xs sm:max-w-sm lg:max-w-md" alt="Profile" />
                </div>
            </main>
        </div>
    );
};

export default Landing;
