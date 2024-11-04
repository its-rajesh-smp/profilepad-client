import layoutItemsSlice from "@/pages/dashboard/reducers/layout-items.reducer";
import gridLayoutConfigSlice from "@/pages/dashboard/reducers/grid-layout-config.reducer";
import authSlice from "@/pages/auth/reducers/auth.reducer";
import { configureStore } from "@reduxjs/toolkit";

const reduxStore = configureStore({
  reducer: { gridLayoutConfigSlice, layoutItemsSlice, authSlice },
});

export type RootState = ReturnType<typeof reduxStore.getState>;

export default reduxStore;
