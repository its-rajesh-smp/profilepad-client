import { createSlice } from "@reduxjs/toolkit";

const defaultLayout: ReactGridLayout.Layouts = {
  lg: [],
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

    addNewLayout: (state, action: { payload: ReactGridLayout.Layout }) => {
      state.layout.lg.push(action.payload);
      return state;
    },

    updateLayout: (state, action) => {
      state.layout = action.payload;
      return state;
    },
  },
});

export default layoutSlice.reducer;
export const { setLayout, updateLayout, addNewLayout } = layoutSlice.actions;
