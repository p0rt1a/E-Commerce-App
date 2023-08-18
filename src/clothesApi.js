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
