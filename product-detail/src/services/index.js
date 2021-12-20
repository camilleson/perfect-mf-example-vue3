import axios from "axios";

const apiUrl = "https://fakestoreapi.com/products";

export const find = async (id) => {
  const result = await axios.get(`${apiUrl}/${id}`);
  return result.data;
};
