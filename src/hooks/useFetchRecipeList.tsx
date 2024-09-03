import { useState, useEffect } from 'react';
import { RecipeMinimalProps } from '../interfaces';

type StorageKey = 'featured-recipes' | 'popular-recipes' | 'saved-recipes';

interface FetchRecipeListProps {
  storageKey: StorageKey;
  request: () => Promise<RecipeMinimalProps[]>;
}

const useFetchRecipeList = ({ storageKey, request }: FetchRecipeListProps) => {
  const [recipes, setRecipes] = useState<RecipeMinimalProps[] | null>(null);

  useEffect(() => {
    const fetchRecipes = async () => {
      const savedData = JSON.parse(localStorage.getItem(storageKey) || '{}');
      const lastFetchedDate = savedData.date || '';
      const currentDate = new Date().toLocaleDateString();

      if (lastFetchedDate === currentDate) {
        setRecipes(savedData.recipes);
      } else {
        const fetchedRecipes: RecipeMinimalProps[] = await request();

        localStorage.setItem(
          storageKey,
          JSON.stringify({
            recipes: fetchedRecipes,
            date: currentDate,
          })
        );

        setRecipes(fetchedRecipes);
      }
    };

    fetchRecipes();
  }, []);

  return recipes;
};

export default useFetchRecipeList;
