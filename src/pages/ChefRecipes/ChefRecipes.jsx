import React from 'react';
import { FaThumbsUp } from 'react-icons/fa';
import { useLoaderData, useParams } from 'react-router-dom';

const ChefRecipes = () => {

    const recipeDetail = useLoaderData();
    const { chef_name, experience, chef_pic, likes, recipes_num, recipes, description } = recipeDetail;

    return (
        <div className=''>
            <div className='my-12 grid grid-cols-1 md:grid-cols-2 justify-center mx-auto w-10/12 md:w-2/3 gap-5 md:gap-20'>
                <div><img className='h-96 w-80 md:ms-auto' src={chef_pic} alt="" /></div>
                <div>
                    <h3 className='mb-1 text-2xl font-semibold'>{chef_name}</h3>
                    <p className='my-primary font-semibold text-lg'>{experience} Years of experience</p>
                    <p className='text-base my-2'><span className=' font-semibold'>Best Recipes : </span>
                        {
                            recipes.map(recipe => recipe.recipe_name).join(' ,  ')
                        }
                    </p>
                    <p className='font-semibold'>Number of Recipes : {recipes_num}+</p>
                    <div className='my-2 flex gap-2 items-center text-base font-semibold'>
                        <span>Likes : {likes}</span> <FaThumbsUp />
                    </div>
                    <p><span className='font-semibold text-base'>Description : </span>
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ChefRecipes;