import authSlice from "@/pages/auth/reducers/auth.reducer";
import dashboardReducer from "@/pages/dashboard/reducers/index.reducer";
import { configureStore } from "@reduxjs/toolkit";

const reduxStore = configureStore({
  reducer: {
    authSlice,
    dashboardReducer,
  },
});

export type RootState = ReturnType<typeof reduxStore.getState>;

export default reduxStore;
