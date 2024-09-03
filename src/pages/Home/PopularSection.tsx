import { getPopularSectionRecipesId } from '../../api/getRecipeData';

import { RecipeCardMinimal } from '../../components/RecipeCard';
import { CardListLoader } from '../../components/Skeleton';
import useFetchRecipeList from '../../hooks/useFetchRecipeList';

export const PopularSection = () => {
  const recipes = useFetchRecipeList({
    storageKey: 'popular-recipes',
    request: async () => {
      const response = await getPopularSectionRecipesId();
      return response;
    },
  });

  return (
    <div className='col-span-1 row-start-4 flex flex-col gap-4 sm:col-span-2 md:col-span-3 lg:col-span-4'>
      <h2 className='font-sans text-4xl font-bold'>Popular</h2>

      {recipes ? (
        <>
          <ul className='grid grid-cols-auto-fill-225 gap-4'>
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
        </>
      ) : (
        <CardListLoader itemCount={4} />
      )}
    </div>
  );
};
