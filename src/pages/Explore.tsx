import { Button } from '../components/Button';
import { RecipeCardMinimal } from '../components/RecipeCard';

export const Explore = () => {
  return (
    <div className="flex flex-col gap-6 p-4">
      <h1 className="text-4xl font-sans font-bold">Explore</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 grid-flow-row gap-4">
        <RecipeCardMinimal name="Whole Wheat Spaghetti with Basil Avocado Pesto" />
        <RecipeCardMinimal name="Whole Wheat Spaghetti with Basil Avocado Pesto" />
        <RecipeCardMinimal name="Whole Wheat Spaghetti with Basil Avocado Pesto" />
        <RecipeCardMinimal name="Whole Wheat Spaghetti with Basil Avocado Pesto" />
        <RecipeCardMinimal name="Whole Wheat Spaghetti with Basil Avocado Pesto" />
        <RecipeCardMinimal name="Whole Wheat Spaghetti with Basil Avocado Pesto" />

        <Button variant="secondary" value="More" />
      </div>
    </div>
  );
};
