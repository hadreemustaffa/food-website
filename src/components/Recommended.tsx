import { lazy, Suspense } from 'react';
import { getRecommendedRecipesId } from '../api/getRecipeData';

import { RecipeCardMinimal } from './RecipeCard';
import { RecipeMinimalProps } from '../interfaces';
import { CardListLoader } from './Skeleton';

const CardList = lazy(() =>
  getRecommendedRecipesId().then((data) => {
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

export const Recommended = () => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-4xl font-sans font-bold">Recommended</h2>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4">
          <Suspense fallback={<CardListLoader variant="detailed" />}>
            <CardList />
          </Suspense>
        </div>
      </div>
    </div>
  );
};
