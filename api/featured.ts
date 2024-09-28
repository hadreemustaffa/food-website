import axios from 'axios';
import type { VercelRequest, VercelResponse } from '@vercel/node';

const API_URL = process.env.SPOONACULAR_API_URL;
const API_KEY = process.env.SPOONACULAR_API_KEY;

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    const response = await axios.get(
      `${API_URL}/recipes/complexSearch?apiKey=${API_KEY}&instructionsRequired=true&fillIngredients=false&addRecipeInformation=false&addRecipeNutrition=false&maxReadyTime=20&ignorePantry=false&sort=meta-score&sortDirection=desc&number=4&limitLicense=true`
    );
    return res.json(response.data.results);
  } catch (error) {
    console.log(error);
    throw error;
  }
}
