import {
  Button,
  useDisclosure,
  Modal as ModalChakra,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  ModalFooter,
  Box,
  Text,
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";

export function Modal() {
  const formRef = useRef(null);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [email, setEmail] = useState<string>();
  const [isValidEmail, setIsValidEmail] = useState<boolean>(true);

  const initialRef = React.useRef<HTMLInputElement>(null);
  const finalRef = React.useRef<HTMLInputElement>(null);
  console.log("Modal isOpen ", isOpen);

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    console.log("EMAIL ", email);
    if (!validateEmail()) {
      console.log("Digite um email valido");
    }
  };

  function validateEmail() {
    let re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (email?.length === 0) {
      setIsValidEmail(false);
      return false;
    }
    const isEmail = re.test(email!) ? true : false;
    setIsValidEmail(isEmail);
    return isEmail;
  }

  return (
    <>
      <Box
        as="button"
        borderRadius="md"
        bg="blue.400"
        color="white"
        height="2.75rem"
        paddingX="0.75rem"
        fontSize="0.8rem"
        _hover={{
          bg: "blue.500",
        }}
        onClick={onOpen}
      >
        Compartilhar
      </Box>
      <ModalChakra
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />

        <ModalContent>
          <ModalCloseButton />
          <form onSubmit={handleSubmit} ref={formRef}>
            <ModalBody pb={6} marginTop="2.5rem">
              <FormControl isRequired>
                <FormLabel>Email</FormLabel>
                <Input
                  type="email"
                  name="email"
                  ref={initialRef}
                  placeholder="Digite o email do destinatário..."
                  onChange={(event) => setEmail(event.currentTarget.value)}
                  onFocus={() => setIsValidEmail(true)}
                />
                {!isValidEmail && (
                  <Text
                    fontSize="0.75rem"
                    color="red.600"
                    marginTop="0.5rem"
                    marginLeft="auto"
                  >
                    Email inválido!
                  </Text>
                )}
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button type="submit" colorScheme="blue" mr={3}>
                Enviar
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </ModalChakra>
    </>
  );
}
