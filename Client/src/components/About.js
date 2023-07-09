import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { Link } from 'react-scroll';


const services = [
  {
    name: 'Frontend',
    description: 'Experiencia con bibliotecas como React, Redux y frameworks como Next y Tailwind.',

  },
  {
    name: 'Backend',
    description: 'Experiencia con bases de datos relacionales como SQL, bibliotecas como Express y ORM como Sequelize y Prisma.'
  }
];

const About = () => {
  const [ ref, inView ] = useInView({
    threshold: 0.5,
  });
  return (
     <section className='section' id='about' ref={ref}>
       <div className='container mx-auto'>
          <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
             <motion.div 
             variants={fadeIn('right', 0.3)}
             initial='hidden'
             whileInView={'show'}
             viewport={{once:false, amount:0.3}}
             className='flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top'></motion.div> 
            <motion.div 
            variants={fadeIn('left', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once:false, amount:0.3}}
            className='flex-1'>
              <h2 className='h2 text-accent'>Acerca de mí.</h2>
              <h3 className='h3 mb-4'>Soy una Desarrolladora web Full Stack, calificada en JavaScript</h3>
              <p className='mb-6'>
              Soy un desarrolladora web apasionada con experiencia en la creación de soluciones digitales innovadoras. Mi enfoque principal es crear experiencias web interesantes y funcionales, combinando un diseño creativo con un fuerte desarrollo. 
              Estoy constantemente aprendiendo e investigando nuevas tecnologías para mantenerme al día con la industria en constante evolución. Mi objetivo es brindar soluciones web de alta calidad y superar las expectativas de mis clientes.
              </p>
              {/* <div className='flex gap-x-6 lg:gap-x-10 mb-12 mt-2 justify-center'>
               <div>
                  <div className='text-[40px] font-tertiary   text-gradient mb-2 ml-7'>
                    {
                      inView?
                      <CountUp start={0} end={3} duration={0.1} /> : null}
                  </div>
                  <div className='font-primary text-sm tracking-[2px]'>Proyectos <br/>completados</div>
                </div>
            </div> */}
                      <motion.div
           variants={fadeIn('left', 0.5)}
           initial='hidden'
           whileInView={'show'}
           viewport={{once:false, amount:0.3}}
           className='flex-1'>
            <div>
              {services.map((service, index) => {
                const { name, description } = service;
                return ( 
                  <div className='border-b border-white/20 h-[146px] mb-[38px] flex' key={index}>
                    <div className='max-w-[476px]'>
                      <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>{name}</h4>
                      <p className='font-secondary leading-tight '>{description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </motion.div>
            <div className='flex gap-x-8 items-center'>
            <Link to='contact' smooth={true}><button className='btn btn-lg'>Ponte en contacto</button></Link>
              <a href='#' className='text-gradient btn-link'>Mi Portafolio</a>
            </div>
              </motion.div>

          </div>
       </div>
     </section>
  );
};

export default About;
