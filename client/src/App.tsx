import { Flex, Stack, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { CardRepository } from "./components/CardRepository";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import Demo from "./components/Pagination/PaginationItem";
import { api } from "./service/api";

function App() {
  // useEffect(() => {
  //   api.get("/repositories").then((response) => console.log(response.data));
  // }, []);

  return (
    <Flex width="100vw" height="100vh" direction="column" align="center">
      <Header />
      <Flex
        align="center"
        justify="center"
        direction="column"
        width="65%"
        my="4rem"
      >
        <Text fontSize="2rem">Projetos Públicos</Text>
        <Text
          color="gray.700"
          fontSize="1.25rem"
          textAlign="center"
          marginTop="1.5rem"
        >
          Encontre aquilo que procura e não deixe de participar da comunidade e
          recomendar para outras pessoas!
        </Text>
      </Flex>

      <Stack width="50%" marginTop="2rem" marginBottom="3.5rem">
        <CardRepository />
        <CardRepository />
        <CardRepository />
        <CardRepository />
      </Stack>

      <Demo/>


      <Footer />
    </Flex>
  );
}

export default App;
