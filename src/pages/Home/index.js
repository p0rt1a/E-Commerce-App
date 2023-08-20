import {
  Container,
  Box,
  Text,
  Heading,
  Divider,
  Link,
  Image,
  Flex,
  Button,
} from "@chakra-ui/react";
import reactLogo from "../../assets/react_logo.png";
import fontawesomeLogo from "../../assets/fontawesome_logo.png";
import netlifyLogo from "../../assets/netlify_logo.png";
import chakraUiLogo from "../../assets/chakraui_logo.png";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

function Home() {
  return (
    <Container maxW={"5xl"} my={10}>
      <Box py={10}>
        <Heading as={"h1"} size={"xl"}>
          Welcome to <b>e-Commerce App!</b>
        </Heading>
        <Text fontSize={"lg"} p={5}>
          This is a mini e-commerce project which only contains clothes! You can
          view clothes tab in navbar. Also, if you check footer, you'll see my
          contact informations and the technologies I use to built this project!
          There is an admin panel for add/update/remove clothes from API. You
          can{" "}
          <Link href="/" target="_blank" color={"blue.600"}>
            click here
          </Link>{" "}
          to view admin panel. I hope you enjoy!
        </Text>
        <NavLink to="/clothes">
          {" "}
          <Button ml={5} colorScheme="blue">
            See Clothes!
          </Button>
        </NavLink>
      </Box>
      <Divider />
      <Flex
        textAlign={"center"}
        py={5}
        alignItems={"center"}
        justifyContent={"space-around"}
      >
        <Box>
          <Text fontSize={"lg"} mb={2}>
            UI made via
          </Text>
          <Image height={10} src={chakraUiLogo} />
        </Box>
        <Box>
          <Text fontSize={"lg"} mb={2}>
            Published in
          </Text>
          <Image height={10} src={netlifyLogo} />
        </Box>
        <Box>
          <Text fontSize={"lg"} mb={2}>
            Created with
          </Text>
          <Image height={10} src={reactLogo} />
        </Box>
        <Box>
          <Text fontSize={"lg"} mb={2}>
            For icons
          </Text>
          <Image height={10} src={fontawesomeLogo} />
        </Box>
      </Flex>
    </Container>
  );
}

export default Home;
