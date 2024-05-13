import { createSlice } from "@reduxjs/toolkit";
import { MoviesState } from "../../types";

const initialState: MoviesState = {
  episodes: {
    info: {
      pages: 0,
      next: null,
      prev: null,
    },
    data: [],
  },
  characters: {
    info: {
      pages: 0,
      next: null,
      prev: null,
    },
    data: [],
  },
  locations: {
    info: {
      pages: 0,
      next: null,
      prev: null,
    },
    data: [],
  },
};

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    getEpisodesAction: (state, { payload }) => {
      state.episodes.info = payload.info;
      state.episodes.data = payload.results;
    },
    getCharacterssAction: (state, { payload }) => {
      state.characters.info = payload.info;
      state.characters.data = payload.results;
    },
    getLocationsAction: (state, { payload }) => {
      state.locations.info = payload.info;
      state.locations.data = payload.results;
    },
  },
});

export const { getEpisodesAction, getCharacterssAction, getLocationsAction } =
  moviesSlice.actions;

export default moviesSlice.reducer;
