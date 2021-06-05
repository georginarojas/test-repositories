import { Flex, Heading } from "@chakra-ui/react";

export function Header() {
  return (
    <Flex bg="gray.900" width="100%" height="3.5rem" align="center">
      <Heading
        color="gray.50"
        textAlign="left"
        marginLeft="1.5rem"
        fontWeight="bold"
        fontSize="1.15rem"
        paddingY="1rem"
      >
        GitHub Repos Recommendations
      </Heading>
    </Flex>
  );
}
