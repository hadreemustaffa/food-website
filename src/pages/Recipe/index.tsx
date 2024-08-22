import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getDetailedRecipeInformation } from '../../api/getRecipeData';
import parse from 'html-react-parser';

import { Button } from '../../components/Button';
import { RecipeDetailedProps } from '../../interfaces';
import { SimilarRecipe } from './SimilarRecipe';
import { Loader } from '../../components/Loader';

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
  const [isLoading, setIsLoading] = useState(true);
  const [recipe, setRecipe] = useState<RecipeProps>({
    image: '',
    id: 0,
    title: '',
    spoonacularScore: 0,
    readyInMinutes: 0,
    servings: 0,
    nutrition: {
      nutrients: [
        {
          name: '',
          amount: 0,
          unit: '',
        },
      ],
    },
    summary: '',
    extendedIngredients: [],
    analyzedInstructions: [
      {
        steps: [],
      },
    ],
  });

  useEffect(() => {
    const getData = async () => {
      const data = await getDetailedRecipeInformation(recipeId);
      setRecipe(data);
      setIsLoading(false);
    };

    getData();
  }, [recipeId]);

  const handleClick = () => {
    const section = document.querySelector('#recipeSection');

    section?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  const nutrientList = [
    'Fat',
    'Carbohydrates',
    'Protein',
    'Sugar',
    'Cholesterol',
    'Fiber',
    'Calcium',
  ];

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <div className='flex flex-col gap-4'>
        <img src={recipe.image} alt='' />

        <div className='flex flex-col gap-4'>
          <h1 className='font-sans text-5xl font-bold'>{recipe.title}</h1>
          <div className='flex flex-col flex-wrap gap-4 sm:flex-row sm:justify-between'>
            <div className='grid grid-cols-4 justify-between'>
              <div>
                <p>Score</p>
                <p className='text-xl font-bold'>
                  {recipe.spoonacularScore.toFixed(0)}
                </p>
              </div>
              <div className='border-l border-tomato-200 pl-4'>
                <p>Ready In</p>
                <p className='text-xl font-bold'>{recipe.readyInMinutes}m</p>
              </div>
              <div className='border-l border-tomato-200 pl-4'>
                <p>Serves</p>
                <p className='text-xl font-bold'>{recipe.servings}</p>
              </div>
              <div className='border-l border-tomato-200 pl-4'>
                <p>Calorie</p>
                <p className='text-xl font-bold'>
                  {recipe.nutrition.nutrients[0].amount.toFixed(0)}
                </p>
              </div>
            </div>

            <Button
              variant='primary'
              value='Go to Recipe'
              onClick={handleClick}
            />
          </div>

          <p>{parse(`${recipe.summary}`)}</p>

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
      </div>

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

        <Button variant='secondary' value='Save This Recipe' />
      </div>

      <div className='flex flex-col gap-4'>
        <h2 className='font-sans text-3xl font-bold'>Similar Recipe</h2>

        <div className='grid grid-flow-row grid-cols-1 gap-6 sm:grid'>
          <SimilarRecipe recipeId={recipeId} />
        </div>
      </div>
    </>
  );
};
