import { Box, HStack, Link, Text } from "@chakra-ui/react";

export function Footer() {
  return (
    <Box
      as="footer"
      role="contentinfo"
      bg="gray.200"
      width="100vw"
      paddingY="0.75rem"
      marginTop="2rem"
    >
      <HStack spacing="1.25rem" align="center" justify="center">
        <Link
          href="#"
          _hover={{
            textDecoration: "none",
            fontWeight: "bold",
            fontSize: "1.5rem",
          }}
        >
          <Text color="gray.600" fontSize="1.15rem">
            Docs
          </Text>
        </Link>
        <Link
          href="#"
          _hover={{
            textDecoration: "none",
            fontWeight: "bold",
            fontSize: "1.5rem",
          }}
        >
          <Text color="gray.600" fontSize="1.15rem">
            Contact
          </Text>
        </Link>
        <Link
          href="#"
          _hover={{
            textDecoration: "none",
            fontWeight: "bold",
            fontSize: "1.5rem",
          }}
        >
          <Text color="gray.600" fontSize="1.15rem">
            GitHub
          </Text>
        </Link>
        <Link
          href="#"
          _hover={{
            textDecoration: "none",
            fontWeight: "bold",
            fontSize: "1.5rem",
          }}
        >
          <Text color="gray.600" fontSize="1.15rem">
            Pricing
          </Text>
        </Link>
        <Link
          href="#"
          _hover={{
            textDecoration: "none",
            fontWeight: "bold",
            fontSize: "1.5rem",
          }}
        >
          <Text color="gray.600" fontSize="1.15rem">
            API
          </Text>
        </Link>
        <Link
          href="#"
          _hover={{
            textDecoration: "none",
            fontWeight: "bold",
            fontSize: "1.5rem",
          }}
        >
          <Text color="gray.600" fontSize="1.15rem">
            Training
          </Text>
        </Link>
        <Link
          href="#"
          _hover={{
            textDecoration: "none",
            fontWeight: "bold",
            fontSize: "1.5rem",
          }}
        >
          <Text color="gray.600" fontSize="1.15rem">
            Blog
          </Text>
        </Link>
        <Link
          href="#"
          _hover={{
            textDecoration: "none",
            fontWeight: "bold",
            fontSize: "1.5rem",
          }}
        >
          <Text color="gray.600" fontSize="1.15rem">
            About
          </Text>
        </Link>
      </HStack>
    </Box>
  );
}
