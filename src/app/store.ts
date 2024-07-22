import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "../redux/auth-slice";
import { useDispatch } from "react-redux";
import { dataSlice } from "../redux/data-slice.ts";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    data: dataSlice.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
