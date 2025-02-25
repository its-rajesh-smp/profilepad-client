import { COLS } from "../constants/dashboard-grid.const";
import { TGridItemSizeVariant } from "../types/dashboard-item.type";

export const getNormalizedWidthHeight = (
  currentSize: string,
  w: number,
  h: number,
) => {
  const normalizedWidth =
    (currentSize === "lg" && w >= COLS.lg) ||
    (currentSize !== "lg" && w >= COLS.xs)
      ? 100
      : w;
  return { w: normalizedWidth, h };
};

export const getGridItemSizeVariant = (
  currentSize: string,
  w: number,
  h: number,
): TGridItemSizeVariant => {
  const { w: itemW, h: itemH } = getNormalizedWidthHeight(currentSize, w, h);

  const sizeMap: Record<string, TGridItemSizeVariant> = {
    "1x100": "1x100",
    "1x4": "1x4",
    "2x2": "2x2",
    "2x4": "2x4",
    "2x100": "2x100",
    "4x4": "4x4",
  };

  return sizeMap[`${itemH}x${itemW}`] || "2x2";
};

export const convertGridItemVariantToSize = (variant: TGridItemSizeVariant) => {
  const [h, w] = variant.split("x");
  return { w: Number(w), h: Number(h) };
};
