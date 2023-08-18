import {
  Flex,
  Box,
  Tabs,
  Tab,
  TabList,
  Button,
  Text,
  Heading,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  return (
    <nav>
      <Flex
        justifyContent={"space-between"}
        px={20}
        alignItems={"center"}
        backgroundColor={"gray.50"}
        py={5}
      >
        <Box>
          <Heading as={"h2"} size={"md"}>
            e-Commerce
          </Heading>
        </Box>
        <Tabs justifySelf={"flex-start"}>
          <TabList>
            <Tab>
              <NavLink to="/">Home</NavLink>
            </Tab>
            <Tab>
              <NavLink to="/clothes">Clothes</NavLink>
            </Tab>
          </TabList>
        </Tabs>
        <Flex gap={5}>
          <Button colorScheme="blue">
            <FontAwesomeIcon icon={faCartShopping} />
          </Button>
          <Button colorScheme="blue" variant={"outline"}>
            Account
          </Button>
        </Flex>
      </Flex>
    </nav>
  );
}

export default Navbar;
