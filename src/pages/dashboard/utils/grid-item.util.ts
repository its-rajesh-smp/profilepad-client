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

export const generateStylesToUpdate = (
  styleUpdatePath: any,
  value: any,
  existingStyles: any = {},
) => {
  const map = styleUpdatePath.split("->");
  let data = { ...existingStyles };
  let current = data;

  map.forEach((key: any, index: any) => {
    if (index === map.length - 1) {
      current[key] = value;
      return;
    }
    current[key] = current[key] ? { ...current[key] } : {};
    current = current[key];
  });

  return data;
};

export const getStylesUsingStyleUpdatePath = (
  styles: any,
  styleUpdatePath: string,
) => {
  if (!styleUpdatePath || !styles) return undefined;

  const map = styleUpdatePath.split("->");
  let temp = styles;
  for (let key of map) {
    if (!temp[key]) return undefined;
    temp = temp[key];
  }
  return temp;
};
