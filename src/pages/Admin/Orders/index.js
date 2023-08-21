import {
  Container,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";

function Orders() {
  return (
    <Container maxW={"100%"} py={10}>
      <Alert status="error">
        <AlertIcon />
        <AlertTitle>There is no order data!</AlertTitle>
        <AlertDescription>
          The API I use to built this website does not allow me to add more
          tables so there is no orders. Sorry about that!
        </AlertDescription>
      </Alert>
    </Container>
  );
}

export default Orders;
