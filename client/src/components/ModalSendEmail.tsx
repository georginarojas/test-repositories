import {
  Button,
  Modal as ModalChakra,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  ModalFooter,
  Text,
  InputGroup,
  Spinner,
  InputRightElement,
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import { useRepository } from "../hooks/useRepository";

interface ModalSendEmailProps {
  name: string;
  description: string;
  url: string;
  isOpen: boolean;
  onClose: () => void;
  onOpenModalMessage: (status: string) => void;
}

export function ModalSendEmail({
  name,
  description,
  url,
  isOpen,
  onClose,
  onOpenModalMessage,
}: ModalSendEmailProps) {
  const formRef = useRef(null);

  const [email, setEmail] = useState<string>("");
  const [isValidEmail, setIsValidEmail] = useState<boolean>(true);

  const initialRef = React.useRef<HTMLInputElement>(null);
  const finalRef = React.useRef<HTMLInputElement>(null);

  const { postRepositoryAndSendEmail, isLoadingPost } = useRepository();

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    try {
      if (!validateEmail()) {
        throw new Error("Invalid email");
      }

      const response = await postRepositoryAndSendEmail(
        name,
        description,
        url,
        email
      );
      if (response) {
        onClose();
        onOpenModalMessage(response);
      }
    } catch (error) {
      console.error(error);
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
      <ModalChakra
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        isCentered
      >
        <ModalOverlay />

        <ModalContent>
          <ModalCloseButton />
          <form onSubmit={handleSubmit} ref={formRef}>
            <ModalBody pb={6} marginTop="2.5rem">
              <FormControl isRequired>
                <FormLabel>Email</FormLabel>
                <InputGroup>
                  <Input
                    type="email"
                    name="email"
                    ref={initialRef}
                    placeholder="Digite o email do destinatário..."
                    onChange={(event) => setEmail(event.currentTarget.value)}
                    onFocus={() => setIsValidEmail(true)}
                  />
                  {isLoadingPost && (
                    <InputRightElement
                      children={<Spinner size="sm" color="gray.500" ml="4" />}
                    />
                  )}
                </InputGroup>

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
