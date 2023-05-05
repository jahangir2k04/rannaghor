import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'
import React, { useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

const Recipe = ({ recipe }) => {
    const [fold, setFold] = useState(true);
    const [favorite, setFavorite] = useState(false);

    const { recipe_id, recipe_name, recipe_img, ingredients, cooking_method, rating } = recipe;

    return (
        <div className='card bg-base-100 shadow-xl relative'>
            <figure>
                <img className='h-52 w-full' src={recipe_img} alt="" />
            </figure>
            <div className='p-5'>
                <h3 className='text-2xl font-semibold'>{recipe_name}</h3>
                <p>
                    <span className='font-semibold'>Ingredients : </span>
                    <span className='grid grid-cols-2'>
                        {
                            ingredients.map(item => <li className='list-decimal' key={item}>{item}</li>)
                        }
                    </span>
                </p>
                <div className='mb-24'>
                    {fold ? (
                        <>
                            <span className='font-semibold'>Cooking Method : </span>
                            <p className='text-gray-500'>{cooking_method.substring(0, 100)}...
                                <span onClick={() => setFold(false)} className='cursor-pointer text-blue-600'>Read More</span></p>
                        </>
                    ) : (
                        <>
                            <span className='font-semibold'>Cooking Method : </span>
                            <p className='text-gray-900'>{cooking_method}.
                                <span onClick={() => setFold(true)} className='cursor-pointer text-blue-600'>Read Less</span></p>
                        </>
                    )

                    }
                </div>
                <div className='absolute bottom-0 w-full left-0'>
                    <div className='mx-5 mb-2 flex align-items-center text-lg'>
                        <Rating
                            style={{ maxWidth: 110 }}
                            value={Math.round(rating || 0)}
                            readOnly
                        />
                        <span className='ms-2 my-auto'> {rating}</span>
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
                    <button className='mt-2 w-full py-2 my-bg-primary my-hover text-xl text-white font-semibold rounded-lg'>Buy Now</button>
                </div>
            </div>
            <Toaster />
        </div>
    );
};

export default Recipe;