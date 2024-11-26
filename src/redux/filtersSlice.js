import { createSlice } from "@reduxjs/toolkit";
const slice = createSlice({
  name: "filters",
  initialState: {
    name: "",
  },
  reducers: {
    addFilter(state, action) {},
  },
});

export const { addFilter } = slice.actions;
export default slice.reducer;
