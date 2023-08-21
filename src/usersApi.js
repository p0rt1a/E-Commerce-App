import axios from "axios";

export const getUsers = async () => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_BASE_ENDPOINT}/users`
  );

  return data;
};

export const getUserDetails = async (id) => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_BASE_ENDPOINT}/users/${id}`
  );

  return data;
};
