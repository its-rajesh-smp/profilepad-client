import { createSlice } from "@reduxjs/toolkit";

interface IInitialState {
  isFirstGridLoad: boolean;
}

const initialState: IInitialState = {
  isFirstGridLoad: true,
};

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState: initialState,
  reducers: {
    setIsFirstGridLoad: (state, action) => {
      state.isFirstGridLoad = action.payload;
    },
  },
});

export const { setIsFirstGridLoad } = dashboardSlice.actions;
export default dashboardSlice.reducer;
