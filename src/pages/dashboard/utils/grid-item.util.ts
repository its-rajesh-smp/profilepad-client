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
    "1-100": "H-1_W-100",
    "1-4": "H-1_W-4",
    "2-2": "H-2_W-2",
    "2-100": "H-2_W-100",
    "4-4": "H-4_W-4",
  };

  return sizeMap[`${itemH}-${itemW}`] || "H-2_W-2";
};

export const convertGridItemVariantToSize = (variant: TGridItemSizeVariant) => {
  const match = variant.match(/H-(\d+)_W-(\d+)/);
  if (!match) return { w: 2, h: 2 }; // Default fallback

  const [, h, w] = match.map(Number);
  return { w, h };
};
