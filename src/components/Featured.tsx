import { RecipeDisplayCardDetailed } from './RecipeDisplayCard';

export const Featured = () => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-4xl font-sans font-bold">Featured</h2>
      <div className="flex flex-col gap-4">
        <RecipeDisplayCardDetailed />
        <RecipeDisplayCardDetailed />
        <RecipeDisplayCardDetailed />
        <RecipeDisplayCardDetailed />
        <RecipeDisplayCardDetailed />
        <RecipeDisplayCardDetailed />
        <RecipeDisplayCardDetailed />
        <RecipeDisplayCardDetailed />
        <RecipeDisplayCardDetailed />
        <RecipeDisplayCardDetailed />
      </div>
    </div>
  );
};
