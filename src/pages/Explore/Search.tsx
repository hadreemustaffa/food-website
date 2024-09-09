import { useLoaderData } from 'react-router-dom';
import { getSearchRecipes } from '../../api/getRecipeData';

import { RecipeCardMinimal } from '../../components/RecipeCard';
import { RecipeMinimalProps } from '../../interfaces';
import { CardListLoader } from '../../components/Skeleton';

export async function loader({ request }: { request: Request }) {
  const url = new URL(request.url);
  const query = url.searchParams.get('q') || '';
  const formatQuery = decodeURIComponent(query.replace(/\+/g, ' '));

  let data = await getSearchRecipes(formatQuery);
  return data;
}

const Search = () => {
  let recipes = useLoaderData() as RecipeMinimalProps[];

  return (
    <div className='col-span-full flex flex-col gap-6'>
      <h1 className='font-sans text-3xl font-bold'>Search results:</h1>

      {recipes ? (
        recipes.length > 0 ? (
          <ul className='grid gap-4 sm:grid-cols-auto-fill-225'>
            {recipes.map((recipe) => (
              <li key={recipe.id}>
                <RecipeCardMinimal id={recipe.id} title={recipe.title} imagePath={recipe.image} />
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

export default Search;
