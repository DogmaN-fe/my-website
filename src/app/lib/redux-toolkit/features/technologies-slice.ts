import { createSlice } from "@reduxjs/toolkit";
import technologies from "../../data-technologies";

// Слайс с технологиями
export const technologiesSlice = createSlice({
  name: "technologies",
  initialState: {
    tech: technologies,
  },
  reducers: {},
});

export default technologiesSlice.reducer;