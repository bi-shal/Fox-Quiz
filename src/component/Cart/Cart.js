import React from 'react';
import { Link } from 'react-router-dom';

const Cart = ({product,handleAddToCart}) => {
    const{logo,name,total,id}=product

    return (
        <div className='bg-gray-100 p-1 rounded shadow-lg'>
        <img
          className='object-cover w-full h-30 mb-6 rounded shadow-lg md:h-64 xl:h-80'
          src={logo}
          alt=''
        />
        <p className='mb-2 text-xl font-bold leading-none sm:text-2xl'>{name}</p>
        
        <p className='text-gray-700 font-bold'> Question: {total}</p>
        <Link to={`/home/${id}`}>
        <button
         
          type='button'
          className='px-8 block w-full mt-4 py-3 font-semibold rounded-full bg-cyan-200 text-gray-800 hover:bg-cyan-400'
        >
          Let's Start Practice
          
        </button>
        </Link>
      </div>
    );
};

export default Cart;