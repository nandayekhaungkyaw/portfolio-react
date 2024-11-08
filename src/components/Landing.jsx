import React, { useEffect } from 'react';
import Typewriter from 'typewriter-effect';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { saveAs } from 'file-saver'

const Landing = () => {


  const downloadCV = () => {

    const pdfUrl = 'https://docs.google.com/document/d/1jwwb9idJavPYzsU4xnIfsZnGMe9PsiewaFdVfSZB45s/export?format=pdf';

    saveAs(pdfUrl, 'CV.pdf'); // The second argument is the default filename
  };
    useEffect(() => {
        AOS.init({
            duration: 1000, // Global animation duration
            once: true // Animation occurs only once when scrolled into view
        });
    }, []);

    return (
        <div className='mt-[60px] max-w-screen-xl mx-auto'>
            <main className='flex flex-row justify-between items-center w-10/12 mx-auto'>
                {/* Animated introduction text */}
                <div 
                    className='flex flex-col gap-[20px] w-1/2' 
                    data-aos="fade-right"
                    data-aos-delay="500"
                >
                    <p 
                        className='py-2.5 px-5 me-2 mb-2 text-sm font-medium w-fit text-white bg-red-600 rounded-full hover:bg-gray-100 hover:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700'
                    >
                        Nanda Ye Khaung Kyaw
                    </p>

                    <div className='text-2xl font-bold' data-aos="zoom-in" data-aos-delay="1000">
                        <Typewriter 
                            options={{
                                strings: ['Hello, I am a Frontend Developer', 'And also a UI & UX designer'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </div>
                    
                    <div 
                        className='flex flex-col justify-end gap-[16px]'
                        data-aos="fade-up"
                        data-aos-delay="1500"
                    >
                        <p>
                            With a keen eye for design and a strong foundation in modern web technologies, I bridge the gap between aesthetics and functionality, ensuring seamless user experiences across all devices.
                        </p>
                        <button 
    type="button" 
    className="text-gray-900 ml-auto w-fit bg-white hover:bg-gray-100 border border-gray-200 rounded-lg text-sm px-5 py-2.5 flex items-center dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
    data-aos="fade-up"
    data-aos-delay="2000"
    onClick={downloadCV}
>
    <img src="./src/photo/cv.gif" className='size-6 mr-4' alt="CV Icon" />
    Download CV
</button>

                    </div>
                </div>

                {/* Animated profile image */}
                <div className='flex flex-row justify-end'>
                    <img 
                        src="./src/photo/profile.jpg"  
                        className='w-1/2' 
                        alt="Profile" 
                        data-aos="fade-left"
                        data-aos-delay="1000"
                    />
                </div>
            </main>
        </div>
    );
}

export default Landing;
