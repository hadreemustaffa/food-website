import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getDetailedRecipeInformation } from '../../api/getRecipeData';
import parse from 'html-react-parser';

import { Button } from '../../components/Button';
import { RecipeDetailedProps } from '../../interfaces';
import { Loader } from '../../components/Loader';
import fallbackImageUrl from '/image-fallback.svg';

type Nutrients = {
  name: string;
  amount: number;
  unit: string;
};

type Ingredients = {
  [key: string]: string;
};

type Step = {
  step: string;
  ingredients: Ingredients[];
};

type Instruction = {
  step: string;
  ingredients: [
    {
      name: string;
    },
  ];
};

interface RecipeProps extends RecipeDetailedProps {
  nutrition: {
    nutrients: Nutrients[];
  };
  summary: string;
  extendedIngredients: Ingredients[];
  analyzedInstructions: [
    {
      steps: Instruction[];
    },
  ];
}

export const Recipe = () => {
  const { recipeId } = useParams() as { recipeId: string };
  const [recipe, setRecipe] = useState<RecipeProps | null>(null);
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const savedRecipesList = JSON.parse(localStorage.getItem('saved-recipes') || '[]');

      const savedRecipe = savedRecipesList.find((recipe: RecipeProps) => `${recipe.id}` === recipeId);

      if (savedRecipe) {
        setRecipe(savedRecipe);
        setIsSaved(true);
      } else {
        const data = await getDetailedRecipeInformation(recipeId);
        setRecipe(data);
        setIsSaved(false);
      }
    };

    getData();
  }, [recipeId]);

  const handleScrollToRecipe = () => {
    const section = document.querySelector('#recipeSection');

    section?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  const handleSaveRecipe = () => {
    const savedRecipesList = JSON.parse(localStorage.getItem('saved-recipes') || '[]');

    const isRecipeSaved = savedRecipesList.some((savedRecipe: RecipeProps) => savedRecipe.id === recipe?.id);

    if (!isRecipeSaved) {
      const updatedRecipes = [recipe, ...savedRecipesList];
      localStorage.setItem('saved-recipes', JSON.stringify(updatedRecipes));
      setIsSaved(true);
    } else {
      alert('Recipe is already saved.');
      setIsSaved(true);
    }
  };

  const handleDeleteRecipe = () => {
    const savedRecipesList = JSON.parse(localStorage.getItem('saved-recipes') || '[]');

    const updatedRecipes = savedRecipesList.filter((recipe: RecipeProps) => `${recipe.id}` !== recipeId);

    localStorage.setItem('saved-recipes', JSON.stringify(updatedRecipes));

    setIsSaved(false);
  };

  const nutrientList = ['Fat', 'Carbohydrates', 'Protein', 'Sugar', 'Cholesterol', 'Fiber', 'Calcium'];

  return (
    <>
      {recipe ? (
        <>
          <div className='col-span-full flex flex-col gap-4'>
            <div className='col-span-full flex flex-col justify-center gap-4'>
              <h1 className='font-sans text-4xl font-bold'>{recipe.title}</h1>
              <div className='flex flex-col flex-wrap gap-4 sm:flex-row sm:justify-between'>
                <div className='flex flex-row gap-4'>
                  <div>
                    <p className='text-sm'>Score</p>
                    <p className='font-bold'>{recipe.spoonacularScore.toFixed(0)}</p>
                  </div>
                  <div className='border-l border-tomato-200 pl-4'>
                    <p className='text-sm'>Ready In</p>
                    <p className='font-bold'>{recipe.readyInMinutes}m</p>
                  </div>
                  <div className='border-l border-tomato-200 pl-4'>
                    <p className='text-sm'>Serves</p>
                    <p className='font-bold'>{recipe.servings}</p>
                  </div>
                  <div className='border-l border-tomato-200 pl-4'>
                    <p className='text-sm'>Calorie</p>
                    <p className='font-bold'>{recipe.nutrition.nutrients[0].amount.toFixed(0)}</p>
                  </div>
                </div>

                <Button variant='primary' value='Go to Recipe' onClick={handleScrollToRecipe} />
              </div>
            </div>

            <div>
              {recipe.image ? (
                <img className='mb-4 aspect-4/3 rounded-sm shadow-sm shadow-black-100 sm:float-left sm:mb-0 sm:mr-2 sm:max-w-60 md:mr-4 md:max-w-96' src={recipe.image} alt={recipe.title} />
              ) : (
                <div className='mb-4 flex aspect-4/3 w-full items-center justify-center rounded-sm bg-black-950 p-8 shadow-sm shadow-black-100 sm:float-left sm:mb-0 sm:mr-2 sm:max-w-60 md:mr-4 md:max-w-96'>
                  <img className='w-1/3' src={fallbackImageUrl} alt={recipe.title} />
                </div>
              )}

              <p>{parse(`${recipe.summary}`)}</p>
            </div>

            <div className='flex flex-col gap-4'>
              <h2 className='font-sans text-2xl'>Nutrition</h2>

              <ul className='flex flex-row flex-wrap gap-4'>
                {recipe.nutrition.nutrients
                  .filter(({ name }: Nutrients) => nutrientList.includes(name))
                  .map((nutrient: Nutrients, index) => {
                    return (
                      <li key={index} className='flex flex-row gap-2'>
                        <p>
                          <b>{nutrient.name}:</b>
                        </p>
                        <p>
                          {nutrient.amount.toFixed(0)}
                          {nutrient.unit}
                        </p>
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>

          <div className='col-span-full flex flex-col gap-4'>
            <div id='recipeSection' className='flex flex-col gap-4'>
              <h2 className='font-sans text-3xl font-bold'>Ingredients</h2>
              <ul className='flex list-disc flex-col gap-2 pl-4 marker:text-tomato-300'>
                {recipe.extendedIngredients.map((ingredient: Ingredients, index) => {
                  return (
                    <li key={index}>
                      <p>{ingredient.original}</p>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className='flex flex-col gap-4'>
              <h2 className='font-sans text-3xl font-bold'>Instructions</h2>
              <ol className='flex list-decimal flex-col gap-2 pl-4 marker:font-bold marker:text-tomato-300'>
                {recipe.analyzedInstructions[0].steps.map((step: Step, index) => {
                  return (
                    <li key={index}>
                      <p>{step.step}</p>
                    </li>
                  );
                })}
              </ol>
              {isSaved ? <Button variant='secondary' value='Recipe Saved' onClick={handleDeleteRecipe} /> : <Button variant='secondary' value='Save This Recipe' onClick={handleSaveRecipe} />}
            </div>
          </div>
        </>
      ) : (
        <Loader />
      )}
    </>
  );
};
