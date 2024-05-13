import axios from "axios";
import { AppDispatch } from "./store";
import {
  getCharacterssAction,
  getEpisodesAction,
  getLocationsAction,
} from "./slice";
import { gql } from "@apollo/client";
import { client } from "@/components/layout/Providers";

export const getEpisodes = (page: number) => async (dispatch: AppDispatch) => {
  try {
    const res = await axios.get(
      `https://rickandmortyapi.com/api/episode/?page=${page}`
    );
    dispatch(getEpisodesAction(res.data));
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

export const getLocations = (page: number) => async (dispatch: AppDispatch) => {
  try {
    const res = await client.query({
      query: gql`
        query GetLocations($page: Int!) {
          locations(page: $page) {
            results {
              id
              name
              dimension
              type
            }
            info {
              pages
            }
          }
        }
      `,
      variables: {
        page: page,
      },
    });
    console.log(res);
    dispatch(getLocationsAction(res.data.locations));
  } catch (error) {
    console.log(error);
  }
};
