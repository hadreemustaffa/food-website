export interface RecipeProps {
  id: number;
  title: string;
  spoonacularScore: number;
  readyInMinutes: number;
  servings: number;
  nutrition: {
    nutrients: [
      {
        amount: number;
      }
    ];
  };
}