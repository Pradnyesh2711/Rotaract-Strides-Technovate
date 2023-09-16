import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface Task {
  id: string;
  title: string;
  desc: string;
}

interface TaskState {
  data: Task[];
  loading: boolean;
  error: string;
}

const initialState: TaskState = {
  data: [],
  loading: false,
  error: "",
};

export const TaskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    setTasks: (state, action: PayloadAction<Task[]>) => {
      state.data = action.payload;
    },
    clearTasks: (state) => {
      state.data = [];
    },
  },
});

export const { setTasks, clearTasks } = TaskSlice.actions;
export default TaskSlice.reducer;
