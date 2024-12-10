import { Button } from "@/common/components/shadcn/ui/button";
import useScreenSize from "@/common/hooks/useScreenSize";
import { motion } from "framer-motion";
import { PiPhoneDisconnectFill } from "react-icons/pi";
import ReactPlayer from "react-player";

interface IVidePlayerProps {
  stream: string;
  isCurrent?: boolean;
  closeConnection?: () => void;
}

function VidePlayer({ stream, isCurrent, closeConnection }: IVidePlayerProps) {
  const onCloseBtnClick = () => {
    closeConnection && closeConnection();
  };

  const { size } = useScreenSize();

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: 0.5,
        ease: "easeInOut",
        type: "spring",
      }}
      className="relative h-fit w-fit rounded-2xl bg-black"
    >
      <ReactPlayer
        playing={true}
        url={stream}
        muted={isCurrent}
        height={size === "lg" ? "200px" : "100px"}
        width={size === "lg" ? "200px" : "100px"}
        style={{ borderRadius: "10px" }}
      />
      {closeConnection && (
        <Button
          className="absolute right-2 top-2 rounded-full px-2 py-2"
          onClick={onCloseBtnClick}
          type="button"
          variant="outline"
          size="sm"
          icon={<PiPhoneDisconnectFill />}
        />
      )}
    </motion.div>
  );
}

export default VidePlayer;
