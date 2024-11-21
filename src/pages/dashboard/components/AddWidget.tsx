import { Button } from "@/common/components/shadcn/ui/button";
import { useAppDispatch } from "@/common/hooks/useAppDispatch";
import { BiImage, BiLink, BiText } from "react-icons/bi";
import { createLayoutAct } from "../action-creators/layout-item.act";
import ActionButtonWithInput from "./UI/ActionButtonWithInput";
import { motion } from "framer-motion";
import { useAppSelector } from "@/common/hooks/useAppSelector";
import { TextGenerateEffect } from "@/common/components/shadcn/ui/text-generate-effect";

function AddWidget() {
  const dispatch = useAppDispatch();
  const isEditMode = useAppSelector((state) => state.authSlice.editMode);

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
      transition={{ duration: 0.5, delay: 0.5 }}
      className="absolute flex h-full w-full flex-col gap-10 lg:items-center lg:justify-center"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-2xl font-extrabold lg:text-4xl"
      >
        <TextGenerateEffect
          duration={1.8}
          words={isEditMode ? "Add your first widget" : "Nothing to see here!"}
        />
      </motion.div>
      {isEditMode && (
        <div className="flex items-center justify-center gap-2 lg:gap-10">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <ActionButtonWithInput
              triggerClassName=" lg:h-40 lg:w-40 h-28 w-28 border border-dashed border-zinc-950"
              tooltipText="URL"
              onSubmit={onCreateBtnClick}
              fieldName="url"
              type="link"
              icon={
                <p className="flex flex-col items-center gap-1">
                  <BiLink />
                  <span className="text-base font-bold">Link</span>
                  <span className="text-wrap">Add your favorite link</span>
                </p>
              }
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 120 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <ActionButtonWithInput
              triggerClassName="lg:h-40 lg:w-40 h-28 w-28 border border-dashed border-zinc-950"
              tooltipText="Image"
              onSubmit={onCreateBtnClick}
              fieldName="src"
              type="image"
              icon={
                <p className="flex flex-col items-center gap-1">
                  <BiImage />
                  <span className="text-base font-bold">Image</span>
                  <span className="text-wrap">Add your image</span>
                </p>
              }
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 140 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <Button
              tooltipText="Text"
              className="h-28 w-28 border border-dashed border-zinc-950 lg:h-40 lg:w-40"
              onClick={() => onCreateBtnClick({ type: "text" })}
              variant="secondary"
              size="xs"
              uiType="icon"
              icon={
                <p className="flex flex-col items-center gap-1">
                  <BiText />
                  <span className="text-base font-bold">Text</span>
                  <span className="text-wrap">Add your text</span>
                </p>
              }
            />
          </motion.div>
        </div>
      )}
    </motion.div>
  );
}

export default AddWidget;
