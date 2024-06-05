import { createSlice } from "@reduxjs/toolkit";
import { landingObj, todoListObj } from "../../data-projects";


export const projectsSlice = createSlice({
  name: "projects",
  initialState: {
    webSite: [todoListObj, landingObj],
  },
  reducers: {},
});

export default projectsSlice.reducer