import { Heading, Container, Flex, Box, Button, Text } from "@chakra-ui/react";
import { getUserDetails } from "../../usersApi";
import { useQuery } from "react-query";
import { useAuth } from "../../contexts/AuthContext";

function Account({ history }) {
  const { logout } = useAuth();

  const { isLoading, error, data } = useQuery("user_details", () =>
    getUserDetails(localStorage.getItem("user_id"))
  );

  if (isLoading) return "Loading...";

  if (error) return "An error occured: " + error.message;

  return (
    <Flex justifyContent={"center"} my={20}>
      <Container maxW={"5xl"}>
        <Heading as="h2" size={"xl"} color={"blue.500"}>
          ACCOUNT
        </Heading>
        <Box py={10} pl={5}>
          <Text>{JSON.stringify(data)}</Text>
        </Box>
        <Button
          ml={5}
          colorScheme="red"
          onClick={() => {
            logout();
            history.push("/");
          }}
        >
          Logout
        </Button>
      </Container>
    </Flex>
  );
}

export default Account;
