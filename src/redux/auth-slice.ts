import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { signUp } from "../main.tsx";
import { signIn } from "../main.tsx";
import { RootState } from "../app/store.ts";

export interface authSlice {
  value: boolean;
  token: string | undefined;
}

const initialState: authSlice = {
  value: false,
  token: "",
};

type SignInPayload = {
  email: string;
  password: string;
};

export const signInAsync = createAsyncThunk(
  "auth/signIn",
  async ({ email, password }: SignInPayload) => {
    try {
      const signInResult = await signIn(email, password);
      const token = await signInResult?.user.getIdToken();
      return { token };
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
  extraReducers: (builder) => {
    builder.addCase(signInAsync.fulfilled, (state, action) => {
      state.token = action.payload?.token;
      console.log(action.payload);
    });
  },
});

export const { signInSuccess, signUpSuccess } = authSlice.actions;

export const getTokenSelector = (state: RootState) => state.auth.token;

export default authSlice.reducer;
