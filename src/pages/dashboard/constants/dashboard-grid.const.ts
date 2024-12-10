export const BREAKPOINTS = { lg: 1024 / 2, xs: 0 };
// export const COLS = { lg: 4, xs: 2 };
// export const ROW_HIGHT = 60;
// export const MARGIN: { [P: string]: [number, number] } = {
//   lg: [40, 40],
//   xs: [40, 40],
// };
// export const resizeConstants: { [key: string]: { w: number; h: number } } = {
//   SMALL_SQUARE: { w: 1, h: 2 },
//   HORIZONTAL_RECTANGLE: { w: 2, h: 1 },
//   HORIZONTAL_WIDE_RECTANGLE: { w: 2, h: 2 },
//   VERTICAL_RECTANGLE: { w: 1, h: 4 },
//   LARGE_SQUARE: { w: 2, h: 4 },
// };

export const COLS = { lg: 8, xs: 4 }; // Changed lg to 8 and xs to 4 for additional columns
export const ROW_HEIGHT = 60; // Typo corrected from ROW_HIGHT to ROW_HEIGHT
export const MARGIN: { [P: string]: [number, number] } = {
  lg: [40, 40], // Reduced margin to make more space for extra columns
  xs: [20, 40],
};
export const resizeConstants: { [key: string]: { w: number; h: number } } = {
  SMALL_SQUARE: { w: 2, h: 2 },
  HORIZONTAL_RECTANGLE: { w: 4, h: 1 },
  HORIZONTAL_WIDE_RECTANGLE: { w: 4, h: 2 }, // Adjusted width to fit new columns
  VERTICAL_RECTANGLE: { w: 2, h: 4 },
  LARGE_SQUARE: { w: 4, h: 4 }, // Adjusted for new column layout
  MINI: { w: 1, h: 1 },
};
