import * as yup from "yup";

const validations = yup.object().shape({
  name: yup
    .string()
    .min(2, "Name field must be at least 2 characters long.")
    .required("This field is required."),
  surname: yup
    .string()
    .min(2, "Surname field must be at least 2 characters long.")
    .required("This field is required."),
  email: yup
    .string()
    .email("Please enter a valid email address")
    .required("This field is required."),
  password: yup
    .string()
    .min(5, "Password must be at least 5 characters long.")
    .required("This field is required"),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password")], "Password did not match.")
    .required("This field is required."),
});

export default validations;
