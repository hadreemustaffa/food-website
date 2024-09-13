export const getLocalData = async () => {
  const response = await fetch('./data.json');
  if (!response.ok) {
    throw new Error('error');
  }

  return response.json();
};
