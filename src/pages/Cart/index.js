import { useEffect, useState } from "react";
import { useCart } from "../../contexts/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import {
  Container,
  Heading,
  Image,
  Text,
  Flex,
  Button,
  Divider,
  Alert,
  AlertIcon,
  AlertTitle,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";

function Cart() {
  const { cartItems, setCartItems, removeItem } = useCart();

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    calculateTotalPrice();
  }, [cartItems]);

  const calculateTotalPrice = () => {
    var newTotalPrice = 0;

    cartItems.map((item) => {
      newTotalPrice += parseFloat(item.price);
    });

    setTotalPrice(newTotalPrice);
  };

  const increasePrice = (price) => {
    setTotalPrice((totalPrice += price));
  };

  const decreasePrice = (price) => {
    setTotalPrice((totalPrice -= price));
  };

  return (
    <Container maxW={"6xl"} my={20}>
      <Heading as="h2" size={"xl"} mb={5} color={"blue.600"}>
        My Cart
      </Heading>
      <Flex direction={"column"} gap={10}>
        {cartItems.length < 1 && (
          <Container maxW={"container.md"} py={10}>
            <Alert status="error">
              <AlertIcon />
              <AlertTitle>There is no clothes in cart!</AlertTitle>
            </Alert>
          </Container>
        )}
        {cartItems.map((item, i) => {
          return (
            <Flex
              alignItems={"center"}
              gap={5}
              key={i}
              justifyContent={"space-between"}
            >
              <Image
                objectFit={"cover"}
                src={item.image}
                alt={item.title}
                boxSize={"150px"}
              />
              <Flex
                direction={"column"}
                w={"100%"}
                h={"100%"}
                alignItems={"flex-start"}
                gap={2}
              >
                <Heading as="h3" size={"md"}>
                  {item.title}
                </Heading>
                <Text>{item.description}</Text>
                <Button colorScheme="blue" variant={"outline"}>
                  ${item.price}
                </Button>
              </Flex>
              <Button
                colorScheme="red"
                onClick={() => {
                  removeItem(item);
                }}
              >
                <FontAwesomeIcon icon={faTrash} />
              </Button>
            </Flex>
          );
        })}
      </Flex>
      <Divider my={5} />
      {cartItems.length > 0 && (
        <Flex justifyContent={"space-between"}>
          <Button colorScheme="blue">Complete Order</Button>
          <Text color={"blue.600"}>
            Total Price: <b>${totalPrice}</b>
          </Text>
        </Flex>
      )}
    </Container>
  );
}

export default Cart;
