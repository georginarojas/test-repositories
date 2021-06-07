import { Flex, Spinner, Text } from "@chakra-ui/react";
import { CardRepository } from "./components/CardRepository";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import Pagination from "./components/Pagination";
import { useRepository } from "./hooks/useRepository";

function App() {
  const { repositories, isLoadingGet } = useRepository();
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

      {isLoadingGet &&
        <Spinner size="lg" color="gray.500" ml="4"/>
      }

      <Flex
        direction="column"
        width="50%"
        marginTop="2rem"
        marginBottom="3.5rem"
        align="center"
        justify="center"
      >
        {repositories.map((repository, index) => (
          <CardRepository
            key={index}
            name={repository.name}
            description={repository.description}
            url={repository.url}
          />
        ))}
        <Pagination />
      </Flex>    
      <Footer />
    </Flex>
  );
}

export default App;
