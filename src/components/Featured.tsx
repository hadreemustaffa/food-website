import { useEffect, useState } from 'react';
import { getFeaturedRecipesInformation } from '../api/getRecipeData';
import { RecipeCardDetailed } from './RecipeCard';
import { RecipeDetailedProps } from '../interfaces';

export const Featured = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // getFeaturedRecipesInformation().then((data) => setRecipes(data));
    // fetch('./data.json')
    //   .then((response) => response.json())
    //   .then((data) => setRecipes(data));
  }, []);

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-4xl font-sans font-bold">Featured</h2>
      <div className="flex flex-col gap-4">
        {recipes.map((recipe: RecipeDetailedProps) => (
          <li
            key={recipe.id}
            className="flex flex-col rounded-sm overflow-hidden"
          >
            <RecipeCardDetailed
              name={recipe.title}
              score={Math.floor(recipe.spoonacularScore)}
              readyTime={recipe.readyInMinutes}
              serveAmount={recipe.servings}
              calorieAmount={Math.floor(recipe.nutrition.nutrients[0].amount)}
            />
          </li>
        ))}
      </div>
    </div>
  );
};
