import {
  Flex,
  Box,
  Tabs,
  Tab,
  TabList,
  Button,
  Heading,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { IsUserLoggedIn } from "../../authApi";

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(IsUserLoggedIn());
  });

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
        {isLoggedIn ? (
          <Flex gap={5}>
            <Button colorScheme="blue">
              <FontAwesomeIcon icon={faCartShopping} />
            </Button>
            <Button colorScheme="blue" variant={"outline"}>
              <NavLink to="/account">Account</NavLink>
            </Button>
          </Flex>
        ) : (
          <Flex gap={5}>
            <Button colorScheme="blue">
              <NavLink to="/login">Login</NavLink>
            </Button>
            <Button colorScheme="blue" variant={"outline"}>
              <NavLink to="register">Register</NavLink>
            </Button>
          </Flex>
        )}
      </Flex>
    </nav>
  );
}

export default Navbar;
