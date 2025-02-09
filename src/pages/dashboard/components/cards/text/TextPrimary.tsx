import Editor from "@/common/components/Editor/Editor";
import { useAppDispatch } from "@/common/hooks/useAppDispatch";
import useIsScrollable from "@/common/hooks/useIsScrollable";
import { updateAGridItemAct } from "@/pages/dashboard/actions-creators/grid.action";
import { gridItemColorVariants } from "@/pages/dashboard/constants/gid-card-color-schema.const";
import GridItemContext from "@/pages/dashboard/contexts/grid-item.context";
import lodash from "lodash";
import { useCallback, useContext, useState } from "react";

function TextPrimary() {
  const { item } = useContext(GridItemContext);
  const dispatch = useAppDispatch();
  const colorSchema = gridItemColorVariants[item.colorVariant || "white"];

  const { ref: scrollContainerRef, isScrollable } =
    useIsScrollable<HTMLDivElement>(item);

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
      className={`relative flex h-full w-full rounded-2xl border ${colorSchema.backgroundColor} ${colorSchema.primaryTextColor} p-4 transition-all duration-300`}
    >
      <div
        ref={scrollContainerRef}
        className={`no-scrollbar h-full w-full overflow-x-auto bg-inherit`}
      >
        <Editor
          value={text}
          onChange={handleTextChange}
          className="no-drag h-full w-full"
        />
      </div>

      {/* Gradient Overlay for Fade Effect */}
      {isScrollable && (
        <div className="pointer-events-none absolute bottom-0 left-0 !z-50 h-36 w-full rounded-2xl bg-gradient-to-t from-black/90 to-transparent" />
      )}
    </div>
  );
}

export default TextPrimary;
