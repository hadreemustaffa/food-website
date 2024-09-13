import { Suspense, useEffect, useState } from 'react';
import {
  Await,
  defer,
  NavigationType,
  useLoaderData,
  useNavigationType,
} from 'react-router-dom';
import { getExploreRecipesId } from '@/api/getRecipeData';
import { RecipeMinimalProps } from '@/interfaces';

import { RecipeCardMinimal } from '@components/RecipeCard/RecipeCard';
import { CardListLoader } from '@components/Skeleton/Skeleton';
import localforage from 'localforage';

interface ExploreCardListProps {
  recipes: RecipeMinimalProps[];
}

export async function loader() {
  const recipes = defer({ recipes: getExploreRecipesId() });
  return recipes;
}

export const CardList = () => {
  const { recipes } = useLoaderData() as ExploreCardListProps;
  const [storedRecipes, setStoredRecipes] = useState<
    RecipeMinimalProps[] | null
  >(null);
  const navigationType = useNavigationType();

  useEffect(() => {
    const fetchSavedRecipes = async () => {
      const savedRecipes =
        await localforage.getItem<RecipeMinimalProps[]>('explore-recipes');
      if (savedRecipes) {
        setStoredRecipes(savedRecipes);
      }
    };

    fetchSavedRecipes();
  }, []);

  useEffect(() => {
    const saveRecipes = async () => {
      if (navigationType === NavigationType.Pop) {
        // If user navigates back, clear the stored recipes
        await localforage.removeItem('explore-recipes');
        setStoredRecipes(null);
      } else if (!storedRecipes) {
        // If no stored recipes and not backward navigation, save the recipes
        const fetchedRecipes = await recipes;
        await localforage.setItem('explore-recipes', fetchedRecipes);
        setStoredRecipes(fetchedRecipes);
      }
    };

    saveRecipes();
  }, [navigationType, recipes, storedRecipes]);

  return (
    <>
      <Suspense fallback={<CardListLoader itemCount={8} />}>
        <Await resolve={recipes}>
          {(recipes) => {
            return (
              <ul className='grid gap-4 sm:grid-cols-auto-fill-225'>
                {(storedRecipes || recipes).map(
                  (recipe: RecipeMinimalProps) => (
                    <li key={recipe.id}>
                      <RecipeCardMinimal
                        id={recipe.id}
                        title={recipe.title}
                        imagePath={recipe.image}
                      />
                    </li>
                  )
                )}
              </ul>
            );
          }}
        </Await>
      </Suspense>
    </>
  );
};
