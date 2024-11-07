import { Button } from "@/common/components/shadcn/ui/button";
import { useAppDispatch } from "@/common/hooks/useAppDispatch";
import { BiBox, BiGrid, BiImage, BiLink, BiText } from "react-icons/bi";

import { useAppSelector } from "@/common/hooks/useAppSelector";
import { motion } from "framer-motion";
import { createLayoutAct } from "../action-creators/layout-item.act";
import ActionButtonWithInput from "./UI/ActionButtonWithInput";

function ActionBar() {
  const dispatch = useAppDispatch();
  const { slug } = useAppSelector((state) => state.authSlice.user);

  /**
   * Creates a new dashboard item of a given type.
   * @param data The data to be sent to the server.
   */
  const onCreateBtnClick = (data: any) => {
    dispatch(createLayoutAct(data));
  };

  const onClickShareBtn = () => {
    navigator.clipboard.writeText(`${window.location.origin}/${slug}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 2 }}
      className="fixed bottom-5 left-1/2 right-0 flex w-fit translate-x-[-50%] gap-2 rounded-md border bg-white p-2 shadow-md"
    >
      <Button
        tooltipText="Share"
        onClick={onClickShareBtn}
        variant="default"
        size="xs"
      >
        Share
      </Button>

      <ActionButtonWithInput
        tooltipText="URL"
        onSubmit={onCreateBtnClick}
        fieldName="url"
        type="link"
        icon={<BiLink />}
      />

      <ActionButtonWithInput
        tooltipText="Image"
        onSubmit={onCreateBtnClick}
        fieldName="src"
        type="image"
        icon={<BiImage />}
      />

      <Button
        tooltipText="Text"
        onClick={() => onCreateBtnClick({ type: "text" })}
        variant="secondary"
        size="xs"
        uiType="icon"
        icon={<BiText />}
      />

      <Button
        tooltipText="Section"
        onClick={() => onCreateBtnClick({ type: "section" })}
        variant="secondary"
        size="xs"
        uiType="icon"
        icon={<BiGrid />}
      />

      <Button
        tooltipText="Empty Box"
        onClick={() => onCreateBtnClick({ type: "empty" })}
        variant="secondary"
        size="xs"
        uiType="icon"
        icon={<BiBox />}
      />
    </motion.div>
  );
}

export default ActionBar;
