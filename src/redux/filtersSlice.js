import { createSlice } from "@reduxjs/toolkit";
const slice = createSlice({
  name: "filters",
  initialState: {
    name: "",
  },
  reducers: {
    changeFilter(state, action) {},
  },
});

export const { addFilter } = slice.actions;
export default slice.reducer;
