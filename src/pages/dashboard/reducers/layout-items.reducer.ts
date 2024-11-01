import { createSlice } from "@reduxjs/toolkit";
import { IDashboardCard } from "../types/dashboard.type";

const defaultLayoutItems: IDashboardCard[] = [
  { id: "1", type: "text", link: "https://redbubble.vercel.app" },
  { id: "2", type: "text", link: "https://redbubble.vercel.app" },
  { id: "3", type: "text", link: "https://redbubble.vercel.app" },
];

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

    updateLayoutItem: (state, action) => {
      return state;
    },
  },
});

export const { setLayoutItems, updateLayoutItem, addNewLayoutItem } =
  layoutItemsSlice.actions;
export default layoutItemsSlice.reducer;
