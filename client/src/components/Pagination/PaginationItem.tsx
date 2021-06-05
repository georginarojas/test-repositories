import React, { FC, ChangeEvent, useEffect, useState } from "react";
import {
  Grid,
  Center,
  Select,
  ButtonProps,
  Text,
  Button,
  ChakraProvider,
} from "@chakra-ui/react";
import {
  Paginator,
  Container,
  Previous,
  usePaginator,
  Next,
  PageGroup,
} from "chakra-paginator";
import { api } from "../../service/api";
import { useRepository } from "../../hooks/useRepository";

const fetchPokemons = (pageSize: number, offset: number) => {
  // console.log("OFFSET ", offset, pageSize);
  // api.get(`/repositories?page=${offset}`).then((response) => { return response.data});
  // return fetch(
  //   `https://pokeapi.co/api/v2/pokemon?limit=${pageSize}&offset=${offset}`
  // ).then((res) => res.json());
};

interface Repository {
  name: String;
  description: string;
  html_url: string;
}

const Demo: FC = () => {
  // states
  // const [pokemonsTotal, setPokemonsTotal] =
  //   useState<number | undefined>(undefined);
  // const [pokemons, setPokemons] = useState<any[]>([]);

  const { getRepositories, repositories, repositoriesTotal } = useRepository();

  // constants
  const outerLimit = 2;
  const innerLimit = 2;

  const {
    pagesQuantity,
    offset,
    currentPage,
    setCurrentPage,
    setIsDisabled,
    isDisabled,
    pageSize,
    setPageSize,
  } = usePaginator({
    total: repositoriesTotal, //repositoriesTotal,
    initialState: {
      pageSize: 4,
      isDisabled: false,
      currentPage: 1,
    },
  });

  // effects
  // useEffect(() => {
  //   api.get(`/repositories?page=${offset}`).then((response) =>
  //     console.log("DATA ", response.data),
  //     // setRepositories(response.data.data.repositoryList);
  //     // setRepositoriesTotal(response.data.data.count);
  //   );
  //   // console.log("Offset ", offset);

  //   // fetchPokemons(pageSize, offset).then((pokemons) => {
  //   //   setPokemonsTotal(pokemons.count);
  //   //   setPokemons(pokemons.results);
  //   // });
  // },[currentPage, pageSize, offset]);

  useEffect(() => {
    console.log(
      `CurrentPage: ${currentPage} \n pageSize: ${pageSize} \n offset: ${offset}`
    );
    getRepositories(currentPage);
  }, [currentPage, pageSize, offset]);

  // styles
  const baseStyles: ButtonProps = {
    w: 7,
    fontSize: "sm",
  };

  const normalStyles: ButtonProps = {
    ...baseStyles,
    _hover: {
      bg: "blue.400",
    },
    bg: "gray.200",
  };

  const activeStyles: ButtonProps = {
    ...baseStyles,
    _hover: {
      bg: "blue.300",
    },
    bg: "red.300",
  };

  const separatorStyles: ButtonProps = {
    w: 7,
    bg: "gray.300",
  };

  // handlers
  const handlePageChange = (nextPage: number) => {
    // -> request new data using the page number
    setCurrentPage(nextPage);
    console.log("request new data with ->", nextPage);
  };

  return (
    <ChakraProvider>
      <Paginator
        isDisabled={isDisabled}
        activeStyles={activeStyles}
        innerLimit={innerLimit}
        currentPage={currentPage}
        outerLimit={outerLimit}
        normalStyles={normalStyles}
        separatorStyles={separatorStyles}
        pagesQuantity={pagesQuantity}
        onPageChange={handlePageChange}
      >
        <Container align="center" justify="space-between" w="full" p={4}>
          <Previous>
            Previous
            {/* Or an icon from `react-icons` */}
          </Previous>
          <PageGroup isInline align="center" />
          <Next>
            Next
            {/* Or an icon from `react-icons` */}
          </Next>
        </Container>
      </Paginator>


      <Grid
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={3}
        px={20}
        mt={20}
      >
        {repositories?.map((repository, index) => (
          <Center p={4} bg="green.100" key={index}>
            <Text>{repository.name}</Text>
          </Center>
        ))}
      </Grid>
      
    </ChakraProvider>
  );
};

export default Demo;
