import {
  Heading,
  Text,
  Box,
  Container,
  Divider,
  Flex,
  CircularProgress,
  CircularProgressLabel,
} from "@chakra-ui/react";
import { getUsers } from "../../../usersApi";
import { getClothes } from "../../../clothesApi";
import { useQuery } from "react-query";

function Home() {
  const usersQuery = useQuery("admin:users", getUsers);
  const clothesQuery = useQuery("admin:clothes", getClothes);

  return (
    <Container maxW={"100%"} p={10}>
      <Heading as="h2" size={"xl"}>
        This is admin panel!
      </Heading>
      <Text p={5} fontSize={"lg"}>
        Hello and welcome there. You can create/delete/edit clothes and view
        users in here! You can also check for detail informations about project
        and our data. Feel free to use tabs above of this container. Hope you
        enjoy!
      </Text>
      <Divider my={5} />
      <Heading as="h3" size={"lg"} textAlign={"center"} color={"blue.600"}>
        We Currently Have
      </Heading>
      <Flex justifyContent={"space-around"} alignItems={"center"} pt={10}>
        <Box textAlign={"center"}>
          <CircularProgress
            value={usersQuery.isLoading ? 0 : usersQuery.data.length}
            size={"100px"}
          >
            <CircularProgressLabel>
              {usersQuery.isLoading ? 0 : usersQuery.data.length}
            </CircularProgressLabel>
          </CircularProgress>
          <Text fontSize={"lg"} mt={2} fontWeight={"bold"} color={"blue.600"}>
            Users
          </Text>
        </Box>
        <Box textAlign={"center"}>
          <CircularProgress
            value={clothesQuery.isLoading ? 0 : clothesQuery.data.length}
            size={"100px"}
          >
            <CircularProgressLabel>
              {clothesQuery.isLoading ? 0 : clothesQuery.data.length}
            </CircularProgressLabel>
          </CircularProgress>
          <Text fontSize={"lg"} mt={2} fontWeight={"bold"} color={"blue.600"}>
            Clothes
          </Text>
        </Box>
      </Flex>
    </Container>
  );
}

export default Home;
