import authSlice from "@/pages/auth/reducers/auth.reducer";
import dashboardSlice from "@/pages/dashboard/reducers/dashboard.reducer";
import gridSlice from "@/pages/dashboard/reducers/grid.reducer";
import { configureStore } from "@reduxjs/toolkit";

const reduxStore = configureStore({
  reducer: {
    authSlice,
    dashboardSlice,
    gridSlice,
  },
});

export type RootState = ReturnType<typeof reduxStore.getState>;

export default reduxStore;
