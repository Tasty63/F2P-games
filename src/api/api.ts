import { createApi, fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react"
import { GameDetailsType, GameInfoType, GamesFilterParameters } from "../config/types"
import { BASE_URL } from "../config/constants"
import { hasOnlyNullProperties } from "../config/utils";

const staggeredBaseQuery = retry(fetchBaseQuery({
  baseUrl: BASE_URL,
  prepareHeaders: (headers) => {
    headers.set('X-RapidAPI-Key', 'dd0eaff9f0msh5f0a74c32e31f56p17072fjsn929699798dae');
    headers.set('X-RapidAPI-Host', 'free-to-play-games-database.p.rapidapi.com');

    return headers;
  }
}), {
  maxRetries: 3,
})

export const gamesApi = createApi({
  reducerPath: 'gamesApi',
  baseQuery: staggeredBaseQuery,
  endpoints: (builder) => ({
    getGames: builder.query<GameInfoType[], GamesFilterParameters>({
      query: (args) => {

        if (hasOnlyNullProperties(args)) {
          return 'games';
        }

        const { platform, category, sortBy } = args;

        let queryString = 'games?';

        if (platform) {
          queryString += `platform=${platform}&`;
        }
        if (category) {
          queryString += `category=${category}&`;
        }
        if (sortBy) {
          queryString += `sort-by=${sortBy}`;
        }

        return queryString;
      }
    }),

    getGameDetailsById: builder.query<GameDetailsType, string>({
      query: (gameId) => `game?id=${gameId}`,
    }),
  })
})

export const {
  useGetGamesQuery,
  useGetGameDetailsByIdQuery,
} = gamesApi

