import { combineReducers } from "@reduxjs/toolkit";
import gridSlice from "./grid.reducer";
import dashboardSlice from "./dashboard.reducer";

const dashboardReducer = combineReducers({ gridSlice, dashboardSlice });

export default dashboardReducer;
