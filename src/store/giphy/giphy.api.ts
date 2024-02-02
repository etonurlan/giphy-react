import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { IGiphy, Datum } from "../../models/models"

export const giphyApi = createApi({
    reducerPath: "giphyApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://api.giphy.com/v1/gifs/" }),
    endpoints: (builder) => ({
        searchGiphy: builder.query<IGiphy<Datum>, string>({
            query: (name: string) => ({
                url: `/search/`,
                params: {
                    api_key: 'DCKWZpO4d9YJOVpwoFxRv25iiguR2rpF',
                    q: name,
                    limit: 9,
                }
            })
        }),
        trendingGiphy: builder.query<IGiphy<Datum>, number>({
            query: (limit: number) => ({
                url: `/trending/`,
                params: {
                    api_key: 'DCKWZpO4d9YJOVpwoFxRv25iiguR2rpF',
                    limit: limit
                }
            })
        }),
        randomGiphy: builder.query<IGiphy<Datum>, number>({
            query: () => ({
                url: `/random/`,
                params: {
                    api_key: 'DCKWZpO4d9YJOVpwoFxRv25iiguR2rpF',
                }
            })
        })
    })
})

export const { useSearchGiphyQuery, useTrendingGiphyQuery, useRandomGiphyQuery } = giphyApi