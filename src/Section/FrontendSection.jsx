import React from 'react'
import Frontend from '../components/Frontend'
import { div } from 'framer-motion/client'
import { motion } from "framer-motion"
import { viewport } from 'three/webgpu'



const FrontendSection = () => {
  const list = {
    
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { staggerChildren: 0.4 },
      },
   
  };
  
  const item = {
    
    
    hidden: { opacity: 0, scale: 1.3, y: -50},
    visible: { opacity: 1,  scale: 1, 
      y: 0, transition: {
      duration: 0.8,       // Set the duration of the animation
      ease: "easeInOut",   // Use a smooth easing function
    }, },
  };

return (
  <div id='frontend' className='flex flex-col gap-[20px]'>
    <h2 className='text-2xl font-bold text-center mt-3'>Frontend Projects</h2>
 
<motion.ul className='max-w-screen-xl grid  grid-cols-3 gap-[20px]  justify-between items-center w-full mx-auto'  initial="hidden" // Start hidden
        whileInView="visible"    viewport={{ once: true }}  variants={list}>
          
  <motion.li  variants={item}>
  <Frontend   url="https://plus.unsplash.com/premium_photo-1679784204551-013181bb687f?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" link="https://invoice-label.netlify.app/" title="Invoice With Api" text="This is Best Project With api it included many function like filter,voucher history and CRUD Process"/>

  </motion.li>
  <motion.li  variants={item}>
  <Frontend   url="https://images.unsplash.com/photo-1520881363902-a0ff4e722963?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" link='https://premium-business364565.netlify.app/' title="Premium Business Website" text="This is doing my design file project and it's responsive and dark and light theme"/>

  </motion.li>

  <motion.li  variants={item}>
  <Frontend  time={400} url="https://plus.unsplash.com/premium_photo-1665203622351-b5b44cdea4ef?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" title="Invoice App" text="You can Add new-item with new price by clicking Manage Inventory Button,Chose products and quantity,can Edit quantity in voucher , Print"/>

  </motion.li>
  <motion.li  variants={item}>
  <Frontend   url="https://plus.unsplash.com/premium_photo-1681488262364-8aeb1b6aac56?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"  title="E-commerce" text="This is using  global state and  you can do adding,check,detail item" link="https://e-commerence225.netlify.app/"/>
 

  </motion.li>
  <motion.li  variants={item}>
  <Frontend   url="https://images.unsplash.com/photo-1553770976-fa0ae6c5fe81?q=80&w=1992&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" link='https://coach145458.netlify.app/' title="Coach Website" text="This is doing my design file project"/>
 

  </motion.li>

  <motion.li  variants={item}>
  <Frontend  url="https://media.giphy.com/media/3ohhwfAa9rbXaZe86c/giphy.gif?cid=790b7611m59ch22hfelc3xkc4bmpb068mq1zlgfp7kgfe5zc&ep=v1_gifs_trending&rid=giphy.gif&ct=g" title="Comming Soon" text="Next.js project" link="#"/>

  </motion.li>
</motion.ul>

  </div>
 
)
  // return (
  
  //  <div className='flex flex-col gap-[24px] font-bold'> 
  //  <p className=' text-center text-2xl'>
  //   Frontend Projects


  //  </p>
 
  //     <div className='max-w-screen-xl grid  grid-cols-3 gap-[20px]]  justify-between items-center w-full mx-auto'>
  //     <Frontend time={500}  url="https://plus.unsplash.com/premium_photo-1679784204551-013181bb687f?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" link="https://invoice-label.netlify.app/" title="Invoice With Api" text="This is Best Project With api it included many function like filter,voucher history and CRUD Process"/>
  //     <Frontend  time={300} url="https://images.unsplash.com/photo-1520881363902-a0ff4e722963?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" link='https://premium-business364565.netlify.app/' title="Premium Business Website" text="This is doing my design file project and it's responsive and dark and light theme"/>
  //     <Frontend  time={400} url="https://plus.unsplash.com/premium_photo-1665203622351-b5b44cdea4ef?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" title="Invoice App" text="You can Add new-item with new price by clicking Manage Inventory Button,Chose products and quantity,can Edit quantity in voucher , Print"/>
     

  //   </div>
  //   <div className='max-w-screen-xl flex flex-row  justify-between items-center w-full mx-auto'>
  //   <Frontend time={150}  url="https://plus.unsplash.com/premium_photo-1681488262364-8aeb1b6aac56?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"  title="E-commerce" text="This is using  global state and  you can do adding,check,detail item" link="https://e-commerence225.netlify.app/"/>
  //     <Frontend  time={1500} url="https://images.unsplash.com/photo-1553770976-fa0ae6c5fe81?q=80&w=1992&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" link='https://coach145458.netlify.app/' title="Coach Website" text="This is doing my design file project"/>
   
  //     <Frontend  time={1500} url="https://media.giphy.com/media/3ohhwfAa9rbXaZe86c/giphy.gif?cid=790b7611m59ch22hfelc3xkc4bmpb068mq1zlgfp7kgfe5zc&ep=v1_gifs_trending&rid=giphy.gif&ct=g" title="Comming Soon" text="Next.js project" link="#"/>

  //   </div>
  //  </div>
   
  // )
}

export default FrontendSection
