import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  founddog: [],
  lostdog: [],
};
const dogSlice = createSlice({
  name: "lostAndFoundDogs",
  initialState,
  reducers: {
    setdog: (state, action) => {
      console.log("set")
      state.founddog = action.payload.founddog;
      state.lostdog = action.payload.lostdog;
      
    },
    clearDog: (state) => {
      state.founddog = [];
      state.lostdog = [];
    },
    adddog: (state, action) => {
      const { type, dog } = action.payload;

      if (type === "f") {
        state.founddog.push(dog);
      } else if (type === "l") {
        state.lostdog.push(dog);
      }
    },
    removedog: (state, action) => {
      const { type, dogId } = action.payload;
      console.log("remove")
      if (type === "f") {
        state.founddog = state.founddog.filter((dog) => dog.id !== dogId);
      } else if (type === "l") {
        state.lostdog = state.lostdog.filter((dog) => dog.id !== dogId);
      }
    },
  },
});

export const { setdog, clearDog, adddog, removedog } = dogSlice.actions;
export default dogSlice.reducer;
