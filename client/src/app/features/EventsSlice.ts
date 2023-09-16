import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface Events {
  id: string;
  title: string;
  desc: string;
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
