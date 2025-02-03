import { createSlice } from "@reduxjs/toolkit";
import { Layouts } from "react-grid-layout";
import { IGridItem } from "../types/dashboard-item.type";

interface IInitialState {
  layouts: Layouts;
  layoutItems: IGridItem[];
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

    updateGridLayoutItem: (state, action) => {
      const newLayoutItems = state.layoutItems.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, ...action.payload };
        }
        return item;
      });
      state.layoutItems = newLayoutItems;
    },

    deleteGridLayoutItem: (state, action) => {
      const newLayoutItems = state.layoutItems.filter(
        (item) => item.id !== action.payload.id,
      );
      state.layoutItems = newLayoutItems;
      return state;
    },
  },
});

export const {
  setGridLayouts,
  setGridLayoutItems,
  createNewLayoutItem,
  updateGridLayoutItemSize,
  updateGridLayoutItem,
  deleteGridLayoutItem,
} = gridSlice.actions;
export default gridSlice.reducer;
