import {
  Card,
  CardFooter,
  Divider,
  Heading,
  CardBody,
  Image,
  Box,
  Stack,
  ButtonGroup,
  Button,
  Text,
  useToast,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { useCart } from "../../contexts/CartContext";
import { useAuth } from "../../contexts/AuthContext";
import { useState, useEffect } from "react";

function ClothCard({ item }) {
  const [isInCart, setIsInCart] = useState(false);
  const { cartItems, setCartItems } = useCart();
  const { loggedIn } = useAuth();
  const toast = useToast();

  useEffect(() => {
    cartItems.map((cartItem) => {
      if (cartItem.id === item.id) {
        setIsInCart(true);
      }
    });
  }, []);

  return (
    <Card maxW="sm">
      <CardBody>
        <NavLink to={`/clothes/${item.id}`}>
          <Image src={item.image} />
          <Stack>
            <Heading size={"md"}>{item.title}</Heading>
            <Text>{item.description}</Text>
            <Text color="blue.600">${item.price}</Text>
          </Stack>
        </NavLink>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup>
          {isInCart && loggedIn ? (
            <Button variant="outline" colorScheme="green" isDisabled={true}>
              In Cart
            </Button>
          ) : (
            <Button
              variant="solid"
              colorScheme="blue"
              onClick={() => {
                if (!loggedIn) {
                  toast({
                    position: "bottom-left",
                    render: () => (
                      <Box color="white" bgColor={"red"} p={3}>
                        You have to login for this!
                      </Box>
                    ),
                  });
                } else if (loggedIn) {
                  setIsInCart(true);
                  setCartItems([...cartItems, item]);
                }
              }}
            >
              Add to Cart
            </Button>
          )}
          <Button variant="solid">
            <FontAwesomeIcon icon={faHeart} />
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}

export default ClothCard;
