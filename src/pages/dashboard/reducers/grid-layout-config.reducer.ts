import { createSlice } from "@reduxjs/toolkit";

const defaultLayout: ReactGridLayout.Layouts = {
  lg: [],
  xs: [],
};

const gridLayoutConfigSlice = createSlice({
  name: "dashboard-grid-layout-config",
  initialState: {
    layout: defaultLayout,
  },
  reducers: {
    setGridLayoutConfig: (state, action) => {
      state.layout = action.payload;
      return state;
    },
  },
});

export default gridLayoutConfigSlice.reducer;
export const { setGridLayoutConfig } = gridLayoutConfigSlice.actions;
