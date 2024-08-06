import { Button } from './Button';
import { RecipeCardDetailed } from './RecipeCard';

export const RandomRecipe = () => {
  // const [recipe, setRecipe] = useState([]);
  // useEffect(() => {
  //   // getRandomRecipesInformation().then((data) => setRecipes(data));
  // }, []);

  // sample data
  const recipe = {
    id: 58693,
    title: 'Whole Wheat Spaghetti with Basil Avocado Pesto',
    spoonacularScore: 92,
    readyInMinutes: 10,
    servings: 4,
    nutrition: {
      nutrients: [
        {
          amount: 286,
        },
      ],
    },
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row justify-between">
        <h2 className="text-4xl font-sans font-bold">Random</h2>
        <Button variant="secondary" value="Get New Recipe" />
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col md:flex-row rounded-sm overflow-hidden">
          <RecipeCardDetailed
            name={recipe.title}
            score={Math.floor(recipe.spoonacularScore)}
            readyTime={recipe.readyInMinutes}
            serveAmount={recipe.servings}
            calorieAmount={Math.floor(recipe.nutrition.nutrients[0].amount)}
          />
        </div>
      </div>
    </div>
  );
};
