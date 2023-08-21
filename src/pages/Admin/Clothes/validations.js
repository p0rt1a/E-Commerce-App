import * as yup from "yup";

const validations = yup.object().shape({
  title: yup
    .string()
    .min(5, "Title must be at least 5 characters long.")
    .required("This field is required."),
  description: yup
    .string()
    .min(5, "Description must be at least 5 characters long.")
    .required("This field is required."),
  price: yup
    .string()
    .min(0, "Price must be greater than 0.")
    .required("This field is required."),
});

export default validations;
