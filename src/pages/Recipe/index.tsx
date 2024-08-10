import { lazy, Suspense, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getDetailedRecipeInformation } from '../../api/getRecipeData';
import parse from 'html-react-parser';

import { Button } from '../../components/Button';
import { RecipeDetailedProps } from '../../interfaces';
import { CardListLoader } from '../../components/Skeleton';

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
    }
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
    }
  ];
}

const CardList = lazy(() => import('../../components/CardList'));

export const Recipe = () => {
  const { recipeId } = useParams() as { recipeId: string };
  const [loading, setLoading] = useState(true);
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
      setLoading(false);
      console.log(recipe);
    };

    getData();
  }, []);

  const nutrientList = [
    'Fat',
    'Carbohydrates',
    'Protein',
    'Sugar',
    'Cholesterol',
    'Fiber',
    'Calcium',
  ];

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Loading...</p>{' '}
      </div>
    );
  }

  return (
    <>
      <div className="flex flex-col gap-4">
        <img src={recipe.image} alt="" />

        <div className="flex flex-col gap-4 px-4">
          <h1 className="font-sans font-bold text-5xl">{recipe.title}</h1>
          <div className="flex flex-col flex-wrap gap-4 sm:flex-row sm:justify-between">
            <div className="flex flex-row gap-4 justify-between">
              <div>
                <p className="text-base text-black-100">Score</p>
                <p className="text-xl">{recipe.spoonacularScore.toFixed(0)}</p>
              </div>
              <div className="pl-4 border-l border-tomato-200">
                <p className="text-base text-black-100">Ready In</p>
                <p className="text-xl">{recipe.readyInMinutes}m</p>
              </div>
              <div className="pl-4 border-l border-tomato-200">
                <p className="text-base text-black-100">Serves</p>
                <p className="text-xl">{recipe.servings}</p>
              </div>
              <div className="pl-4 border-l border-tomato-200">
                <p className="text-base text-black-100">Calorie</p>
                <p className="text-xl">
                  {recipe.nutrition.nutrients[0].amount.toFixed(0)}
                </p>
              </div>
            </div>

            <Button variant="primary" value="Go to Recipe" />
          </div>

          <p>{parse(`${recipe.summary}`)}</p>

          <div className="flex flex-col gap-4">
            <h2 className="font-sans text-2xl">Nutrition</h2>

            <ul className="flex flex-row flex-wrap gap-4">
              {recipe.nutrition.nutrients
                .filter(({ name }: Nutrients) => nutrientList.includes(name))
                .map((nutrient: Nutrients, index) => {
                  return (
                    <li key={index} className="flex flex-row gap-2">
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

      <div className="flex flex-col gap-4 px-4">
        <h2 className="font-sans font-bold text-3xl">Ingredients</h2>
        <ul className="flex flex-col gap-2 pl-4 list-disc marker:text-tomato-200">
          {recipe.extendedIngredients.map((ingredient: Ingredients, index) => {
            return (
              <li key={index}>
                <p>{ingredient.original}</p>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="flex flex-col gap-4 px-4">
        <h2 className="font-sans font-bold text-3xl">Instructions</h2>
        <ol className="flex flex-col gap-2 pl-4 list-decimal marker:text-tomato-200">
          {recipe.analyzedInstructions[0].steps.map((step: Step, index) => {
            return (
              <li key={index}>
                <p>{step.step}</p>
              </li>
            );
          })}
        </ol>

        <Button variant="secondary" value="Save This Recipe" />
      </div>

      <div className="flex flex-col gap-4 px-4">
        <h2 className="font-sans font-bold text-3xl">Similar Recipe</h2>

        <div className="grid grid-cols-1 sm:grid grid-flow-row gap-6">
          <Suspense fallback={<CardListLoader itemCount={4} />}>
            <CardList recipeId={recipeId} />
          </Suspense>
        </div>
      </div>
    </>
  );
};
