import axios from 'axios';
import type { VercelRequest, VercelResponse } from '@vercel/node';

const API_URL = __API_URL__;
const API_KEY = __API_KEY__;

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    const response = await axios.get(
      `${API_URL}/recipes/random?apiKey=${API_KEY}&number=1`
    );
    return res.json(response.data.recipes[0]);
  } catch (error) {
    console.log(error);
    throw error;
  }
}
