import { lazy, Suspense } from 'react';
import { getExploreRecipesId } from '../../api/getRecipeData';

import { RecipeMinimalProps } from '../../interfaces';
import { RecipeCardMinimal } from '../../components/RecipeCard';
import { CardListLoader } from '../../components/Skeleton';
import { Button } from '../../components/Button';

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

        return <ul className="flex flex-col gap-4">{listItems}</ul>;
      },
    };
  })
);

export const Explore = () => {
  return (
    <div className="flex flex-col gap-6 p-4">
      <h1 className="text-4xl font-sans font-bold">Explore</h1>

      <div className="grid grid-cols-1 sm:grid grid-flow-row gap-6">
        <Suspense fallback={<CardListLoader itemCount={8} />}>
          <CardList />
        </Suspense>

        <Button variant="secondary" value="More" className=" border-white" />
      </div>
    </div>
  );
};
