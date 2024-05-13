import { RootState } from "./store";

export const episodesSelector = (state: RootState) =>
  state.movies.episodes.data;
export const episodesInfoSelector = (state: RootState) =>
  state.movies.episodes.info;

export const charactersSelector = (state: RootState) =>
  state.movies.characters.data;
export const characterInfoSelector = (state: RootState) =>
  state.movies.characters.info;

export const locationsSelector = (state: RootState) =>
  state.movies.locations.data;
export const locationsInfoSelector = (state: RootState) =>
  state.movies.locations.info;
