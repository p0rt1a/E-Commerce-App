import {
  Flex,
  Box,
  Tabs,
  Tab,
  TabList,
  Button,
  Heading,
  Circle,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../../contexts/AuthContext";
import { useCart } from "../../contexts/CartContext";
import { useEffect } from "react";

function Navbar() {
  const { user, loggedIn } = useAuth();
  const { cartItems } = useCart();

  return (
    <nav>
      <Flex
        justifyContent={"space-between"}
        px={[5, 5, 10, 20]}
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
        {loggedIn ? (
          <Flex gap={5}>
            {user?.role === "admin" && (
              <Button colorScheme="pink" variant={"outline"}>
                <NavLink to="/admin">Admin Panel</NavLink>
              </Button>
            )}
            <Button colorScheme="blue">
              <NavLink to="/cart">
                <FontAwesomeIcon icon={faCartShopping} />
                <Circle
                  size={"5px"}
                  position={"absolute"}
                  right={"-5px"}
                  bottom={"-5px"}
                  bg={"green"}
                  p={3}
                >
                  {cartItems.length}
                </Circle>
              </NavLink>
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
