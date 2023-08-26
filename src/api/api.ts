import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { GameInfoType } from "../config/types"
import { BASE_URL } from "../config/constants"

export const gamesApi = createApi({
  reducerPath: 'gamesApi',

  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,

  }),

  endpoints: (builder) => ({
    getGames: builder.query<GameInfoType[], void>({
      query: () => 'games',
    })
  })
})

export const { useGetGamesQuery } = gamesApi

// prepareHeaders: (headers) => {
//   headers.set('X-RapidAPI-Key', 'dd0eaff9f0msh5f0a74c32e31f56p17072fjsn929699798dae');
//   headers.set('X-RapidAPI-Host', 'free-to-play-games-database.p.rapidapi.com');

//   return headers;
// }