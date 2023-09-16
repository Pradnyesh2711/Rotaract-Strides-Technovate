import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AdminSlice } from "./features/AdminSlice";
import { StaffSlice } from "./features/StaffSlice";
import { TaskSlice } from "./features/TaskSlice";
import { IncidentSlice } from "./features/IncidentSlice";
import eventReducer from './features/EventSlice';
import viewEventReducer from './features/EventSlice';

export const store = configureStore({
  reducer: {
    admin: AdminSlice.reducer,
    staff: StaffSlice.reducer,
    tasks: TaskSlice.reducer,
    incidents: IncidentSlice.reducer,
    event: eventReducer,
  },
});

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;
