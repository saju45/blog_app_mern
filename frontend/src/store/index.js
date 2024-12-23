import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth";
import prodReducer from "./prodRoute";

const store = configureStore({
  reducer: {
    prod: prodReducer,
    auth: authReducer,
  },
});

export default store;
