import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getSimilarRecipesId } from '../../api/getRecipeData';

export const SimilarRecipe = ({ recipeId }: { recipeId: string }) => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getSimilarRecipesId(recipeId).then((data) => {
      setRecipes(data);
    });
  }, [recipeId]);

  return (
    <ol className='flex list-decimal flex-col gap-4 pl-4'>
      {recipes.map((recipe: { id: number; title: string }) => (
        <li key={recipe.id}>
          <Link to={`/recipe/${recipe.id}`} className='hover:underline'>
            {recipe.title}
          </Link>
        </li>
      ))}
    </ol>
  );
};
