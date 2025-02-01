import { createSlice } from "@reduxjs/toolkit";
import { Layouts } from "react-grid-layout";

interface IInitialState {
  layouts: Layouts;
  layoutItems: any;
}

const initialState: IInitialState = {
  layouts: { lg: [], xs: [] },
  layoutItems: [],
};

const gridSlice = createSlice({
  name: "grid",
  initialState: initialState,
  reducers: {
    setGridLayouts: (state, action) => {
      state.layouts = action.payload;
    },
    setGridLayoutItems: (state, action) => {
      state.layoutItems = action.payload;
    },
    createNewLayoutItem: (state, action) => {
      state.layoutItems.push(action.payload);
    },
    updateGridLayoutItemSize: (state, action) => {
      const { i, w, h, currentScreenSize } = action.payload;
      const newLayout = { ...state.layouts };
      newLayout[currentScreenSize].forEach((item) => {
        if (item.i === i) {
          item.w = w;
          item.h = h;
        }
      });

      state.layouts = newLayout;
      return state;
    },
  },
});

export const {
  setGridLayouts,
  setGridLayoutItems,
  createNewLayoutItem,
  updateGridLayoutItemSize,
} = gridSlice.actions;
export default gridSlice.reducer;
