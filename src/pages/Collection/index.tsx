import { useEffect, useState } from 'react';
import { Loader } from '../../components/Loader';
import { RecipeMinimalProps } from '../../interfaces';
import { RecipeCardMinimal } from '../../components/RecipeCard';

export const Collection = () => {
  const [recipes, setRecipes] = useState<RecipeMinimalProps[]>([
    {} as RecipeMinimalProps,
  ]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const savedRecipe = localStorage.getItem(`saved-recipes`);

      if (savedRecipe) {
        setRecipes(JSON.parse(savedRecipe));
        setIsLoading(false);
      }
    };

    getData();
  }, []);

  if (isLoading || !recipes) {
    return <Loader />;
  }

  return (
    <div className='col-span-full flex flex-col gap-4'>
      <h1 className='font-sans text-4xl font-bold'>Collection</h1>

      <ul className='grid grid-cols-auto-fill-225 gap-4'>
        {recipes.map((recipe) => (
          <li key={recipe.id}>
            <RecipeCardMinimal
              id={recipe.id}
              name={recipe.title}
              imagePath={recipe.image}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
