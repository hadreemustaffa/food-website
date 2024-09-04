import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getSearchRecipes } from '../../api/getRecipeData';

import { Loader } from '../../components/Loader';
import { RecipeCardMinimal } from '../../components/RecipeCard';
import { RecipeMinimalProps } from '../../interfaces';
import { SearchInput } from '../../components/SearchInput';

export const Search = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';

  const formatQuery = decodeURIComponent(query.replace(/\+/g, ' '));
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
    <div className='col-span-full flex flex-col gap-6 p-4'>
      <SearchInput />

      <h1 className='font-sans text-4xl font-bold'>
        Search results for{' '}
        <span className='text-tomato-100'>{formatQuery}</span>
      </h1>

      {recipes.length > 0 ? (
        <ul className='grid gap-4 sm:grid-cols-auto-fill-225'>
          {recipes.map((recipe) => (
            <li key={recipe.id}>
              <RecipeCardMinimal
                id={recipe.id}
                title={recipe.title}
                imagePath={recipe.image}
              />
            </li>
          ))}
        </ul>
      ) : (
        <div className='h-screen'>
          <p>No results for {formatQuery}</p>
        </div>
      )}
    </div>
  );
};
