import { Layouts } from "react-grid-layout";
import { COLS } from "../constants/dashboard-grid.const";
import { ILeftSidebarDroppingItem } from "../types/left-sidebar-item.type";
import { IGridItem } from "../types/dashboard-item.type";

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

export const formatGridLayout = (
  layouts: Layouts,
  layoutItems: IGridItem[],
) => {
  const newLayouts: Layouts = {};

  /*
   * FIXME:
   * Sometime layouts is filling with some dummy items
   * Thats why checking if item is present in layoutItems
   * If present that means it is a valid grid item
   */
  Object.keys(layouts).forEach((key) => {
    newLayouts[key] = layouts[key]
      .filter((layout) => layoutItems.some((item) => item.id === layout.i))
      .map((layout) => ({
        ...layout,
        isResizable: layoutItems.find(
          (item) => item.id === layout.i && item.variant === "workExperience",
        )
          ? true
          : false,
      }));
  });
  return newLayouts;
};
