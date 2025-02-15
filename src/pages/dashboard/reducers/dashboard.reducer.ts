import { createSlice } from "@reduxjs/toolkit";
import { TViews } from "../types/dashboard.type";

interface IInitialState {
  isFirstGridLoad: boolean;
  currentSelectedGridItemId: string;
  isDragging: boolean;
  currentActiveGridItemId: string;
  currentView: TViews;
}

const initialState: IInitialState = {
  isFirstGridLoad: true,
  currentSelectedGridItemId: "",
  currentActiveGridItemId: "",
  isDragging: false,
  currentView: "desktop",
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
    setCurrentView: (state, action) => {
      state.currentView = action.payload;
    },
  },
});

export const {
  setIsFirstGridLoad,
  setCurrentSelectedGridItemId,
  setIsDragging,
  setCurrentActiveGridItemId,
  setCurrentView,
} = dashboardSlice.actions;
export default dashboardSlice.reducer;
