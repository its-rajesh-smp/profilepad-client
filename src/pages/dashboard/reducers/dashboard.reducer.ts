import { createSlice } from "@reduxjs/toolkit";

interface IInitialState {
  isFirstGridLoad: boolean;
  currentSelectedGridItemId: string;
  isDragging: boolean;
}

const initialState: IInitialState = {
  isFirstGridLoad: true,
  currentSelectedGridItemId: "",
  isDragging: false,
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
    setIsDragging: (state, action) => {
      state.isDragging = action.payload;
    },
  },
});

export const {
  setIsFirstGridLoad,
  setCurrentSelectedGridItemId,
  setIsDragging,
} = dashboardSlice.actions;
export default dashboardSlice.reducer;
