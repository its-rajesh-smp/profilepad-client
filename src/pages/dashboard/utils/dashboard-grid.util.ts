import { Layouts } from "react-grid-layout";
import { COLS } from "../constants/dashboard-grid.const";
import { ILeftSidebarDroppingItem } from "../types/left-sidebar-item.type";

export const adjustDroppingItemWidthBasedOnGridSize = (
  droppingItem: ILeftSidebarDroppingItem | undefined,
  currentSize: string,
) => {
  if (!droppingItem) {
    return undefined;
  }

  if (currentSize === "lg" && droppingItem.w > COLS.lg) {
    return {
      ...droppingItem,
      w: COLS.lg,
    };
  } else if (droppingItem.w > COLS.xs) {
    return {
      ...droppingItem,
      w: COLS.xs,
    };
  } else return droppingItem;
};

export const formatGridLayout = (layouts: Layouts) => {
  const newLayouts: Layouts = {};

  Object.keys(layouts).forEach((key) => {
    newLayouts[key] = layouts[key].map((layout) => ({
      ...layout,
      isResizable: false,
    }));
  });
  return newLayouts;
};
