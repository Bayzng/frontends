const API_URL = 'https://backend-mtrx.onrender.com/api/arts';

/**
 * Fetches all arts from the API.
 * @returns {Promise<Array>} A promise that resolves to an array of art objects.
 */
export const getAllArts = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching all arts:', error);
    throw error;
  }
};

/**
 * Adds a new art to the database by sending a POST request to the API.
 * @param {Object} art - The art object to add, including image and creatorImage as base64 strings.
 * @returns {Promise<Object>} A promise that resolves to the added art object.
 */
export const addArt = async (art) => {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(art),
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Error adding new art:', error);
    throw error;
  }
};
