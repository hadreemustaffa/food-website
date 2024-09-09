import { useEffect, useState } from 'react';
import { getRandomRecipe } from '../../api/getRecipeData';

import { Button } from '../../components/Button';
import { RecipeCardDetailed } from '../../components/RecipeCard';
import { RecipeDetailedProps } from '../../interfaces';
import { CardLoader } from '../../components/Skeleton';

const RandomRecipe = () => {
  const [recipe, setRecipe] = useState<RecipeDetailedProps | null>(null);

  const requestRandomRecipe = () => {
    getRandomRecipe()
      .then((data) => {
        setRecipe({
          title: data.title,
          spoonacularScore: Math.floor(data.spoonacularScore),
          readyInMinutes: data.readyInMinutes,
          servings: data.servings,
          image: data.image,
          id: data.id,
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
    <div className='col-span-full flex flex-col justify-between gap-4'>
      <div className='flex flex-row flex-wrap justify-between'>
        <h2 className='font-sans text-4xl font-bold'>Random</h2>
        <Button variant='secondary' value='Get New Recipe' onClick={requestRandomRecipe} />
      </div>

      {recipe ? <RecipeCardDetailed title={recipe.title} score={Math.floor(recipe.spoonacularScore)} readyTime={recipe.readyInMinutes} serveAmount={recipe.servings} imagePath={recipe.image} id={recipe.id} /> : <CardLoader />}
    </div>
  );
};

export default RandomRecipe;
