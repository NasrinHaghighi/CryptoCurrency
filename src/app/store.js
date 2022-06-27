import { configureStore } from '@reduxjs/toolkit'
import { cryptoApi } from '../servises/cryptoApi'
import { cryptoNewsApi } from '../servises/newsApi'

export const store = configureStore({
    reducer: {
        [cryptoApi.reducerPath]: cryptoApi.reducer,
        [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
    },
})