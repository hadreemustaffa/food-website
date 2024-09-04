import { useEffect, useState } from 'react';
import { RecipeMinimalProps } from '../../interfaces';
import { RecipeCardMinimal } from '../../components/RecipeCard';
import { Button } from '../../components/Button';

export const Collection = () => {
  const [recipes, setRecipes] = useState<RecipeMinimalProps[]>([]);

  useEffect(() => {
    const savedRecipesList = localStorage.getItem(`saved-recipes`);

    if (savedRecipesList) {
      setRecipes(JSON.parse(savedRecipesList));
    }
  }, []);

  const handleDeleteRecipe = (id: number) => {
    const savedRecipesList = JSON.parse(
      localStorage.getItem('saved-recipes') || '[]'
    );

    const updatedRecipes = savedRecipesList.filter(
      (recipe: RecipeMinimalProps) => recipe.id !== id
    );

    localStorage.setItem('saved-recipes', JSON.stringify(updatedRecipes));

    setRecipes(updatedRecipes);
  };

  const handleDeleteAllRecipes = () => {
    localStorage.setItem('saved-recipes', '');
    setRecipes([]);
  };

  return (
    <div className='col-span-full flex min-h-[50vh] flex-col gap-4'>
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
