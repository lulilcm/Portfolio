import React from 'react';
import { Link } from 'react-scroll';


const Header = () => {
  return (
    <header className='py-8'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          <a href='#'>
          <div className="color-gradient-to-r from-pink-500 via-purple-600 to-blue-700">
            <p className="text-4xl font-bold text-white">
              Lourdes <br /> <span className="bg-gradient-to-r from-pink-500 via-purple-600 to-blue-700 text-transparent bg-clip-text ml-[50%]">Moreno</span>
            </p>
          </div>
          </a>
          <Link to='contact' smooth={true}><button className='btn btn-sm'>Trabaja conmigo</button></Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
