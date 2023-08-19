import axios from "axios";

export const getUserDetails = async (id) => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_BASE_ENDPOINT}/users/${id}`
  );

  return data;
};
