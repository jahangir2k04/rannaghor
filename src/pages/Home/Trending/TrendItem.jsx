import React, { useState } from 'react';
import { Rating } from '@smastrom/react-rating';
import { FaHeart } from 'react-icons/fa';
import { Toaster, toast } from 'react-hot-toast';

const TrendItem = ({ trend }) => {

    const { name, img } = trend;

    const [favorite, setFavorite] = useState(false);

    return (
        <div className='mx-auto'>
            <img className='w-72 h-80 rounded' src={img} alt="" />
            <h3 className='my-3 text-3xl font-semibold '>{name}</h3>

            <div className='flex align-items-center text-lg'>
                <Rating
                    style={{ maxWidth: 110 }}
                    value={Math.round(4.9)}
                    readOnly
                />
                <span className='ms-2 my-auto'> 4.9</span>
                <button
                    onClick={() => {
                        toast.success("Added To Favorite");
                        setFavorite(true);
                    }
                    }
                    disabled={favorite}
                    className='btn hover:bg-white bg-white ms-auto flex gap-2 items-center my-primary border border-gray-900 px-3 rounded'>

                    Favorite  <FaHeart /></button>

            </div>
            <Toaster />
        </div>
    );
};

export default TrendItem;