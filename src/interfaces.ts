export interface RecipeDetailedProps {
  image: string;
  id: number;
  title: string;
  spoonacularScore: number;
  readyInMinutes: number;
  servings: number;
}
export interface RecipeMinimalProps {
  id: number;
  title: string;
  image: string;
}
