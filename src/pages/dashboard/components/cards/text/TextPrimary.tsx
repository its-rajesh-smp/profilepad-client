import Editor from "@/common/components/Editor/Editor";
import { useAppDispatch } from "@/common/hooks/useAppDispatch";
import { updateAGridItemAct } from "@/pages/dashboard/actions-creators/grid.action";
import { gridItemColorVariants } from "@/pages/dashboard/constants/gid-card-color-schema.const";
import GridItemContext from "@/pages/dashboard/contexts/grid-item.context";
import lodash from "lodash";
import { useCallback, useContext, useState } from "react";

function TextPrimary() {
  const { item } = useContext(GridItemContext);
  const dispatch = useAppDispatch();
  const colorSchema = gridItemColorVariants[item.colorVariant || "white"];

  // Local state for text input
  const [text, setText] = useState(item?.metadata?.primaryText || "");

  /**
   * Debounced function to update the store only when typing stops.
   * This prevents excessive dispatch calls.
   */
  const debouncedUpdate = useCallback(
    lodash.debounce((updatedText) => {
      dispatch(
        updateAGridItemAct(item.id, {
          metadata: { ...item.metadata, primaryText: updatedText },
        }),
      );
    }, 300), // Debounce delay (300ms)
    [dispatch, item.id, item.metadata],
  );

  // Update text and trigger debounce
  const handleTextChange = (newText: string) => {
    setText(newText);
    debouncedUpdate(newText);
  };

  return (
    <div
      className={`flex h-full w-full rounded-2xl border ${colorSchema.backgroundColor} ${colorSchema.primaryTextColor} p-2 transition-all duration-300`}
    >
      <div
        className={`no-scrollbar no-drag h-full ${colorSchema.backgroundColor} w-full cursor-text overflow-x-auto rounded-2xl p-2 transition-all duration-300 hover:${colorSchema.secondaryBackgroundColor} `}
      >
        <Editor
          value={text}
          onChange={handleTextChange}
          enableFormattingToolbar
          enableSlashMenu
        />
      </div>
    </div>
  );
}

export default TextPrimary;
