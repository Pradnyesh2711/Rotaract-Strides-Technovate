// eventSlice.ts
import { createSlice } from '@reduxjs/toolkit';


interface EventState {
  eventType: string;
  name: string;
  date: string;
  location: string;
  description: string;
}

const initialState: EventState = {
  eventType: 'Marathon',
  name: '',
  date: '',
  location: '',
  description: '',
};

const eventSlice = createSlice({
  name: 'event',
  initialState,
  reducers: {
    resetForm: () => initialState,
  },
});

export const { resetForm } = eventSlice.actions;

export default eventSlice.reducer;
