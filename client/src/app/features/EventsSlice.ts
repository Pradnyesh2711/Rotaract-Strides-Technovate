import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface Location {
  x: number;
  y: number;
}
export interface Events {
  id: string;
  title: string;
  description: string;
  date: Date;
  path: Location[];
  coverImage: string[];
  eventImage: string[];
  city: string;
  contactNo: string;
  contactEmail: string;
}

interface EventsState {
  data: Events[];
  loading: boolean;
  error: string;
}

const initialState: EventsState = {
  data: [],
  loading: false,
  error: "",
};

export const EventsSlice = createSlice({
  name: "events",
  initialState,
  reducers: {
    setEvents: (state, action: PayloadAction<Events[]>) => {
      state.data = action.payload;
    },
    clearEvents: (state) => {
      state.data = [];
    },
  },
});

export const { setEvents, clearEvents } = EventsSlice.actions;
export default EventsSlice.reducer;
