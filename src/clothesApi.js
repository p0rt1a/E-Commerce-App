import axios from "axios";

export const getClothes = async () => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_BASE_ENDPOINT}/clothes`
  );

  return data;
};

export const getClothDetails = async (id) => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_BASE_ENDPOINT}/clothes/${id}`
  );

  return data;
};

export const createCloth = async (item) => {
  const { response } = await axios.post(
    `${process.env.REACT_APP_BASE_ENDPOINT}/clothes`,
    item
  );

  return response;
};

export const deleteCloth = async (id) => {
  const response = await axios.delete(
    `${process.env.REACT_APP_BASE_ENDPOINT}/clothes/${id}`
  );

  return response;
};
