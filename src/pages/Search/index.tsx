import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSearchRecipes } from '../../api/getRecipeData';

import { Loader } from '../../components/Loader';
import { RecipeCardMinimal } from '../../components/RecipeCard';
import { RecipeMinimalProps } from '../../interfaces';

export const Search = () => {
  const { query } = useParams() as { query: string };
  const formatQuery = query.replace('-', ' ');
  const [isLoading, setIsLoading] = useState(true);
  const [recipes, setRecipes] = useState<RecipeMinimalProps[]>([
    {
      id: 0,
      title: '',
      image: '',
    },
  ]);

  useEffect(() => {
    getSearchRecipes(`${formatQuery}`)
      .then((data) => {
        setRecipes(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, [formatQuery]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className='flex flex-col gap-6 p-4'>
      <h1 className='font-sans text-4xl font-bold'>
        Search results for{' '}
        <span className='text-tomato-100'>{formatQuery}</span>
      </h1>

      {recipes.length > 0 ? (
        <ul className='grid grid-cols-1 gap-6 sm:grid'>
          {recipes.map((recipe) => (
            <li key={recipe.id}>
              <RecipeCardMinimal
                id={recipe.id}
                name={recipe.title}
                imagePath={recipe.image}
              />
            </li>
          ))}
        </ul>
      ) : (
        <div className='h-screen'>
          <p>No results for {query}</p>
        </div>
      )}
    </div>
  );
};
