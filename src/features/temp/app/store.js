import { configureStore } from "@reduxjs/toolkit";
import { tableReducer } from "../slices";


export const store = configureStore({
  reducer: {
    table: tableReducer,

  },
});