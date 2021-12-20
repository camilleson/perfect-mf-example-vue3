import axios from "axios";

const apiUrl = "https://fakestoreapi.com/products";

export const findAll = async () => {
  const result = await axios.get(apiUrl);
  return result.data;
};
