import { lazy, Suspense } from 'react';
import { getExploreRecipesId } from '../../api/getRecipeData';

import { RecipeMinimalProps } from '../../interfaces';
import { RecipeCardMinimal } from '../../components/RecipeCard';
import { Loader } from '../../components/Loader';

const LazySearchInput = lazy(() => import('../../components/SearchInput'));

const CardList = lazy(() =>
  getExploreRecipesId().then((data) => {
    return {
      default: () => {
        const listItems = data.map((recipe: RecipeMinimalProps) => (
          <li key={recipe.id}>
            <RecipeCardMinimal
              id={recipe.id}
              title={recipe.title}
              imagePath={recipe.image}
            />
          </li>
        ));

        return (
          <ul className='grid gap-4 sm:grid-cols-auto-fill-225'>{listItems}</ul>
        );
      },
    };
  })
);

export const Explore = () => {
  return (
    <div className='col-span-full flex flex-col gap-6'>
      <h1 className='sr-only'>Explore</h1>

      <Suspense fallback={<Loader />}>
        <LazySearchInput />

        <CardList />
      </Suspense>
    </div>
  );
};
