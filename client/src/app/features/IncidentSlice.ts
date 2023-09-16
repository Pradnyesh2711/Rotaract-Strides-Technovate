import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface Incident {
  id: string;
  title: string;
  desc: string;
}

interface IncidentState {
  data: Incident[];
  loading: boolean;
  error: string;
}

const initialState: IncidentState = {
  data: [],
  loading: false,
  error: "",
};

export const IncidentSlice = createSlice({
  name: "incidents",
  initialState,
  reducers: {
    setIncidents: (state, action: PayloadAction<Incident[]>) => {
      state.data = action.payload;
    },
    clearIncidents: (state) => {
      state.data = [];
    },
  },
});

export const { setIncidents, clearIncidents } = IncidentSlice.actions;
export default IncidentSlice.reducer;
