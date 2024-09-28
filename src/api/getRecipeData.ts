import axios, { AxiosResponse } from 'axios';

export async function getRandomRecipe() {
  try {
    const response: AxiosResponse = await axios.get('/api/random');
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export const getFeaturedSectionRecipesId = async () => {
  try {
    const response: AxiosResponse = await axios.get('/api/featured');
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getPopularSectionRecipesId = async () => {
  try {
    const response: AxiosResponse = await axios.get('/api/popular');
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getExploreRecipesId = async () => {
  try {
    const response: AxiosResponse = await axios.get('/api/explore');
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getDetailedRecipeInformation = async (recipeId: string) => {
  try {
    const response: AxiosResponse = await axios.get(
      `/api/recipe?recipeId=${recipeId}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getSearchRecipes = async (query: string) => {
  try {
    const response: AxiosResponse = await axios.get(`/api/search?q=${query}`);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
