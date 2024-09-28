import axios from 'axios';
import type { VercelRequest, VercelResponse } from '@vercel/node';

const API_URL = __API_URL__;
const API_KEY = __API_KEY__;

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const { q } = req.query;

  try {
    const response = await axios.get(
      `${API_URL}/recipes/complexSearch?apiKey=${API_KEY}&query=${q}&type=main course&instructionsRequired=true&fillIngredients=false&addRecipeInformation=false&addRecipeNutrition=false&maxReadyTime=60&ignorePantry=false&sort=popularity&sortDirection=desc&number=4&limitLicense=true`
    );
    return res.json(response.data.results);
  } catch (error) {
    console.log(error);
    throw error;
  }
}
