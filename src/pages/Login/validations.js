import * as yup from "yup";

const validations = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email address.")
    .required("This field is required."),
  password: yup
    .string()
    .min(5, "Password must be at least 5 characters long.")
    .required("This field is required."),
});

export default validations;
