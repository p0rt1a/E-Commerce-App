import {
  Image,
  Flex,
  Text,
  Heading,
  Badge,
  Box,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalHeader,
  ModalCloseButton,
  ModalFooter,
  Stack,
  useToast,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { deleteCloth } from "../../../clothesApi";

function ClothCard({ item }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  const removeCloth = () => {
    try {
      deleteCloth(item.id);

      toast({
        title: "Successfully Deleted!",
        description: `${item.title} named item successfully deleted..`,
        status: "success",
        duration: "5000",
        isClosable: true,
      });
    } catch (e) {
      toast({
        title: "An Error Occured!",
        description: "Error: " + e.message,
        status: "error",
        duration: "5000",
        isClosable: true,
      });
    }
  };

  return (
    <Box border={"1px"} borderColor={"gray.200"} borderRadius={"lg"} p={2}>
      <Flex justifyContent={"space-between"} alignItems={"center"}>
        <Image
          src={item.image}
          boxSize={"120px"}
          objectFit={"cover"}
          alt={item.title}
        />
        <Flex
          direction={"column"}
          w={"100%"}
          alignItems={"flex-start"}
          gap={2}
          px={5}
        >
          <Heading as="h3" size={"md"}>
            {item.title} #{item.id}
          </Heading>
          <Stack direction="row">
            <Badge>
              <FontAwesomeIcon icon={faUser} size="lg" /> {item.seller}
            </Badge>
            {item.shipment ? (
              <Badge colorScheme="green">FREE SHIPMENT</Badge>
            ) : (
              <Badge colorScheme="red">PAID SHIPMENT</Badge>
            )}
          </Stack>
          <Text fontSize={"sm"}>{item.description}</Text>
          <Button colorScheme="blue" variant={"outline"} size="sm">
            ${item.price}
          </Button>
        </Flex>
        <Button colorScheme="red" onClick={onOpen} size={"sm"}>
          <FontAwesomeIcon icon={faCircleXmark} style={{ color: "#fff" }} />
        </Button>
      </Flex>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Confirm Delete Operation</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text size={"md"}>{JSON.stringify(item)}</Text>
            <Text size={"md"} color={"red.500"}>
              Will be deleted.
            </Text>
          </ModalBody>
          <ModalFooter>
            <Flex>
              <Button
                mr={2}
                colorScheme="green"
                onClick={() => {
                  removeCloth();
                  onClose();
                }}
              >
                Confirm
              </Button>
              <Button variant={"outline"} onClick={onClose}>
                Cancel
              </Button>
            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default ClothCard;
