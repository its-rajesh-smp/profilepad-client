import { createSlice } from "@reduxjs/toolkit";

const defaultLayout: ReactGridLayout.Layouts = {
  lg: [],
  xs: [],
};

const gridLayoutConfigSlice = createSlice({
  name: "dashboard-grid-layout-config",
  initialState: {
    layout: defaultLayout,
    currentBreakpoint: "lg",
  },
  reducers: {
    setGridLayoutConfig: (state, action) => {
      state.layout = action.payload;
      return state;
    },
    setBreakpoint: (state, action) => {
      state.currentBreakpoint = action.payload;
      return state;
    },
  },
});

export default gridLayoutConfigSlice.reducer;
export const { setGridLayoutConfig, setBreakpoint } =
  gridLayoutConfigSlice.actions;
