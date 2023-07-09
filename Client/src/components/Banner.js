import React from 'react';
import Image from '../assets/avatar.png';
import { FaGithub, FaLinkedin, FaDribbble } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { Link } from 'react-scroll';

const Banner = () => {
  return (
    <section className='min-h-[85vh] lg:min-h[78vh] flex items-center' id='home'>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
          <div className='flex-1 text-center font-secondary lg:text-left'>
            <motion.h1 variants={fadeIn('up', 0.4)} initial='hidden' whileInView={'show'} viewport={{once: false, amount: 0.7}} className='text-[55px] font-bold leading-[0.8] lg:text-[110px]'>LOURDES <span>MORENO</span></motion.h1>
            <motion.div variants={fadeIn('up', 0.3)} initial='hidden' whileInView={'show'} viewport={{once: false, amount: 0.7}} className='mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]'>
              <span className='text-white mr-4'>Soy una</span>
              <TypeAnimation 
              sequence={[
                // 'Desarrolladora Backend',
                // 300,
                // 'Desarrolladora Frontend',
                // 300,
                'Desarrolladora Web Full Stack',
                300,
              ]}
               speed={50}
               className='text-accent'
               wrapper='span'
               repeat={Infinity}
               
               />
            </motion.div>
              <motion.p variants={fadeIn('up', 0.3)} initial='hidden' whileInView={'show'} viewport={{once: false, amount: 0.5}} className='mb-8 max-w-lg mx-auto lg:mx-0'>
              ¡Estoy emocionada de compartir mis proyectos y colaborar en nuevas oportunidades! Si estás buscando una desarrolladora web con pasión por la excelencia, no dudes en contactarme.
              </motion.p>
              <motion.div variants={fadeIn('up', 0.6)} initial='hidden' whileInView={'show'} viewport={{once: false, amount: 0.7}} className='flex max-w-max items-center mb-12 mx-auto lg:mx-0'>
                 <Link to='contact' smooth={true}><button className='btn btn-lg'>Ponte en contacto</button></Link>
                <a href='#' className='text-gradient btn-link ml-4'>Mi Portafolio</a>
              </motion.div>
              <motion.div variants={fadeIn('up', 0.7)} initial='hidden' whileInView={'show'} viewport={{once: false, amount: 0.7}} className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
                <a href='https://github.com/lulilcm'><FaGithub /></a>
                <a href='https://www.linkedin.com/in/lourdes-moreno-901669213'><FaLinkedin /></a>
              </motion.div>
          </div>
          <motion.div variants={fadeIn('down', 0.5)} initial='hidden' whileInView={'show'} viewport={{once: false, amount: 0.7}} className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]'>
            <img src={Image} alt='' />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
