import { useEffect, useState } from 'react';
import { getSimilarRecipesId } from '../api/getRecipeData';
import { Link } from 'react-router-dom';

const CardList = ({ recipeId }: { recipeId: string }) => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getSimilarRecipesId(recipeId).then((data) => {
      setRecipes(data);
    });
  }, [recipeId]);

  return (
    <ol className="flex flex-col gap-4 pl-4 list-decimal">
      {recipes.map((recipe: { id: number; title: string }) => (
        <li key={recipe.id}>
          <Link
            to={`/recipe/${recipe.id}`}
            className=" hover:text-tomato-100 transition-colors"
          >
            {recipe.title}
          </Link>
        </li>
      ))}
    </ol>
  );
};

export default CardList;
