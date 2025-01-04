import { createSlice } from "@reduxjs/toolkit";

const defaultLayout: ReactGridLayout.Layouts = {
  lg: [],
  xs: [],
};

const defaultBreakpoint = "lg";

const gridLayoutConfigSlice = createSlice({
  name: "dashboard-grid-layout-config",
  initialState: {
    layout: defaultLayout,
    currentBreakpoint: defaultBreakpoint,
    isMobileView: false,
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
    setIsMobileView: (state, action) => {
      console.log(action.payload);
      state.isMobileView = action.payload;
      return state;
    },
    resetDashboard: () => ({
      layout: defaultLayout,
      currentBreakpoint: defaultBreakpoint,
      isMobileView: false,
    }),
  },
});

export default gridLayoutConfigSlice.reducer;
export const {
  setGridLayoutConfig,
  setBreakpoint,
  setIsMobileView,
  resetDashboard,
} = gridLayoutConfigSlice.actions;
