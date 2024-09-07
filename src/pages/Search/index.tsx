import { lazy } from 'react';
import {
  isRouteErrorResponse,
  Link,
  useLoaderData,
  useRouteError,
} from 'react-router-dom';
import { getSearchRecipes } from '../../api/getRecipeData';

import { Loader } from '../../components/Loader';
import { RecipeCardMinimal } from '../../components/RecipeCard';
import { RecipeMinimalProps } from '../../interfaces';
import { CardListLoader } from '../../components/Skeleton';

const LazySearchInput = lazy(() => import('../../components/SearchInput'));

export async function loader({ request }: { request: Request }) {
  const url = new URL(request.url);
  const query = url.searchParams.get('q') || '';
  const formatQuery = decodeURIComponent(query.replace(/\+/g, ' '));

  let data = await getSearchRecipes(formatQuery);
  return data;
}

export const Component = () => {
  let recipes = useLoaderData() as RecipeMinimalProps[];

  if (!recipes) {
    return <Loader />;
  }

  return (
    <div className='col-span-full flex flex-col gap-6'>
      <LazySearchInput />

      <h1 className='font-sans text-4xl font-bold'>Search results:</h1>

      {recipes ? (
        recipes.length > 0 ? (
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
          <>
            <p>No results found</p>
          </>
        )
      ) : (
        <CardListLoader itemCount={4} />
      )}
    </div>
  );
};

Component.displayName = 'Search';

export function ErrorBoundary() {
  let error = useRouteError();
  console.log(error);

  return isRouteErrorResponse(error) ? (
    <div className='col-span-full m-auto flex w-fit flex-col gap-4 text-left'>
      {error.status} {error.statusText}
      <Link to='/'>Back to Homepage</Link>
    </div>
  ) : (
    <div className='col-span-full m-auto flex w-fit flex-col gap-4 text-left'>
      <h1>Oops! There seem to be an error while fetching the data!</h1>
      <Link to='/'>Back to Homepage</Link>
    </div>
  );
}

ErrorBoundary.displayName = 'SearchErrorBoundary';
