import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import { Episode, MoviesState } from "../../types";

const initialState: MoviesState = {
  episodes: [],
  characters: {
    info: {
      pages: 0,
      next: null,
      prev: null,
    },
    data: [],
  },
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
      state.characters.info = payload.info;
      state.characters.data = payload.results;
    },
    getLocationsAction: (state, { payload }) => {
      state.locations = payload;
    },
  },
});

export const { getEpisodesAction, getCharacterssAction, getLocationsAction } =
  moviesSlice.actions;

export default moviesSlice.reducer;
