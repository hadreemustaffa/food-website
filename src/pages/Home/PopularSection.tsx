import { lazy, Suspense } from 'react';
import { getPopularSectionRecipesId } from '../../api/getRecipeData';

import { RecipeCardMinimal } from '../../components/RecipeCard';
import { RecipeMinimalProps } from '../../interfaces';
import { CardListLoader } from '../../components/Skeleton';

const CardList = lazy(() =>
  getPopularSectionRecipesId().then((data) => {
    return {
      default: () => {
        const listItems = data.map((recipe: RecipeMinimalProps) => (
          <li key={recipe.id}>
            <RecipeCardMinimal
              id={recipe.id}
              name={recipe.title}
              imagePath={recipe.image}
            />
          </li>
        ));

        return (
          <ul className='grid grid-cols-auto-fill-225 gap-4'>{listItems}</ul>
        );
      },
    };
  })
);

export const PopularSection = () => {
  return (
    <div className='col-span-1 row-start-4 flex flex-col gap-4 sm:col-span-2 md:col-span-3 lg:col-span-4'>
      <h2 className='font-sans text-4xl font-bold'>Popular</h2>
      <Suspense fallback={<CardListLoader itemCount={4} />}>
        <CardList />
      </Suspense>
    </div>
  );
};
