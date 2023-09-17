import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BACKEND_URL } from "constants/definitions";
import { ReactNode } from 'react';


export interface Member {
  [x: string]: ReactNode;
  rotaractID: string;
  firstname: string;
  lastname: string;
  type: string;
  club: string;
  profilePicture: string;
}

interface MemberState {
  data: Member;
  loading: boolean;
  error: string;
}

const initialState: MemberState = {
  data: {
    rotaractID: "",
    firstname: "",
    lastname: "",
    type: "",
    club: "",
    profilePicture: "",
  },
  loading: false,
  error: "",
};

export const MemberSlice = createSlice({
  name: "member",
  initialState,
  reducers: {
    setMember: (state, action: PayloadAction<Member>) => {
      state.data = action.payload;
    },
    clearMember: (state) => {
      state.data = {
        rotaractID: "",
        firstname: "",
        lastname: "",
        type: "",
        profilePicture: "",
        club: "",
      };
    },
  },
});

export const { setMember, clearMember } = MemberSlice.actions;
export default MemberSlice.reducer;
