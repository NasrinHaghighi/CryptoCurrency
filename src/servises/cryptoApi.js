import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders = {
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
    'X-RapidAPI-Key': '7951c0165cmshfe290aec2eb1024p16c87ajsne9691aa54bb4',

};
const baseUrl = 'https://coinranking1.p.rapidapi.com';
const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`),
        }),


    }),
});



export const {
    useGetCryptosQuery,

} = cryptoApi;

//   useGetCryptoDetailsQuery,
//   useGetExchangesQuery,
//   useGetCryptoHistoryQuery,