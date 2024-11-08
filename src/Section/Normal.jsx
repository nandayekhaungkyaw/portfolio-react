import React from 'react'
import { LuBadgeCheck } from "react-icons/lu";


const Normal = () => {
  return (
    <div className=' max-w-screen-xl mx-auto w-full '>
        <main className='  flex flex-row gap-11 justify-between  w-full'>
           
        <div className="bg-white shadow-lg rounded-lg p-6 w-72">
      <div className="flex justify-center mb-2">
        <img src=" ./src/photo/SoftSkill.gif" className='size-12' alt="" />
      </div>
      <h2 className="text-center text-lg font-semibold">Soft Skills</h2>
      <ul className="mt-2 space-y-4">
        <li className="flex items-center">
          <span className="mr-2"> <LuBadgeCheck />
</span> Stress Management
        </li>
        <li className="flex items-center">
          <span className="mr-2"> <LuBadgeCheck />
</span> Problem Solving
        </li>
        <li className="flex items-center">
          <span className="mr-2"> <LuBadgeCheck />
</span> Willingness To Learn
        </li>
        <li className="flex items-center">
          <span className="mr-2"> <LuBadgeCheck />
</span> Creativity
        </li>
      </ul>
    </div>

    <div className="bg-white shadow-lg rounded-lg p-6 w-72">
      <div className="flex justify-center mb-2">
        <img src=" ./src/photo/Strength.gif" className='size-12' alt="" />
      </div>
      <h2 className="text-center text-lg font-semibold">Strength</h2>
      <ul className="mt-2 space-y-4">
        <li className="flex items-center">
          <span className="mr-2"> <LuBadgeCheck />
</span>Responsibility
        </li>
        <li className="flex items-center">
          <span className="mr-2"> <LuBadgeCheck />
</span> Work Done is priority
        </li>
        <li className="flex items-center">
          <span className="mr-2"> <LuBadgeCheck />
</span> 
Research skill
        </li>
        <li className="flex items-center">
          <span className="mr-2"> <LuBadgeCheck />
</span> Perseverance
        </li>
      </ul>
    </div>
    <div className="bg-white shadow-lg rounded-lg p-6 w-72">
      <div className="flex justify-center mb-2">
        <img src=" ./src/photo/Education.gif" className='size-12' alt="" />
      </div>
      <h2 className="text-center text-lg font-semibold">Education</h2>
      <ul className="mt-2 space-y-4">
        <li className="flex items-center">
          <span className="mr-2"> <LuBadgeCheck />
</span> Second year Mechanical Student at 2020 .(TU-KSE)
        </li>
        <li className="flex items-center">
          <span className="mr-2"> <LuBadgeCheck />
</span> English-Intermediate level
        </li>
        <li className="flex items-center">
          <span className="mr-2"> <LuBadgeCheck />
</span> Still learning Backend
        </li>
       
      </ul>
    </div>
    <div className="bg-white shadow-lg rounded-lg p-6 w-72">
      <div className="flex justify-center mb-2">
        <img src=" ./src/photo/Weakness.gif" className='size-12' alt="" />
      </div>
      <h2 className="text-center text-lg font-semibold">Weakness</h2>
      <ul className="mt-2 space-y-4">
        <li className="flex items-center">
          <span className="mr-2"> <LuBadgeCheck />
</span>Focus on Efficiency Over Detail
        </li>
        <li className="flex items-center">
          <span className="mr-2"> <LuBadgeCheck />
</span> Preference for Challenging Tasks Over Repetitive Work
        </li>
        <li className="flex items-center">
          <span className="mr-2"> <LuBadgeCheck />
</span>Being junior ui/ux designer and frontend developer
        </li>
   
      </ul>
    </div>
   
   

        </main>
      
    </div>
  )
}

export default Normal
