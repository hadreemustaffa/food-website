import { lazy, Suspense } from 'react';
import { getExploreRecipesId } from '../../api/getRecipeData';

import { RecipeMinimalProps } from '../../interfaces';
import { RecipeCardMinimal } from '../../components/RecipeCard';
import { CardListLoader } from '../../components/Skeleton';
import { Button } from '../../components/Button';
import { SearchInput } from '../../components/SearchInput';

const CardList = lazy(() =>
  getExploreRecipesId().then((data) => {
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

export const Explore = () => {
  return (
    <div className='col-span-full flex flex-col gap-6'>
      <h1 className='sr-only'>Explore</h1>

      <SearchInput />

      <Suspense fallback={<CardListLoader itemCount={8} />}>
        <CardList />
      </Suspense>

      <Button variant='secondary' value='More' className='border-white' />
    </div>
  );
};
