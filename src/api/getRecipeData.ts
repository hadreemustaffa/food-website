import axios, { AxiosResponse } from "axios";

const BASE_URL = 'https://api.spoonacular.com';
const API_KEY = import.meta.env.VITE_API_KEY;

export async function getRandomRecipe() {
  try {
    const response: AxiosResponse = await axios.get(`${BASE_URL}/recipes/random?apiKey=${API_KEY}`)
    return response.data.recipes[0];
  } catch (error) {
    console.log(error);
  }
}

const getFeaturedRecipesId = async() => {
  try {
    const response: AxiosResponse = await axios.get(`${BASE_URL}/recipes/complexSearch?apiKey=${API_KEY}&instructionsRequired=true&fillIngredients=false&addRecipeInformation=false&addRecipeNutrition=false&maxReadyTime=20&ignorePantry=false&sort=meta-score&sortDirection=desc&number=4&limitLicense=true`)
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
}

export const getFeaturedRecipesInformation = async () => {
  const response = await getFeaturedRecipesId();
  const recipeId = response.map((data: {id: number}) => data.id)

  try {
    const response: AxiosResponse = await axios.get(`${BASE_URL}/recipes//informationBulk?apiKey=${API_KEY}&ids=${recipeId}&includeNutrition=true`)
    return response.data;
  } catch (error) {
    console.log(error);
    
  }
}

export const getRecommendedRecipesId = async () => {
  try {
    const response: AxiosResponse = await axios.get(`${BASE_URL}/recipes/complexSearch?apiKey=${API_KEY}&instructionsRequired=true&fillIngredients=false&addRecipeInformation=false&addRecipeNutrition=false&ignorePantry=false&number=4&limitLicense=true`)
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
}
