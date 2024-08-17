import { useEffect, useState } from 'react';
import { getRandomRecipe } from '../../api/getRecipeData';

import { Button } from '../../components/Button';
import { RecipeCardDetailed } from '../../components/RecipeCard';
import { RecipeDetailedProps } from '../../interfaces';

export const RandomRecipe = () => {
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
    <div className="flex flex-col gap-4">
      <div className="flex flex-row justify-between">
        <h2 className="text-4xl font-sans font-bold">Random</h2>
        <Button
          variant="secondary"
          value="Get New Recipe"
          onClick={requestRandomRecipe}
        />
      </div>
      <div className="flex flex-col gap-4">
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
    </div>
  );
};
