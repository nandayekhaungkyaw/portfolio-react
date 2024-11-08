import React from 'react'

const CardUi = ({src,title,para,responsive,link}) => {
  return (
    <div>
       <div className="max-w-sm mx-auto bg-white border flex flex-col  border-gray-200 rounded-lg shadow-md">
      {/* Image Section */}
      <div className="p-4">
        <video
          className="rounded-lg h-[180px] m-auto"
          src={src}
          alt="Creative Web Studio"
          autoPlay
          loop
          muted
          
          
        />
      </div>
      {/* Content Section */}
      <div className="px-6 pb-6">
        <div className='flex flex-row justify-between items-center'>
        <h3 className="mb-2 text-[20px] font-semibold text-gray-800">{title}</h3>
       {responsive &&  <p class="py-1.5 px-3 me-2 mb-2 text-[8px] font-medium w-fit text-white focus:outline-none bg-red-600 rounded-full border border-gray-200 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600">Responsive </p>}

        </div>
      
        <p className="mb-4 text-[14px] text-gray-600">
         {para}
        </p>
        {/* Button */}
        <a    href={link} target="_blank"   className="px-2 py-1 text-[12px] ml-auto   text-red-600 border border-red-600 rounded hover:bg-red-600 hover:text-white transition">
          View Detail
        </a >
      </div>
    </div>
    </div>
  )
}

export default CardUi
