import { Layouts } from "react-grid-layout";
import { COLS } from "../constants/dashboard-grid.const";
import { IGridItem } from "../types/dashboard-item.type";
import { TViews } from "../types/dashboard.type";
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

export const formatGridLayout = (
  layouts: Layouts,
  layoutItems: IGridItem[],
  isAuthenticated: boolean | undefined,
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
        isDraggable: isAuthenticated ? true : false,
        isResizable:
          isAuthenticated &&
          layoutItems.find(
            (item) => item.id === layout.i && item.variant === "workExperience",
          )
            ? true
            : false,
      }));
  });
  return newLayouts;
};

export const getLayoutWidth = (currentView: TViews) => {
  // For all the device width of small screen same
  let width = "w-[400px] ";

  // If user choose mobile view then explicitly setting the width
  if (currentView === "mobile") {
    width += "lg:w-[400px]";
  } else if (currentView === "desktop") {
    width += "lg:w-[800px]";
  }

  return width;
};
