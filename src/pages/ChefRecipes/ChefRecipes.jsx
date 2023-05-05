import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ChefBanner from './ChefBanner';
import Recipe from './Recipe';

const ChefRecipes = () => {

    const recipeDetail = useLoaderData();
    const { recipes } = recipeDetail;

    return (
        <div>
            <ChefBanner recipeDetail={recipeDetail}></ChefBanner>

            <div className='my-20 mx-9 md:mx-24 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-20'>
                {
                    recipes.map(recipe =>
                        <Recipe
                            key={recipe.recipe_id}
                            recipe={recipe}
                        ></Recipe>)
                }
            </div>
        </div>
    );
};

export default ChefRecipes;