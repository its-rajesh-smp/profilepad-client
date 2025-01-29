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
  },
});

export const { setGridLayouts, setGridLayoutItems } = gridSlice.actions;
export default gridSlice.reducer;
