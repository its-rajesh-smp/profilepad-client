import { createSlice } from "@reduxjs/toolkit";
import { Layouts } from "react-grid-layout";

interface IInitialState {
  layouts: Layouts;
}

const initialState: IInitialState = {
  layouts: { lg: [], xs: [] },
};

const gridSlice = createSlice({
  name: "grid",
  initialState: initialState,
  reducers: {
    setGridLayouts: (state, action) => {
      state.layouts = action.payload;
    },
  },
});

export const { setGridLayouts } = gridSlice.actions;
export default gridSlice.reducer;
