import { createSlice } from "@reduxjs/toolkit";
import { TestFormObj, landingObj, todoListObj } from "../../data-projects";

export const projectsSlice = createSlice({
  name: "projects",
  initialState: {
    webSite: [todoListObj, landingObj, TestFormObj],
  },
  reducers: {},
});

export default projectsSlice.reducer;
