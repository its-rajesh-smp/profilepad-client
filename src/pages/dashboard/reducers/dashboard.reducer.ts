import { createSlice } from "@reduxjs/toolkit";
import { IGridItem } from "../types/dashboard-item.type";

interface IInitialState {
  isFirstGridLoad: boolean;
  currentSelectedGridItem: IGridItem | undefined;
}

const initialState: IInitialState = {
  isFirstGridLoad: true,
  currentSelectedGridItem: undefined,
};

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState: initialState,
  reducers: {
    setIsFirstGridLoad: (state, action) => {
      state.isFirstGridLoad = action.payload;
    },
    setCurrentSelectedGridItem: (state, action) => {
      state.currentSelectedGridItem = action.payload;
    },
  },
});

export const { setIsFirstGridLoad, setCurrentSelectedGridItem } =
  dashboardSlice.actions;
export default dashboardSlice.reducer;
