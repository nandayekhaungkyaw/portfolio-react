


import React from 'react';
import SkillBar from './SkillBar';
import { div } from 'framer-motion/client';

const App = () => {
    const skills = [
        { name: 'Html', progress: 85 },
        { name: 'JavaScript', progress: 75 },
        { name: 'React', progress: 85 },
        { name: 'CSS', progress: 65 },
        { name: 'Tailwind CSS', progress: 80 },
        { name: 'Vite', progress: 70 },
        { name: 'Figma', progress: 80 }, 
        { name: 'AI-Generating', progress: 87 }, // Additional skills for testing
        { name: 'User-Research', progress: 75 }, // Additional skills for testing// Additional skills for testing
    ];

    return (
        <div  className=" flex justify-center">
                 <div className=' max-w-screen-xl w-full p-5'>
           <div className='flex flex-row justify-center gap-3 items-center mb-3'>
            <img src="./src/photo/HardSkill.gif" className='size-10' alt="" />
           <h1 className="text-2xl font-bold ">Hard Skills</h1>
           </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full">
                {skills.map((skill,index) => (
                    <SkillBar key={skill.name} skill={skill.name} progress={skill.progress}  index={index}/>
                ))}
            </div>
        </div>
        </div>
    );
};

export default App;

