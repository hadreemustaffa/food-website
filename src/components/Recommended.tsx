import { RecipeDisplayCardMinimal } from './RecipeDisplayCard';

export const Recommended = () => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-4xl font-sans font-bold">Recommended</h2>
      <div className="flex flex-col gap-4">
        <RecipeDisplayCardMinimal />
        <RecipeDisplayCardMinimal />
        <RecipeDisplayCardMinimal />
        <RecipeDisplayCardMinimal />
        <RecipeDisplayCardMinimal />
        <RecipeDisplayCardMinimal />
        <RecipeDisplayCardMinimal />
        <RecipeDisplayCardMinimal />
        <RecipeDisplayCardMinimal />
        <RecipeDisplayCardMinimal />
      </div>
    </div>
  );
};
