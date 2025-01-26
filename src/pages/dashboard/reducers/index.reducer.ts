import { combineReducers } from "@reduxjs/toolkit";
import gridSlice from "./grid.reducer";

const dashboardReducer = combineReducers({ gridSlice });

export default dashboardReducer;
