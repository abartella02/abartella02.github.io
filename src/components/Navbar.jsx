import React, {useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets'
import { motion } from 'framer-motion';

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
}

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  return (
    <nav 
      className={`
        ${styles.paddingX}
        w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div
        className='w-full flex justify-between items-center max-w-7xl mx-auto'
      >
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={()=>{
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img 
            src={logo} 
            alt='logo' 
            className='w-9 h-9 object-contain' 
          />
          <p className='text-white text-[18px] font-bold cursor-pointer flex'>
            Alex Bartella &nbsp;
            <span className="hidden md:block xs:max-sm:block font-light text-[18px]">| Mechatronics Student</span>
          </p>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((Link) => (
            <li 
              key={Link.id} 
              className={`${
                active === Link.title
                  ? "text-white"
                  : "text-secondary"
              }
              hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={()=>setActive(Link.title)}
            >
              <a href={`#${Link.id}`}>{Link.title}</a>
            </li>
          )
          )}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle?close:menu}
            alt="menu"
            className='w-[28px] h-[28px] object-contain cursor-pointer'
            onClick={() => setToggle(!toggle)} />

            <motion.div 
              animate={toggle?"open":"closed"}
              variants={variants}
              className={`
                ${!toggle?'hidden':'flex'}
                p-6 bg-tertiary absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl outline`}
            >
              <ul className='list-none flex jusitfy-end items-start flex-col gap-4'>
                {navLinks.map((Link) => (
                  <li 
                    key={Link.id} 
                    className={`${
                      active === Link.title
                        ? "text-white"
                        : "text-secondary"
                    }
                    font-poppins text-[16px] font-medium cursor-pointer`}
                    onClick={() => {
                      setActive(Link.title);
                      setToggle(!toggle);
                    }}
                  >
                    <a href={`#${Link.id}`}>{Link.title}</a>
                  </li>
                )
                )}
              </ul>

            </motion.div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar