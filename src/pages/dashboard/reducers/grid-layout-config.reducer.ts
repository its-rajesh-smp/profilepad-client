import { createSlice } from "@reduxjs/toolkit";
import { IDashboardSetting } from "../types/dashboard.type";

const defaultLayout: ReactGridLayout.Layouts = {
  lg: [],
  xs: [],
};

const defaultBreakpoint = "lg";
const defaultDashboardSetting: IDashboardSetting = {
  profileAlignment: "top",
  showProfile: true,
  isMobileView: false,
};

const gridLayoutConfigSlice = createSlice({
  name: "dashboard-grid-layout-config",
  initialState: {
    layout: defaultLayout,
    currentBreakpoint: defaultBreakpoint,
    dashboardSetting: defaultDashboardSetting,
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
    setDashboardSetting: (state, action) => {
      state.dashboardSetting = { ...state.dashboardSetting, ...action.payload };
      return state;
    },
    resetDashboard: () => ({
      layout: defaultLayout,
      currentBreakpoint: defaultBreakpoint,
      dashboardSetting: defaultDashboardSetting,
      isMobileView: false,
    }),
  },
});

export default gridLayoutConfigSlice.reducer;
export const {
  setGridLayoutConfig,
  setBreakpoint,
  setDashboardSetting,
  resetDashboard,
} = gridLayoutConfigSlice.actions;
