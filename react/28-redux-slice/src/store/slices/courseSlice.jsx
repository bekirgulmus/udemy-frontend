import { createSlice, nanoid } from '@reduxjs/toolkit'

const courseSlice = createSlice({
  name: 'course',
  initialState: {
    searchTerm: '',
    data: []
  },
  reducers: {
    addCourse: (state, action) => {
      state.data.push({
        name: action.payload.name,
        description: action.payload.description,
        cost: action.payload.cost,
        id: nanoid()
      });
    },
    changeSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    removeCourse: (state, action) => {
      state.data = state.data.filter(item => item.id !== action.payload);
    }
  }
})

export const {
  addCourse,
  removeCourse,
  changeSearchTerm
} = courseSlice.actions;
export const courseReducer = courseSlice.reducer;
