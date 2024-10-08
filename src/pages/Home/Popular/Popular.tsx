import { getPopularSectionRecipesId } from '@/api/getRecipeData';

import useFetchRecipeList from '@/hooks/useFetchRecipeList';

import { RecipeCardMinimal } from '@components/RecipeCard/RecipeCard';
import { CardListLoader } from '@components/Skeleton/Skeleton';

const PopularSection = () => {
  const recipes = useFetchRecipeList({
    storageKey: 'popular-recipes',
    request: async () => {
      const response = await getPopularSectionRecipesId();
      return response;
    },
  });

  return (
    <div className='col-span-full row-start-4 flex flex-col gap-4'>
      <h2 className='font-sans text-4xl font-bold'>Popular</h2>

      {recipes ? (
        <>
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
        </>
      ) : (
        <CardListLoader itemCount={4} />
      )}
    </div>
  );
};

export default PopularSection;
