import { createSlice } from "@reduxjs/toolkit";

interface IInitialState {
  isFirstGridLoad: boolean;
  currentSelectedGridItemId: string;
}

const initialState: IInitialState = {
  isFirstGridLoad: true,
  currentSelectedGridItemId: "",
};

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState: initialState,
  reducers: {
    setIsFirstGridLoad: (state, action) => {
      state.isFirstGridLoad = action.payload;
    },
    setCurrentSelectedGridItemId: (state, action) => {
      state.currentSelectedGridItemId = action.payload;
    },
  },
});

export const { setIsFirstGridLoad, setCurrentSelectedGridItemId } =
  dashboardSlice.actions;
export default dashboardSlice.reducer;
