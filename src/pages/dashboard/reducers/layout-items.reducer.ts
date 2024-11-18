import { createSlice } from "@reduxjs/toolkit";
import { IDashboardCard } from "../types/dashboard.type";

const defaultLayoutItems: IDashboardCard[] = [];

const layoutItemsSlice = createSlice({
  name: "dashboard-layout-items",
  initialState: {
    layoutItems: defaultLayoutItems,
  },
  reducers: {
    setLayoutItems: (state, action) => {
      state.layoutItems = action.payload;
      return state;
    },

    addNewLayoutItem: (state, action: { payload: IDashboardCard }) => {
      state.layoutItems.push(action.payload);
      return state;
    },

    updateALayoutItem: (state, action) => {
      const updatedItems = state.layoutItems.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            ...action.payload,
          };
        }
        return item;
      });
      state.layoutItems = updatedItems;
      return state;
    },

    resetLayoutItems: () => {
      return {
        layoutItems: defaultLayoutItems,
      };
    },
  },
});

export const {
  setLayoutItems,
  updateALayoutItem,
  addNewLayoutItem,
  resetLayoutItems,
} = layoutItemsSlice.actions;
export default layoutItemsSlice.reducer;
