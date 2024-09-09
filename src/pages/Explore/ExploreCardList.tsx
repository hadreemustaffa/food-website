import { getExploreRecipesId } from '../../api/getRecipeData';

import { RecipeCardMinimal } from '../../components/RecipeCard';
import { RecipeMinimalProps } from '../../interfaces';
import { CardListLoader } from '../../components/Skeleton';
import { useLoaderData } from 'react-router-dom';

export async function loader() {
  let data = await getExploreRecipesId();
  return data;
}

const ExploreCardList = () => {
  let recipes = useLoaderData() as RecipeMinimalProps[];

  if (!recipes) {
    return <CardListLoader itemCount={8} />;
  }

  return (
    <>
      <ul className='grid gap-4 sm:grid-cols-auto-fill-225'>
        {recipes.map((recipe) => (
          <li key={recipe.id}>
            <RecipeCardMinimal id={recipe.id} title={recipe.title} imagePath={recipe.image} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default ExploreCardList;
