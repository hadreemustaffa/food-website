import axios from 'axios';
import type { VercelRequest, VercelResponse } from '@vercel/node';

const API_URL = process.env.SPOONACULAR_API_URL;
const API_KEY = process.env.SPOONACULAR_API_KEY;

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const { recipeId } = req.query;

  try {
    const response = await axios.get(
      `${API_URL}/recipes/${recipeId}/information?apiKey=${API_KEY}&includeNutrition=true`
    );
    return res.json(response.data);
  } catch (error) {
    console.log(error);
    throw error;
  }
}
