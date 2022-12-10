import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Note: Change v1 to v2 on rapid api

const cryptoApiHeaders = {
 'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
  'x-rapidapi-key': '977b57e6aemsh40b5acc6e61ce7ep1324bejsn43ea6de68dcf'
};

const baseUrl = 'https://coinranking1.p.rapidapi.com';
const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({ baseUrl}),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: () => createRequest ('/coins'),
    })

})
});

export const {
    useGetCryptosQuery,
} = cryptoApi;
