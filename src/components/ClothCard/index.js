import {
  Card,
  CardFooter,
  Divider,
  Heading,
  CardBody,
  Image,
  Stack,
  ButtonGroup,
  Button,
  Text,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

function ClothCard({ item }) {
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
          <Button variant="solid" colorScheme="blue">
            Add to Cart
          </Button>
          <Button variant="solid">
            <FontAwesomeIcon icon={faHeart} />
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}

export default ClothCard;
