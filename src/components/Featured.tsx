import { lazy, Suspense } from 'react';
import { getFeaturedRecipesId } from '../api/getRecipeData';

import { RecipeCardMinimal } from './RecipeCard';
import { RecipeMinimalProps } from '../interfaces';
import { CardListLoader } from './Skeleton';

const CardList = lazy(() =>
  getFeaturedRecipesId().then((data) => {
    return {
      default: () => {
        const listItems = data.map((recipe: RecipeMinimalProps) => (
          <li
            key={recipe.id}
            className="flex flex-col rounded-sm overflow-hidden"
          >
            <RecipeCardMinimal name={recipe.title} imagePath={recipe.image} />
          </li>
        ));

        return <ul className="flex flex-col gap-4">{listItems}</ul>;
      },
    };
  })
);

export const Featured = () => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-4xl font-sans font-bold">Featured</h2>
      <Suspense fallback={<CardListLoader itemCount={4} />}>
        <CardList />
      </Suspense>
    </div>
  );
};
