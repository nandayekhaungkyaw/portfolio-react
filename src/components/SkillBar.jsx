import React, { useEffect, useState, useRef } from 'react';
import AOS from 'aos';

const SkillBar = ({ skill, progress, index }) => {
    const [currentProgress, setCurrentProgress] = useState(0);
    const skillBarRef = useRef(null);

    useEffect(() => {
        AOS.init();

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Trigger the progress animation when in view without additional delay
                    setCurrentProgress(progress);

                    // Stop observing after triggering animation
                    observer.unobserve(entry.target);
                }
            });
        });

        if (skillBarRef.current) {
            observer.observe(skillBarRef.current);
        }

        return () => {
            if (skillBarRef.current) {
                observer.unobserve(skillBarRef.current);
            }
        };
    }, [progress]);

    return (
        <div 
            className="mb-4" 
            ref={skillBarRef} 
            data-aos="zoom-in-down"  
            data-aos-duration="1000" 
         
        >
            <div className="flex justify-between mb-1">
                <span className="font-medium text-gray-700">{skill}</span>
                <span className="text-gray-500">{progress}%</span>
            </div>
            <div className="relative w-full h-2 bg-gray-200 rounded">
                <div
                    className="absolute h-full bg-cyan-500 rounded transition-all duration-3000 ease-in-out"
                    style={{ width: `${currentProgress}%` }}
                ></div>
            </div>
        </div>
    );
};

export default SkillBar;
