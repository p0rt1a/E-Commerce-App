import { getClothes } from "../../clothesApi";
import { useQuery } from "react-query";
import ClothCard from "../../components/ClothCard";

import { Flex, Box, Container } from "@chakra-ui/react";

function Clothes() {
  const { isLoading, error, data } = useQuery("clothes", getClothes);

  if (isLoading) return "Loading...";

  if (error) return "An error occured: " + error.message;

  return (
    <div>
      Clothes works!
      <Container maxW={"container.xl"}>
        <Flex wrap={"wrap"} gap={"10"}>
          {data.map((item, i) => {
            return (
              <Box key={i}>
                <ClothCard item={item} />
              </Box>
            );
          })}
        </Flex>
      </Container>
    </div>
  );
}

export default Clothes;
