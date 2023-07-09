import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import Swal from 'sweetalert2'

const Contact = () => {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [mensaje, setMensaje] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (nombre.trim() === '' || nombre > 30) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Por favor , ingresa un nombre!',
      });
    } else if (!(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/).test(correo) || correo === '') {
      Swal.fire({
        icon: 'warning',
        title: 'Oops...',
        text: 'Por favor, ingresa un correo válido!',
      });
    } else if (mensaje === '') {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Por favor, ingresa un mensaje!',
      });
    } else     if (!nombre || !correo || !mensaje) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Por favor llena todos los campos!',
      });
    } 
    else {
      try {
        const response = await fetch('https://formspree.io/f/mqkvkboa', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: nombre,
            email: correo,
            message: mensaje,
          }),
        });

        if (response.ok) {
          Swal.fire({
            icon: 'success',
            title: '¡Correo enviado!',
            text: 'Gracias por contactarme. Pronto recibirás una respuesta.',
          });
          setNombre('');
          setCorreo('');
          setMensaje('');
        } else {
          throw new Error('Error al enviar el correo.');
        }
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Hubo un error al enviar el correo. Por favor, inténtalo nuevamente.',
        });
      }
    }
    };


  return (
    <section className='py-16 lg:section' id='contact'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          <motion.div
            variants={fadeIn('right', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once:false, amount:0.3}}
           className='flex-1 flex justify-start items-center'>
            <div>
              <h4 className='text-xl uppercase text-accent font-medium mb-2 tracking-wide lg:mb-7'>Ponte en contacto</h4>
              <h2 className='text-[45px] lg:text-[90px] leadin-none mb-12 '>Trabajemos</h2> <br/><span className='text-[45px] lg:text-[90px] leadin-none mb-12'>juntos</span>
            </div>
          </motion.div>
          <motion.form 
            encType="text/plain"
            variants={fadeIn('left', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once:false, amount:0.3}}
            onSubmit={handleSubmit}
           className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start'>
            <input className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all' name='nombre' value={nombre} onChange={(e) => setNombre(e.target.value)} type='text' placeholder='Tu nombre' />
            <input className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all' name='correo' value={correo} onChange={(e) => setCorreo(e.target.value)} type='text' placeholder='Tu correo' />
            <textarea className='bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12' name='mensaje' value={mensaje} onChange={(e) => setMensaje(e.target.value)} placeholder='Tu mensaje'></textarea>
            <input type='submit' value='Enviar' className='btn btn-lg cursor-pointer' />
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
