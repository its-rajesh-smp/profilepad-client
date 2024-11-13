import { resizeConstants } from "../constants/dashboard-grid.const";

export const getResizeConstantName = (
  w: number,
  h: number,
): keyof typeof resizeConstants => {
  for (const key in resizeConstants) {
    if (resizeConstants[key].w === w && resizeConstants[key].h === h) {
      return key as keyof typeof resizeConstants;
    }
  }
  return "";
};
