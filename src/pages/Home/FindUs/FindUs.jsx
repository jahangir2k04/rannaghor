import React from 'react';

const FindUs = () => {
    return (
        <div className='my-14 mx-2 md:mx-24 '>
            <h3 className='mx-4 md:mx-auto text-3xl my-primary font-semibold mb-8 md:mb-4'>Find us in these cities and many more !</h3>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
                <div className='mx-auto relative transition duration-300 transform hover:-translate-y-2'>
                    <h3 className='absolute mt-8 ms-6 text-4xl font-semibold text-white'>New York</h3>
                    <img className='w-72 h-80 rounded' src="/public/new-york.jpg" alt="" />
                </div>
                <div className='mx-auto relative transition duration-300 transform hover:-translate-y-2'>
                    <h3 className='absolute mt-8 ms-6 text-4xl font-semibold text-white'>Atlanta</h3>
                    <img className='w-72 h-80 rounded' src="/public/atlanta.jpg" alt="" />
                </div>
                <div className='mx-auto relative transition duration-300 transform hover:-translate-y-2'>
                    <h3 className='absolute mt-8 ms-6 text-4xl font-semibold text-white'>Boston</h3>
                    <img className='w-72 h-80 rounded' src="/public/boston.jpg" alt="" />
                </div>
                <div className='mx-auto relative transition duration-300 transform hover:-translate-y-2'>
                    <h3 className='absolute mt-8 ms-6 text-4xl font-semibold text-white'>Chicago</h3>
                    <img className='w-72 h-80 rounded' src="/public/chicago.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default FindUs;