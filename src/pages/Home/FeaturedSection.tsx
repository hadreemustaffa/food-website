import { lazy, Suspense } from 'react';
import { getFeaturedSectionRecipesId } from '../../api/getRecipeData';

import { RecipeCardMinimal } from '../../components/RecipeCard';
import { RecipeMinimalProps } from '../../interfaces';
import { CardListLoader } from '../../components/Skeleton';

const CardList = lazy(() =>
  getFeaturedSectionRecipesId().then((data) => {
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

export const FeaturedSection = () => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-4xl font-sans font-bold">Featured</h2>
      <Suspense fallback={<CardListLoader itemCount={4} />}>
        <CardList />
      </Suspense>
    </div>
  );
};
