import React from 'react';
import LazyLoad from 'react-lazyload';

const Header = () => {
    return (

        <div className='mt-4 relative'>
            <div className='mt-5 md:mt-32 ms-2 md:ms-24  absolute inset-0'>

                <h3 className='text-white text-2xl md:text-7xl font-bold'>Welcome to</h3>
                <div className='ms-4 md:my-2 flex items-center text-white md:text-green-500 text-3xl md:text-8xl font-bold'>
                    <span>RannaGh</span>
                    <img className='w-7 h-7 md:w-20 md:h-20' src="/logo.png" alt="" />
                    <span>r</span>
                </div>
                <h3 className='ms-8 text-white text-xl md:text-6xl font-bold'>World's Largest !</h3>
                <h3 className='ms-12 md:my-2 text-white text-xl md:text-6xl font-bold'>Chefs House</h3>
                <p className='mt-4 md:mt-8 md:w-1/2 text-white md:text-2xl '>One of the most popular and  trusted chefs house by people all over the world.</p>
            </div>
            
                <img className='w-full' src="/banner-logo.jpg" alt="" />
            

        </div >
    );
};

export default Header;