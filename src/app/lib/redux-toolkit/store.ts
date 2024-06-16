import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import projectsSlice from "./features/projects-slice";
import technologiesSlice from "./features/technologies-slice";

export const store = configureStore({
  reducer: {
    projectsSlice,
    technologiesSlice,
  },
});

// Для работы со store'ом
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
