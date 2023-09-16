import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface User {
  email: string;
  name: string;
  gender: string;
  dob: string;
  mobile: string;
  city: string;
  cords: string[];
  profilePicture: string;
  coverPicture: string;
  about: string;
}

interface UserState {
  data: User;
  loading: boolean;
  error: string;
}

const initialState: UserState = {
  data: {
    email: "",
    name: "",
    gender: "",
    dob: "",
    mobile: "",
    city: "",
    cords: [],
    profilePicture: "",
    coverPicture: "",
    about: "",
  },
  loading: false,
  error: "",
};

export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.data = action.payload;
    },
    clearUser: (state) => {
      state.data = {
        email: "",
        name: "",
        gender: "",
        dob: "",
        mobile: "",
        city: "",
        cords: [],
        profilePicture: "",
        coverPicture: "",
        about: "",
      };
    },
  },
});

export const { setUser, clearUser } = UserSlice.actions;
export default UserSlice.reducer;
