import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { signUp } from "../main.tsx";
import { signIn } from "../main.tsx";

export interface authSlice {
  value: boolean;
}

const initialState: authSlice = {
  value: false,
};

type SignInPayload = {
  email: string;
  password: string;
};

export const signInAsync = createAsyncThunk(
  "auth/signIn",
  async ({ email, password }: SignInPayload, { dispatch }) => {
    try {
      await signIn(email, password);
      dispatch(signInSuccess());
    } catch (error) {
      console.error("Error during sign in", error);
    }
  },
);

export const signUpAsync = createAsyncThunk(
  "auth/signUp",
  async ({ email, password }: SignInPayload, { dispatch }) => {
    try {
      await signUp(email, password);
      dispatch(signUpSuccess());
    } catch (error) {
      console.error("Error during sign up", error);
    }
  },
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signInSuccess: (state) => {
      state.value = true;
    },
    signUpSuccess: (state) => {
      state.value = true;
    },
  },
});

export const { signInSuccess, signUpSuccess } = authSlice.actions;

export default authSlice.reducer;
