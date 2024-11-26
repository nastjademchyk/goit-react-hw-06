import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
  },
  reducers: {
    addContact(state, action) {
      state.items.push(action.playload);
    },
  },
});

export const { addContact } = slice.actions;
export default slice.reducer;
