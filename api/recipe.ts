import axios from 'axios';
import type { VercelRequest, VercelResponse } from '@vercel/node';

const API_URL = __API_URL__;
const API_KEY = __API_KEY__;

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
