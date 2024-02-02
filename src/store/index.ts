import { configureStore } from "@reduxjs/toolkit";

import { giphyApi } from "./giphy/giphy.api";
import tiktokReducer from "./giphy/giphySlice"

export const store = configureStore({
    reducer: {
        [giphyApi.reducerPath]: giphyApi.reducer,
        tiktok: tiktokReducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(giphyApi.middleware)
})