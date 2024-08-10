import { useEffect, useState } from 'react';
import { getSimilarRecipesId } from '../api/getRecipeData';

import { RecipeMinimalProps } from '../interfaces';
import { RecipeCardMinimal } from './RecipeCard';

const CardList = ({ recipeId }: { recipeId: string }) => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getSimilarRecipesId(recipeId).then((data) => {
      setRecipes(data);
    });
  }, [recipeId]);

  return (
    <ul className="flex flex-col gap-4">
      {recipes.map((recipe: RecipeMinimalProps) => (
        <li key={recipe.id}>
          <RecipeCardMinimal
            id={recipe.id}
            name={recipe.title}
            imagePath={recipe.image}
          />
        </li>
      ))}
    </ul>
  );
};

export default CardList;
