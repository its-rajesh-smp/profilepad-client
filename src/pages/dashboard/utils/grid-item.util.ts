import { COLS } from "../constants/dashboard-grid.const";
import { TGridItemSizeVariant } from "../types/dashboard-item.type";

export const getGridItemSizeVariant = (
  currentSize: string,
  w: number,
  h: number,
): TGridItemSizeVariant => {
  let itemW = w;
  let itemH = h;
  if (currentSize === "lg" && w >= COLS.lg) {
    itemW = 100;
  } else if (currentSize !== "lg" && w >= COLS.xs) {
    itemW = 100;
  }

  if (itemH === 1 && itemW === 100) {
    return "H-1_W-100";
  }

  if (itemH === 1 && itemW === 4) {
    return "H-1_W-4";
  }

  if (itemH === 2 && itemW === 2) {
    return "H-2_W-2";
  }

  if (itemH === 2 && itemW === 100) {
    return "H-2_W-100";
  }

  if (itemH === 4 && itemW === 4) {
    return "H-4_W-4";
  }

  return "H-2_W-2";
};
