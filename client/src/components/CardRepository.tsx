import {
  Box,
  Flex,
  Grid,
  GridItem,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { Modal } from "./Modal";

interface Repository {
  name: String;
  description: string;
  url: string;
}

export function CardRepository({ name, description, url }: Repository) {
  const { onOpen, isOpen } = useDisclosure();
  // console.log("CARD: onOpen ", onOpen);
  console.log("isOpen ", isOpen);
  return (
    <>
      <Grid
        h="75px"
        width="100%"
        templateRows="repeat(1, 1fr)"
        templateColumns="repeat(4, 1fr)"
        gap={["4", "6", "8"]}
        marginBottom="1rem"
      >
        <GridItem colSpan={3} borderBottom="1px solid">
          <Flex direction="column">
            <Text
              color="blue.500"
              fontSize="1.15rem"
              fontWeight="bold"
              marginTop="0.25rem"
              marginBottom="0.15rem"
              isTruncated
            >
              {name}
            </Text>
            <Text
              color="gray.600"
              fontSize="0.875rem"
              marginBottom="1.25rem"
              isTruncated
            >
              {description}
            </Text>
          </Flex>
        </GridItem>

        <GridItem
          colSpan={1}
          alignItems="center"
          display="flex"
          justifyContent="center"
          justifySelf="start"
        >
          <Modal />
        </GridItem>
      </Grid>
    </>
  );
}
