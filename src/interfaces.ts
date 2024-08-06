export interface RecipeDetailedProps {
  id?: number;
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
export interface RecipeMinimalProps {
  id: number;
  title: string;
  image: string;
}