import { useEffect, useState } from 'react';
import { RecipeMinimalProps } from '@/interfaces';
import { Button } from '@components/Button/Button';
import { RecipeCardMinimal } from '@components/RecipeCard/RecipeCard';
import localforage from 'localforage';

export const Collection = () => {
  const [recipes, setRecipes] = useState<RecipeMinimalProps[]>([]);

  useEffect(() => {
    const getRecipes = async () => {
      try {
        const savedRecipesList =
          await localforage.getItem<RecipeMinimalProps[]>('saved-recipes');

        if (savedRecipesList) {
          setRecipes(savedRecipesList);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getRecipes();
  }, []);

  const handleDeleteRecipe = async (id: number) => {
    const savedRecipesList =
      (await localforage.getItem<RecipeMinimalProps[]>('saved-recipes')) || [];

    const updatedRecipes = savedRecipesList.filter(
      (recipe: RecipeMinimalProps) => recipe.id !== id
    );

    await localforage.setItem('saved-recipes', updatedRecipes);

    setRecipes(updatedRecipes);
  };

  const handleDeleteAllRecipes = async () => {
    await localforage.removeItem('saved-recipes');
    setRecipes([]);
  };

  return (
    <div className='col-span-full flex flex-col gap-4'>
      <div className='flex flex-row flex-wrap justify-between'>
        <h1 className='font-sans text-4xl font-bold'>Collection</h1>
        <Button
          variant='primary'
          value='Delete All Recipes'
          onClick={handleDeleteAllRecipes}
        />
      </div>

      {recipes.length > 0 ? (
        <ul className='grid gap-4 sm:grid-cols-auto-fill-225'>
          {recipes.map((recipe) => (
            <li key={recipe.id} className='flex flex-col gap-4'>
              <RecipeCardMinimal
                id={recipe.id}
                title={recipe.title}
                imagePath={recipe.image}
              />

              <Button
                variant='secondary'
                value='Delete Recipe'
                onClick={() => handleDeleteRecipe(recipe.id)}
              />
            </li>
          ))}
        </ul>
      ) : (
        <p>No recipes found</p>
      )}
    </div>
  );
};
