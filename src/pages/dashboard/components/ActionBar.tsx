import { Button } from "@/common/components/shadcn/ui/button";
import { useAppDispatch } from "@/common/hooks/useAppDispatch";
import { motion } from "framer-motion";
import {
  BiBox,
  BiGrid,
  BiImage,
  BiLink,
  BiLogoHtml5,
  BiText,
} from "react-icons/bi";
import { createLayoutAct } from "../action-creators/layout-item.act";
import ActionButtonWithInput from "./UI/ActionButtonWithInput";
import ShareButton from "./UI/ShareButton";

function ActionBar() {
  const dispatch = useAppDispatch();

  /**
   * Creates a new dashboard item of a given type.
   * @param data The data to be sent to the server.
   */
  const onCreateBtnClick = (data: any) => {
    dispatch(createLayoutAct(data));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 2 }}
      className="fixed bottom-5 left-1/2 right-0 flex w-fit translate-x-[-50%] gap-2 rounded-md border bg-white p-2 shadow-md"
    >
      <ShareButton />

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

      <Button
        tooltipText="HTML"
        onClick={() => onCreateBtnClick({ type: "html" })}
        variant="secondary"
        size="xs"
        uiType="icon"
        icon={<BiLogoHtml5 />}
      />
    </motion.div>
  );
}

export default ActionBar;
