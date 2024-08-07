import { lazy, Suspense } from 'react';
import { getFeaturedRecipesInformation } from '../api/getRecipeData';

import { RecipeCardDetailed } from './RecipeCard';
import { RecipeDetailedProps } from '../interfaces';
import { CardListLoader } from './Skeleton';

const CardList = lazy(() =>
  getFeaturedRecipesInformation().then((data) => {
    return {
      default: () => {
        const listItems = data.map((recipe: RecipeDetailedProps) => (
          <li
            key={recipe.id}
            className="flex flex-col rounded-sm overflow-hidden"
          >
            <RecipeCardDetailed
              name={recipe.title}
              score={Math.floor(recipe.spoonacularScore)}
              readyTime={recipe.readyInMinutes}
              serveAmount={recipe.servings}
              imagePath={recipe.image}
            />
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
      <Suspense fallback={<CardListLoader variant="detailed" />}>
        <CardList />
      </Suspense>
    </div>
  );
};
