import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';


const Hero = () => {
  return (
    <section className='relative w-full h-[101vh] min-[800px]:h-[110vh] mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]'/>
          <div className='w-1 sm:h-80 h-40 violet-gradient'/>
        </div>

        <div className='overlay z-[2] w-full h-auto' style={{backgroundColor: "rgba(0, 0, 100, 0)"}}>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className={"text-[#915eff]"}>Alex</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I'm a <b>Mechatronics Engineering</b> Student who is passionate about <b>web development</b> and <b>control systems</b> <span className='text-[14px]'>(and cars)</span>
          </p>
        </div>
      </div>
      <div className = 'absolute top-[42%] left-[75%] w-[100px] h-auto flex' >      
        <motion.div
          key="spin_me"
          exit={{opacity:1}}
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={
            {
              duration:2.5,
              delay: 2.5
            }
          }
        >
          <img src="src\assets\spin_me.png" alt="Give it a try!"/>
        </motion.div>
      </div>
      <div className='overlay absolute inset-0 z-[1] w-auto h-[60vh]' style={{backgroundColor: "rgba(100, 0, 0, 0)"}}/>
      <ComputersCanvas />
      

      <div className='absolute bottom-20 md:right-20 right-[46%] w-auto flex justify-center items-right '>
        <a href="#about">
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-end p-2'>
            <motion.div 
              animate={{
                y:[0, -24, 0]
              }}
              transition={{
                duration: 2, 
                repeat: Infinity,
                repeatType: 'loop',
                repeatDelay: 1,
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero