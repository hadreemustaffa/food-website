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

        return <ul className="flex flex-col gap-4">{listItems}</ul>;
      },
    };
  })
);

export const PopularSection = () => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-4xl font-sans font-bold">Popular</h2>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4">
          <Suspense fallback={<CardListLoader itemCount={4} />}>
            <CardList />
          </Suspense>
        </div>
      </div>
    </div>
  );
};
