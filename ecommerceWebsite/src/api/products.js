const cors = "https://cors-anywhere.herokuapp.com/";
const baseURL ="https://productapi-yashraj.onrender.com/api/"

export const fetchProducts = async (filter) => {
  try {
    const response = await fetch(`${cors}${baseURL}${filter}`);
    return response.json();
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};