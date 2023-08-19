import { Flex, Image, Text, Container, chakra } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import reactLogo from "../../assets/react_logo.png";
import fontawesomeLogo from "../../assets/fontawesome_logo.png";
import netlifyLogo from "../../assets/netlify_logo.png";
import chakraUiLogo from "../../assets/chakraui_logo.png";

function Footer() {
  return (
    <Container backgroundColor={"blackAlpha.50"} maxW={"100%"}>
      <Flex
        alignItems={"center"}
        justifyContent={"space-around"}
        px={20}
        py={10}
      >
        <Flex flex={1} direction={"column"} alignItems={"center"}>
          <Text>
            Developed by <b>Alperen Polat</b>
          </Text>
          <Flex alignItems={"center"} gap={10} mt={5}>
            <a href="https://github.com/p0rt1a" target="_blank">
              <FontAwesomeIcon icon={faGithub} size="2xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/alperen-polat-178444204/"
              target="_blank"
            >
              <FontAwesomeIcon icon={faLinkedin} size="2xl" />
            </a>
            <a>
              <FontAwesomeIcon icon={faEnvelope} size="2xl" />
            </a>
          </Flex>
        </Flex>
        <Flex flex={1} direction={"column"} alignItems={"center"}>
          <Text>Technologies</Text>
          <Flex alignItems={"center"} gap={10} mt={5}>
            <Image height={8} src={reactLogo} alt="React Logo" />
            <Image height={8} src={chakraUiLogo} alt="ChakraUI Logo" />
            <Image height={8} src={netlifyLogo} alt="Netlify Logo" />
            <Image height={8} src={fontawesomeLogo} alt="FontAwesome Logo" />
          </Flex>
        </Flex>
      </Flex>
    </Container>
  );
}

export default Footer;
