import axios from "axios";
import { AppDispatch } from "./store";
import { getCharacterssAction, getEpisodesAction } from "./slice";

export const getEpisodes = () => async (dispatch: AppDispatch) => {
  try {
    const res = await axios.get("https://rickandmortyapi.com/api/episode");
    dispatch(getEpisodesAction(res.data.results));
  } catch (error) {
    console.log(error);
  }
};

export const getCharacters =
  (page: number, name?: string, status?: string, gender?: string) =>
  async (dispatch: AppDispatch) => {
    try {
      const res = await axios.get(
        `https://rickandmortyapi.com/api/character/?page=${page}&name=${name}&status=${status}&gender=${gender}`
      );

      dispatch(getCharacterssAction(res.data));
    } catch (error) {
      console.log(error);
    }
  };

// export const getLocations = () => async (dispatch: AppDispatch) => {
//   try {
//     const res = await axios.get("");
//     dispatch(getEpisodesAction(res.data));
//   } catch (error) {
//     console.log(error);
//   }
// };
