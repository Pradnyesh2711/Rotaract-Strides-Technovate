import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { MemberSlice } from "./features/MemberSlice";
import { UserSlice } from "./features/UserSlice";
import { TaskSlice } from "./features/TaskSlice";
import { EventsSlice } from "./features/EventsSlice";

export const store = configureStore({
  reducer: {
    member: MemberSlice.reducer,
    user: UserSlice.reducer,
    tasks: TaskSlice.reducer,
    incidents: EventsSlice.reducer,
  },
});

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;
