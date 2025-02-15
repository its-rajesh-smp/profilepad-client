import { createSlice } from "@reduxjs/toolkit";

interface IInitialState {
  isFirstGridLoad: boolean;
  currentSelectedGridItemId: string;
  isDragging: boolean;
  currentActiveGridItemId: string;
}

const initialState: IInitialState = {
  isFirstGridLoad: true,
  currentSelectedGridItemId: "",
  currentActiveGridItemId: "",
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
    setCurrentActiveGridItemId: (state, action) => {
      state.currentActiveGridItemId = action.payload;
    },
  },
});

export const {
  setIsFirstGridLoad,
  setCurrentSelectedGridItemId,
  setIsDragging,
  setCurrentActiveGridItemId,
} = dashboardSlice.actions;
export default dashboardSlice.reducer;
