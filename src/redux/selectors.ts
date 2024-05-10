import { RootState } from "./store";

export const episodesSelector = (state: RootState) => state.movies.episodes;

export const charactersSelector = (state: RootState) =>
  state.movies.characters.data;
export const infoSelector = (state: RootState) => state.movies.characters.info;

export const locationsSelector = (state: RootState) => state.movies.locations;
