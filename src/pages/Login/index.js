import { useFormik } from "formik";
import {
  Container,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Button,
  Heading,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import validations from "./validations";
import { LoginAccount } from "../../authApi";
import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";

function Login({ history }) {
  const { login } = useAuth();

  const [isLoginFailed, setIsLoginFailed] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validations,
    onSubmit: async (values) => {
      try {
        const loginResult = await LoginAccount(values.email, values.password);
        login(loginResult[0]);
        history.push("/");
      } catch (e) {
        setIsLoginFailed(true);
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
      <Heading as="h2" size="xl" color={"blue.500"}>
        Login
      </Heading>
      <form onSubmit={formik.handleSubmit}>
        <FormControl pt={5}>
          {isLoginFailed && (
            <Alert status="error">
              <AlertIcon /> Incorrect email or password!
            </Alert>
          )}
          <FormLabel>Email</FormLabel>
          <Input
            name="email"
            type="email"
            placeholder="mail@mail.com"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            isInvalid={formik.touched.email && formik.errors.email}
          />
          {formik.touched.email && (
            <FormHelperText color={"red"}>{formik.errors.email}</FormHelperText>
          )}
          <FormLabel>Password</FormLabel>
          <Input
            name="password"
            type="password"
            placeholder="********"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            isInvalid={formik.touched.password && formik.errors.password}
          />
          {formik.touched.password && (
            <FormHelperText color={"red"}>
              {formik.errors.password}
            </FormHelperText>
          )}

          <Button colorScheme="blue" variant={"outline"} type="submit" mt={5}>
            Login
          </Button>
        </FormControl>
      </form>
    </Container>
  );
}

export default Login;
