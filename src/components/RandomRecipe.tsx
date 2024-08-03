import { RecipeDisplayCardDetailed } from './RecipeDisplayCard';

export const RandomRecipe = () => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-4xl font-sans font-bold">Random</h2>
      <div className="flex flex-col gap-4">
        <RecipeDisplayCardDetailed />
      </div>
    </div>
  );
};
