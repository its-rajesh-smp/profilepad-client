import { createSlice } from "@reduxjs/toolkit";

const defaultLayout: ReactGridLayout.Layouts = {
  lg: [
    { i: "1", x: 0, y: 0, w: 2, h: 3 },
    { i: "2", x: 1, y: 0, w: 1, h: 1 },
    { i: "3", x: 2, y: 0, w: 2, h: 1 },
  ],
};

const layoutSlice = createSlice({
  name: "dashboard-layout",
  initialState: {
    layout: defaultLayout,
  },
  reducers: {
    setLayout: (state, action) => {
      state.layout = action.payload;
      return state;
    },
    updateLayout: (state, action) => {
      state.layout.lg = action.payload;
      return state;
    },
  },
});

export default layoutSlice.reducer;
export const { setLayout, updateLayout } = layoutSlice.actions;
