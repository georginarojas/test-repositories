import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

export function CardRepository() {
  return (
    <Flex
      direction="row"
      align="center"
      justify="space-between"
      marginBottom="1rem"
    >
      <Flex direction="column" borderBottom="1px solid" width="75%">
        <Text
          color="blue.500"
          fontSize="1.15rem"
          fontWeight="bold"
          marginBottom="0.25rem"
        >
          Name Repository
        </Text>
        <Text color="gray.700" marginBottom="1.25rem">
          Description
        </Text>
      </Flex>

      <Box
        as="button"
        borderRadius="md"
        bg="blue.400"
        color="white"
        height="2.75rem"
        paddingX="0.75rem"
        marginLeft="1.5rem"
        _hover={{
          bg: "blue.500",
        }}
      >
        Compartilhar
      </Box>
    </Flex>
  );
}
