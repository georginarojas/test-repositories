import {
  Modal as ModalChakra,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  Text,
} from "@chakra-ui/react";

interface ModalMessageProps {
  isOpen: boolean;
  onClose: () => void;
  statusEmail: string | undefined;
}

export function ModalMessage({
  isOpen,
  onClose,
  statusEmail,
}: ModalMessageProps) {
  return (
    <>
      <ModalChakra isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody
            pb={6}
            marginTop="2.5rem"
            align="center"
            justify="center"
            height="8rem"
          >
            {statusEmail === "success" ? (
              <Text
                fontSize="1.5rem"
                p="1rem"
                fontWeight="600"
                color="green.600"
              >
                Email enviado com sucesso!
              </Text>
            ) : (
              <Text fontSize="1.5rem" p="1rem" fontWeight="600" color="red.700">
                Falha ao enviar o email!
              </Text>
            )}
          </ModalBody>
        </ModalContent>
      </ModalChakra>
    </>
  );
}
