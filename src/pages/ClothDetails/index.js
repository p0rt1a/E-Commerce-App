import { useParams } from "react-router-dom";
import { getClothDetails } from "../../clothesApi";
import { useQuery } from "react-query";
import {
  Container,
  Box,
  Image,
  Badge,
  Flex,
  Heading,
  Text,
  Divider,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";

function ClothDetails() {
  const { cloth_id } = useParams();

  const { isLoading, error, data } = useQuery(["cloth", cloth_id], () =>
    getClothDetails(cloth_id)
  );

  if (isLoading) return "Loading...";

  if (error) return "An error occured: " + error.message;

  return (
    <Container maxW={"container.lg"} my={20} py={5}>
      <Flex gap={10}>
        <Image
          src={data.image}
          boxSize={"sm"}
          alignSelf={"center"}
          borderRadius={"lg"}
        />
        <Flex
          direction={"column"}
          gap={10}
          justifyContent={"space-evenly"}
          alignItems={"flex-start"}
        >
          <Box>
            <Heading as="h2" size="xl">
              {data.title}
            </Heading>
            {data.shipment ? (
              <Badge variant={"solid"} colorScheme="green">
                Free Shipment
              </Badge>
            ) : (
              <Badge variant={"solid"} colorScheme="red">
                Paid Shipment
              </Badge>
            )}
          </Box>
          <Text>{data.description}</Text>
          <Text>
            <FontAwesomeIcon icon={faUser} /> {data.seller}
          </Text>
          <Divider />
          <Heading size={"lg"} color={"blue.500"}>
            ${data.price}
          </Heading>
          <ButtonGroup>
            <Button variant={"solid"} colorScheme="blue">
              Add to Cart
            </Button>
            <Button variant={"solid"}>
              <FontAwesomeIcon icon={faHeart} />
            </Button>
          </ButtonGroup>
        </Flex>
      </Flex>
    </Container>
  );
}

export default ClothDetails;
