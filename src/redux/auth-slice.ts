import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { signUp } from "../main.tsx";
import { signIn } from "../main.tsx";

export interface authSlice {
  value: boolean;
}

const initialState: authSlice = {
  value: false,
};

type SignInPayload = {
  email: "";
  password: "";
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signInReducer: (state, action: PayloadAction<SignInPayload>) => {
      signIn(action.payload.email, action.payload.password);
      state.value = true;
    },
    signUpReducer: (state, action: PayloadAction<SignInPayload>) => {
      signUp(action.payload.email, action.payload.password);
      state.value = true;
    },
  },
});

export const { signInReducer, signUpReducer } = authSlice.actions;

export default authSlice.reducer;
