import { configureStore } from "@reduxjs/toolkit";
import { formReducer } from "./slices/formSlice.jsx";
import { courseReducer } from "./slices/courseSlice.jsx";

export const store = configureStore({
  reducer: {
    form: formReducer,
    courses: courseReducer,
  }
});
