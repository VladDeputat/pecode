import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import { Episode, MoviesState } from "../../types";

const initialState: MoviesState = {
  episodes: [],
  characters: [],
  locations: [],
};

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    getEpisodesAction: (state, { payload }) => {
      state.episodes = payload;
    },
    getCharacterssAction: (state, { payload }) => {
      state.characters = payload;
    },
    getLocationsAction: (state, { payload }) => {
      state.locations = payload;
    },
  },
});

export const { getEpisodesAction, getCharacterssAction, getLocationsAction } =
  moviesSlice.actions;

export default moviesSlice.reducer;
