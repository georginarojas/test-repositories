import { FC, useEffect } from "react";
import { ButtonProps, ChakraProvider } from "@chakra-ui/react";
import {
  Paginator,
  Container,
  Previous,
  usePaginator,
  Next,
  PageGroup,
} from "chakra-paginator";
import { useRepository } from "../hooks/useRepository";

const Pagination: FC = () => {
  const { getRepositories, repositoriesTotal } = useRepository();

  // constants
  const outerLimit = 1;
  const innerLimit = 1;

  const {
    pagesQuantity,
    // offset,
    currentPage,
    setCurrentPage,
    isDisabled,
    pageSize,
  } = usePaginator({
    total: repositoriesTotal,
    initialState: {
      pageSize: 4, //process.env.PAGE_SIZE,
      isDisabled: false,
      currentPage: 1,
    },
  });

  useEffect(() => {
    console.log(
      `CurrentPage: ${currentPage} \n pageSize: ${pageSize}`
    );
    getRepositories(currentPage);
  }, [currentPage, pageSize]);

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
        <Container
          align="center"
          justify="space-between"
          w="full"
          paddingY={4}
          marginTop="1.5rem"
        >
          <Previous marginRight="1">Previous</Previous>
          <PageGroup isInline align="center" />
          <Next>Next</Next>
        </Container>
      </Paginator>
    </ChakraProvider>
  );
};

export default Pagination;
