import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  link: "http://localhost:1000",
};

const prodSlice = createSlice({
  name: "prod",
  initialState,
});

export default prodSlice.reducer;
