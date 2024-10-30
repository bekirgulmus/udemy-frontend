import { createSlice } from '@reduxjs/toolkit'
import { addCourse } from "./courseSlice.jsx";

const formSlice = createSlice({
  name: 'form',
  initialState: {
    name: '',
    description: '',
    cost: 0
  },
  reducers: {
    changeName(state,action) {
      state.name = action.payload;
    },
    changeDescription(state,action) {
      state.description = action.payload;
    },
    changeCost(state,action) {
      state.cost = action.payload;
    }
  },
  extraReducers(builder) {
    builder.addCase(addCourse,(state, action) => {
      state.name = '';
      state.description = '';
      state.cost = '';
    });
  }
})

export const {
  changeName,
  changeDescription,
  changeCost,
} = formSlice.actions;
export const formReducer = formSlice.reducer;
