import React from 'react';

const Header = () => {
    return (
        <div className='mt-4 relative'>
            <div className='mt-5 md:mt-14 ms-2 md:ms-24  absolute inset-0'>
                <h3 className='text-white text-3xl md:text-8xl font-bold'>World's Largest !</h3>
                <h3 className='my-2 text-white text-3xl md:text-8xl font-bold'>Chefs House</h3>
                <div className='flex items-end text-white md:text-green-500 text-4xl md:text-9xl font-bold'>
                    <span>RannaGh</span>
                    <img className='w-8 md:w-28 h-8 md:h-28' src="/logo.png" alt="" />
                    <span>r</span>
                </div>
                <p className='mt-4 md:mt-8 md:w-1/2 text-white md:text-2xl '>One of the most popular and  trusted chefs house by people all over the world</p>
            </div>
            <img className='w-full' src="/banner-logo.jpg" alt="" />
        </div>
    );
};

export default Header;