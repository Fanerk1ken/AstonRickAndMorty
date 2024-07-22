import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

type Character = {
  id: number;
  name: string;
  status: "Alive" | "Dead" | "unknown";
  species: string;
  type: string;
  gender: "Female" | "Male" | "Genderless" | "unknown";
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
};

type RequestInfo = {
  count: number;
  pages: number;
  next: string;
  prev: string | null;
};

type RequestType = {
  info: RequestInfo;
  results: Character[];
};

type InitialStateTypes = {
  characters: Character[];
};

const initialState: InitialStateTypes = {
  characters: [],
};

export const fetchData = createAsyncThunk("data/fetchData", async () => {
  return (
    await axios.get<RequestType>("https://rickandmortyapi.com/api/character")
  ).data;
});

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.characters = [...state.characters, ...action.payload.results];
    });
  },
  selectors: {
    getCharactersSelector: (sliceState) => sliceState.characters,
  },
});

export const { getCharactersSelector } = dataSlice.selectors;

export default dataSlice.reducer;
