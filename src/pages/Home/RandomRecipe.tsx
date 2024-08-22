import { useEffect, useState } from 'react';
import { getRandomRecipe } from '../../api/getRecipeData';

import { Button } from '../../components/Button';
import { RecipeCardDetailed } from '../../components/RecipeCard';
import { RecipeDetailedProps } from '../../interfaces';
import { getLocalData } from '../../api/getLocalRecipeData';

export const RandomRecipe = () => {
  const [recipe, setRecipe] = useState<RecipeDetailedProps | null>(null);

  const requestRandomRecipe = () => {
    // getRandomRecipe()
    getLocalData()
      .then((data) => {
        setRecipe({
          title: data.random[0].title,
          spoonacularScore: Math.floor(data.random[0].spoonacularScore),
          readyInMinutes: data.random[0].readyInMinutes,
          servings: data.random[0].servings,
          image: data.random[0].image,
          id: data.random[0].id,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    requestRandomRecipe();
  }, []);

  return (
    <div className='col-span-1 flex flex-col justify-between gap-4 sm:col-span-full lg:col-span-4'>
      <div className='flex flex-row justify-between'>
        <h2 className='font-sans text-4xl font-bold'>Random</h2>
        <Button
          variant='secondary'
          value='Get New Recipe'
          onClick={requestRandomRecipe}
        />
      </div>

      {recipe ? (
        <RecipeCardDetailed
          name={recipe.title}
          score={Math.floor(recipe.spoonacularScore)}
          readyTime={recipe.readyInMinutes}
          serveAmount={recipe.servings}
          imagePath={recipe.image}
          id={recipe.id}
        />
      ) : null}
    </div>
  );
};
