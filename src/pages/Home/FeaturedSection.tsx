import { getFeaturedSectionRecipesId } from '../../api/getRecipeData';

import { RecipeCardMinimal } from '../../components/RecipeCard';
import { RecipeMinimalProps } from '../../interfaces';
import { CardListLoader } from '../../components/Skeleton';
import useFetchRecipeList from '../../hooks/useFetchRecipeList';

const FeaturedSection = () => {
  const recipes = useFetchRecipeList({
    storageKey: 'featured-recipes',
    request: async () => {
      const response = await getFeaturedSectionRecipesId();
      return response;
    },
  });

  return (
    <div className='col-span-full row-start-3 flex flex-col gap-4'>
      <h2 className='font-sans text-4xl font-bold'>Featured</h2>
      {recipes ? (
        <>
          <ul className='grid gap-4 sm:grid-cols-auto-fill-225'>
            {recipes.map((recipe: RecipeMinimalProps) => (
              <li key={recipe.id}>
                <RecipeCardMinimal id={recipe.id} title={recipe.title} imagePath={recipe.image} />
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

export default FeaturedSection;
