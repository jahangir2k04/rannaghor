import React from 'react';
import { FaThumbsUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Chef = ({ chef }) => {

    const { chef_name, experience, chef_pic, likes, recipes } = chef;

    return (
        <div className='ps-12'>
            <div>
                <img className='h-64 w-72' src={chef_pic} alt="" />
            </div>
            <h3 className='my-1 text-2xl font-semibold'>{chef_name}</h3>
            <p className='my-primary font-semibold text-lg'>{experience} Years of experience</p>
            <p className='text-base w-72 my-2'><span className='font-semibold my-2'>Best Recipes: </span> 
                {
                    recipes.map(recipe => recipe.recipe_name).join(' ,  ')
                }
            </p>
            <div className='flex gap-2 items-center text-base font-semibold'><span>Likes : {likes}</span> <FaThumbsUp />
            </div>
            <Link>
                <button className='mt-5 w-72 py-2 my-bg-primary my-hover text-xl text-white font-semibold rounded-lg'>View Recipes</button>
            </Link>
        </div>
    );
};

export default Chef;