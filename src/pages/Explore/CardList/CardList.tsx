import { Suspense } from 'react';
import { Await, defer, useLoaderData } from 'react-router-dom';
import { getExploreRecipesId } from '@/api/getRecipeData';
import { RecipeMinimalProps } from '@/interfaces';

import { RecipeCardMinimal } from '@components/RecipeCard/RecipeCard';
import { CardListLoader } from '@components/Skeleton/Skeleton';

interface ExploreCardListProps {
  recipes: RecipeMinimalProps[];
}

export async function loader() {
  const recipes = defer({ recipes: getExploreRecipesId() });
  return recipes;
}

export const CardList = () => {
  const { recipes } = useLoaderData() as ExploreCardListProps;

  return (
    <>
      <Suspense fallback={<CardListLoader itemCount={8} />}>
        <Await resolve={recipes}>
          {(recipes) => {
            return (
              <ul className='grid gap-4 sm:grid-cols-auto-fill-225'>
                {recipes.map((recipe: RecipeMinimalProps) => (
                  <li key={recipe.id}>
                    <RecipeCardMinimal
                      id={recipe.id}
                      title={recipe.title}
                      imagePath={recipe.image}
                    />
                  </li>
                ))}
              </ul>
            );
          }}
        </Await>
      </Suspense>
    </>
  );
};
