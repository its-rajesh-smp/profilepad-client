import { Button } from "@/common/components/shadcn/ui/button";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
} from "@/common/components/UI/AceternityModal";
import { useContext } from "react";
import { AiOutlineFullscreen } from "react-icons/ai";
import AnimatedModalContext from "../../context/AnimatedModalContext";
import AnimatedModalContent from "./AnimatedModalContent";
import { getBlogIdFromUrl } from "@/common/utils/blog.util";

function AnimatedModal() {
  const { url, setUrl } = useContext(AnimatedModalContext);

  /**
   * Opens the specified URL in a new browser tab.
   */
  const openInAnotherPage = () => {
    const blogId = getBlogIdFromUrl(url);
    window.open(`/blog/${blogId}`, "_blank");
  };

  return (
    <Modal
      onModalClose={() => {
        setUrl("");
      }}
      modalOpen={url !== ""}
    >
      <ModalBody>
        <ModalContent className="no-scrollbar !w-full overflow-y-auto">
          {url && <AnimatedModalContent />}
        </ModalContent>
        <ModalFooter>
          <Button
            onClick={openInAnotherPage}
            variant="outline"
            size="xs"
            icon={<AiOutlineFullscreen />}
          />
        </ModalFooter>
      </ModalBody>
    </Modal>
  );
}

export default AnimatedModal;
