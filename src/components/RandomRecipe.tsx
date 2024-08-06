import { useEffect, useState } from 'react';
import { Button } from './Button';
import { RecipeCardDetailed } from './RecipeCard';
import { getRandomRecipe } from '../api/getRecipeData';
import { RecipeDetailedProps } from '../interfaces';

export const RandomRecipe = () => {
  const [recipe, setRecipe] = useState<RecipeDetailedProps>(
    {} as RecipeDetailedProps
  );

  useEffect(() => {
    getRandomRecipe()
      .then((data) => setRecipe(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row justify-between">
        <h2 className="text-4xl font-sans font-bold">Random</h2>
        <Button variant="secondary" value="Get New Recipe" />
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col md:flex-row rounded-sm overflow-hidden">
          <RecipeCardDetailed
            name={recipe.title}
            score={Math.floor(recipe.spoonacularScore)}
            readyTime={recipe.readyInMinutes}
            serveAmount={recipe.servings}
            imagePath={recipe.image}
          />
        </div>
      </div>
    </div>
  );
};
