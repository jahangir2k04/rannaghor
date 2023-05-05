import React, { useEffect, useState } from 'react';
import Chef from '../Chef/Chef';

const Chefs = () => {
    const [chefs, setChefs] = useState([]);

    useEffect( () => {
        fetch('https://b7a10-chef-recipe-hunter-server-side-jahangir2k04-jahangir2k04.vercel.app/')
        .then(res => res.json())
        .then(data => setChefs(data))
        .catch(error => console.log(error))
    }, []);

    return (
        <div className='mt-24 mx-2 md:mx-24 grid grid-cols-1 md:grid-cols-3 gap-10'>
            {
                chefs.map(chef => <Chef
                key={chef.chef_id}
                chef={chef}
                ></Chef>)
            }
        </div>
    );
};

export default Chefs;