import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fruits: [],
};

const fruitsSlice = createSlice({
  name: "fruits",
  initialState,
  reducers: {
    setFruit: (state, action) => {
      state.fruits = [...state.fruits, action.payload];
    },
  },
});

export const { setFruit } = fruitsSlice.actions;

export default fruitsSlice.reducer;
