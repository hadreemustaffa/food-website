import { useState, useEffect } from 'react';
import { RecipeMinimalProps } from '@/interfaces';
import localforage from 'localforage';

type StorageKey = 'featured-recipes' | 'popular-recipes' | 'saved-recipes';

interface FetchRecipeListProps {
  storageKey: StorageKey;
  request: () => Promise<RecipeMinimalProps[]>;
}

const useFetchRecipeList = ({ storageKey, request }: FetchRecipeListProps) => {
  const [recipes, setRecipes] = useState<RecipeMinimalProps[] | null>(null);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const savedData = await localforage.getItem<{
          recipes: RecipeMinimalProps[];
          date: string;
        }>(storageKey);
        const lastFetchedDate = savedData?.date || '';
        const currentDate = new Date().toLocaleDateString();

        if (lastFetchedDate === currentDate) {
          savedData && setRecipes(savedData.recipes);
        } else {
          const fetchedRecipes = await request();

          await localforage.setItem(storageKey, {
            recipes: fetchedRecipes,
            date: currentDate,
          });

          setRecipes(fetchedRecipes);
        }
      } catch (error) {
        console.log('Error fetching recipes:', error);
      }
    };

    fetchRecipes();
  }, [storageKey, request]);

  return recipes;
};

export default useFetchRecipeList;
