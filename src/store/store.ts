import layoutItemsSlice from "@/pages/dashboard/reducers/layout-items.reducer";
import layoutSlice from "@/pages/dashboard/reducers/layout.reducer";
import { configureStore } from "@reduxjs/toolkit";

const reduxStore = configureStore({
  reducer: { layoutSlice, layoutItemsSlice },
});

export type RootState = ReturnType<typeof reduxStore.getState>;

export default reduxStore;
