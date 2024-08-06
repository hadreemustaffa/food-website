import { useEffect, useState } from 'react';
import { RecipeCardMinimal } from './RecipeCard';
import { RecipeMinimalProps } from '../interfaces';
import { getRecommendedRecipesId } from '../api/getRecipeData';

export const Recommended = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // getRecommendedRecipesId().then((data) => setRecipes(data));
    // fetch('./data.json')
    //   .then((response) => response.json())
    //   .then((data) => setRecipes(data));
  }, []);
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-4xl font-sans font-bold">Recommended</h2>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4">
          {recipes.map((recipe: RecipeMinimalProps) => (
            <li
              key={recipe.id}
              className="flex flex-col rounded-sm overflow-hidden"
            >
              <RecipeCardMinimal name={recipe.title} imagePath={recipe.image} />
            </li>
          ))}
        </div>
      </div>
    </div>
  );
};
