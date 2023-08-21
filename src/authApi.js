import axios from "axios";

export const LoginAccount = async (email, password) => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_BASE_ENDPOINT}/users?email=${email}&password=${password}`
  );

  return data;
};

export const RegisterAccount = async (input) => {
  const { data } = await axios.post(
    `${process.env.REACT_APP_BASE_ENDPOINT}/users`,
    input
  );

  return data;
};
