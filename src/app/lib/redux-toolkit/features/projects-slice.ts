import { createSlice } from "@reduxjs/toolkit";
import projects from "../../data-projects";

// Слайс с проектами
export const projectsSlice = createSlice({
  name: "projects",
  initialState: {
    webSite: projects,
  },
  reducers: {},
});

export default projectsSlice.reducer;
