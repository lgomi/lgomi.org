import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@heroui/react";

import { TClubResource } from "@/config/resources";

export default function ResourcesModal({
  content,
}: {
  content: TClubResource;
}) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button variant="bordered" onPress={onOpen}>
        {content.title}
      </Button>
      <Modal
        isOpen={isOpen}
        scrollBehavior="outside"
        size="4xl"
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>{content.title}</ModalHeader>
              <ModalBody>{content.content}</ModalBody>
              <ModalFooter>
                <Button color="primary" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
