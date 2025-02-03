
import Frontend from '../components/Frontend'

import { motion } from "framer-motion"




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
  <div id='frontend' className='flex flex-col gap-[20px]  w-[400px] mx-auto  sm:w-[550px] md:w-[660px] lg:w-[1000px] xl:w-[1220px]'>
    <h2 className='text-2xl font-bold text-center mt-3'>Frontend Projects</h2>
 
    <motion.ul className='max-w-screen-xl  grid sm:grid-cols-2  lg:grid-cols-3 gap-[20px]  justify-center  items-center w-full mx-auto'  initial="hidden" // Start hidden
        whileInView="visible"    viewport={{ once: true }}  variants={list}>
          

  <motion.li  variants={item}>
 
  <Frontend   url="https://i.pinimg.com/originals/7d/08/fa/7d08fa00517daa7cdfb41a606beb3f82.gif" title="Invoice With Api" text="This is Best Project With api it included many function like filter,voucher history and CRUD Process"/>

  </motion.li>
  <motion.li  variants={item}>
  <Frontend   url="https://i.pinimg.com/originals/f1/a9/c5/f1a9c54013622c540120ed5caf02b23e.gif" link='https://premium-business364565.netlify.app/' title="Premium Business Website" text="This is doing my design file project and it's responsive and dark and light theme"/>


  </motion.li>


  <motion.li  variants={item}>
 

  <Frontend link='https://invoice-app-134678.netlify.app/'  time={400} url="https://i.pinimg.com/originals/c0/34/17/c03417ebf4f447610528b07a704e0540.gif" title="Invoice App" text="You can Add new-item with new price by clicking Manage Inventory Button,Chose products and quantity,can Edit quantity in voucher , Print"/>

  </motion.li>
  
  <motion.li  variants={item}>
  <Frontend   url="https://i.pinimg.com/originals/24/ba/2e/24ba2e8167291c3b404c0a9dc86871a7.gif"  title="E-commerce" text="This is using  global state and  you can do adding,check,detail item" link="https://e-commerence225.netlify.app/"/>


  </motion.li>
  <motion.li  variants={item}>

 

  <Frontend   url="https://i.pinimg.com/originals/2e/1d/a9/2e1da94cfe8a4f8ffd23c369e9de9328.gif" link='https://coach145458.netlify.app/' title="Pathway Academy" text="This is team project internship in MMSIT and my did course ,course detail and privacy and policy pages."/>

 

  </motion.li>

  <motion.li  variants={item}>

 

  <Frontend  url="https://i.pinimg.com/originals/da/7b/39/da7b399c3d76c5d9c1c2b3a47aa0e953.gif" title="Moana Movie" text="Team ,Next.js project.I coded characters and product pages" link="https://moana545658.netlify.app/"/>


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
