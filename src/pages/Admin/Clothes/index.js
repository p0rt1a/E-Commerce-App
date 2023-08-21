import {
  Flex,
  Button,
  Container,
  Spinner,
  Modal,
  ModalHeader,
  ModalBody,
  ModalContent,
  ModalOverlay,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  useDisclosure,
  ModalCloseButton,
  Checkbox,
  ModalFooter,
  useToast,
  FormHelperText,
} from "@chakra-ui/react";
import ClothCard from "../../../components/Admin/ClothCard";
import { useQuery } from "react-query";
import { getClothes, createCloth } from "../../../clothesApi";
import { useFormik } from "formik";
import validations from "./validations";

function Clothes() {
  const { isLoading, error, data } = useQuery("user:clothes", getClothes);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      price: 0,
      shipment: false,
    },
    validationSchema: validations,
    onSubmit: (values) => {
      try {
        createCloth(values);

        toast({
          title: "Created Successfully",
          description: "A new cloth created successfully!",
          status: "success",
          duration: "5000",
          isClosable: true,
        });
      } catch (e) {
        toast({
          title: "Error Occured",
          description: "Can not create new cloth. Error: " + e.message,
          status: "error",
          duration: "5000",
          isClosable: true,
        });
      }
    },
  });

  if (isLoading) return "Loading...";

  if (error) return "An error occured: " + error.message;

  return (
    <Container maxW={"100%"} px={5} py={10}>
      <Button colorScheme="blue" mb={5} onClick={onOpen}>
        Add New
      </Button>
      <Flex direction="column" gap={2}>
        {data.map((item, i) => {
          return <ClothCard key={i} item={item} />;
        })}
      </Flex>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          <ModalHeader>Create New Cloth</ModalHeader>
          <ModalCloseButton />
          <form onSubmit={formik.handleSubmit}>
            <ModalBody>
              <FormControl>
                <FormLabel>Title</FormLabel>
                <Input
                  type="text"
                  name="title"
                  placeholder="Cloth Title"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                  onBlur={formik.handleBlur}
                  isInvalid={formik.touched.title && formik.errors.title}
                />
                {formik.touched.title && (
                  <FormHelperText color={"red"}>
                    {formik.errors.title}
                  </FormHelperText>
                )}
                <FormLabel>Description</FormLabel>
                <Textarea
                  type="text"
                  name="description"
                  placeholder="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil tempora harum nisi aut commodi saepe suscipit ullam consequuntur repellat rem."
                  onChange={formik.handleChange}
                  value={formik.values.description}
                  onBlur={formik.handleBlur}
                  isInvalid={
                    formik.touched.description && formik.errors.description
                  }
                ></Textarea>
                {formik.touched.description && (
                  <FormHelperText color={"red"}>
                    {formik.errors.description}
                  </FormHelperText>
                )}
                <FormLabel>Price</FormLabel>
                <Input
                  type="number"
                  name="price"
                  placeholder="$0.00"
                  onChange={formik.handleChange}
                  value={formik.values.price}
                  onBlur={formik.onBlur}
                  isInvalid={formik.touched.price && formik.errors.price}
                />
                {formik.touched.price && (
                  <FormHelperText color={"red"}>
                    {formik.errors.price}
                  </FormHelperText>
                )}
                <Checkbox
                  mt={3}
                  name="shipment"
                  onChange={(e) => (formik.values.shipment = e.target.checked)}
                >
                  Free Shipment
                </Checkbox>
              </FormControl>
            </ModalBody>
            <ModalFooter>
              <Button
                mr={2}
                colorScheme="green"
                type="submit"
                onClick={onClose}
              >
                Create
              </Button>
              <Button colorScheme="red" variant={"outline"} onClick={onClose}>
                Cancel
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </Container>
  );
}

export default Clothes;
