import { Suspense, useEffect } from 'react';
import { Await, defer, useLoaderData } from 'react-router-dom';
import { getSearchRecipes } from '../../api/getRecipeData';

import { RecipeCardMinimal } from '../../components/RecipeCard';
import { RecipeMinimalProps } from '../../interfaces';
import { CardListLoader } from '../../components/Skeleton';

interface SearchProps {
  recipes: RecipeMinimalProps[];
  query: string;
}

export async function loader({ request }: { request: Request }) {
  const url = new URL(request.url);
  const query = url.searchParams.get('q') || '';
  const formatQuery = decodeURIComponent(query.replace(/\+/g, ' '));

  const recipes = getSearchRecipes(formatQuery);
  return defer({ recipes, query });
}

export const Search = () => {
  const { recipes, query } = useLoaderData() as SearchProps;

  useEffect(() => {
    const input = document.getElementById('q') as HTMLInputElement;
    if (input) {
      input.value = query;
    }
  }, [query]);

  return (
    <div className='col-span-full flex flex-col gap-6'>
      <h1 className='font-sans text-3xl font-bold'>Search results:</h1>
      <Suspense fallback={<CardListLoader itemCount={4} />}>
        <Await resolve={recipes}>
          {(recipes) => (
            <ul className='grid gap-4 sm:grid-cols-auto-fill-225'>
              {recipes.map((recipe: RecipeMinimalProps) => (
                <li key={recipe.id}>
                  <RecipeCardMinimal id={recipe.id} title={recipe.title} imagePath={recipe.image} />
                </li>
              ))}
            </ul>
          )}
        </Await>
      </Suspense>
    </div>
  );
};
