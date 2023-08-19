import {
  Container,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Button,
  Heading,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import validations from "./validations";
import { RegisterAccount } from "../../authApi";

function Register({ history }) {
  const formik = useFormik({
    initialValues: {
      name: "",
      surname: "",
      email: "",
      password: "",
      passwordConfirm: "",
    },
    validationSchema: validations,
    onSubmit: async (values) => {
      var result = await RegisterAccount({
        name: values.name,
        surname: values.surname,
        email: values.email,
        password: values.password,
      });
      if (result != null) {
        history.push("/login");
      }
    },
  });

  return (
    <Container
      maxW={"md"}
      my={20}
      p={10}
      border={"2px"}
      borderColor={"gray.200"}
      borderRadius={"xl"}
    >
      <Heading as="h2" size={"xl"} color={"blue.500"}>
        Register
      </Heading>
      <form onSubmit={formik.handleSubmit}>
        <FormControl pt={5}>
          <FormLabel>Name</FormLabel>
          <Input
            type="text"
            name="name"
            placeholder="John"
            onChange={formik.handleChange}
            value={formik.values.name}
            onBlur={formik.handleBlur}
            isInvalid={formik.touched.name && formik.errors.name}
          ></Input>
          {formik.touched.name && (
            <FormHelperText color={"red"}>{formik.errors.name}</FormHelperText>
          )}
          <FormLabel>Surname</FormLabel>
          <Input
            type="text"
            name="surname"
            placeholder="Doe"
            onChange={formik.handleChange}
            value={formik.values.surname}
            onBlur={formik.handleBlur}
            isInvalid={formik.touched.surname && formik.errors.surname}
          ></Input>
          {formik.touched.surname && (
            <FormHelperText color={"red"}>
              {formik.errors.surname}
            </FormHelperText>
          )}
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            name="email"
            placeholder="mail@mail.com"
            onChange={formik.handleChange}
            value={formik.values.email}
            onBlur={formik.handleBlur}
            isInvalid={formik.touched.email && formik.errors.email}
          ></Input>
          {formik.touched.email && (
            <FormHelperText color={"red"}>{formik.errors.email}</FormHelperText>
          )}
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            name="password"
            placeholder="********"
            onChange={formik.handleChange}
            value={formik.values.password}
          ></Input>
          {formik.touched.password && (
            <FormHelperText color={"red"}>
              {formik.errors.password}
            </FormHelperText>
          )}
          <FormLabel>Confirm Password</FormLabel>
          <Input
            type="password"
            name="passwordConfirm"
            onChange={formik.handleChange}
            value={formik.values.passwordConfirm}
          ></Input>
          {formik.touched.passwordConfirm && (
            <FormHelperText color={"red"}>
              {formik.errors.passwordConfirm}
            </FormHelperText>
          )}
          <Button type="submit" mt={5} colorScheme="blue" variant={"outline"}>
            Register
          </Button>
        </FormControl>
      </form>
    </Container>
  );
}

export default Register;
