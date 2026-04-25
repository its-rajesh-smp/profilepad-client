import { GiConfirmed } from "react-icons/gi";
import { Button } from "../shadcn/ui/button";
import { Modal, ModalBody, ModalContent, ModalFooter } from "./AceternityModal";

interface IAnimatedAlertProps {
  title: string;
  description: string;
  open: boolean;
  setOpen: (open: boolean) => void;
  onConfirm?: () => void;
}

function AnimatedAlert({
  description,
  title,
  open,
  setOpen,
  onConfirm,
}: IAnimatedAlertProps) {
  return (
    <>
      <Modal onModalClose={() => setOpen(false)} modalOpen={open}>
        <ModalBody className="!h-[200px] min-h-[100px]">
          <ModalContent className="no-scrollbar flex !w-full flex-col gap-2 overflow-y-auto !p-5">
            {title && <h1 className="text-3xl">{title}</h1>}
            {description && <p>{description}</p>}
          </ModalContent>
          <ModalFooter>
            <Button
              onClick={onConfirm}
              variant="outline"
              size="xs"
              icon={<GiConfirmed />}
            >
              Confirm
            </Button>
          </ModalFooter>
        </ModalBody>
      </Modal>
    </>
  );
}

export default AnimatedAlert;
