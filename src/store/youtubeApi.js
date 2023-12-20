import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const gymApiHeaders = {
  'X-RapidAPI-Key': '7d9d7b8fefmsh9223a6138c4bc68p12fc40jsne1eaf8437851',
  'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
};

const makeApiCall = (url) => ({
  url,
  headers: gymApiHeaders,
});

const baseUrl = 'https://youtube-search-and-download.p.rapidapi.com';

export const youtubeApi = createApi({
  reducerPath: 'youtubeApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getYoutube: builder.query({
      query: (qry) => makeApiCall(`/search?query=${qry}`),
    }),
  }),
});

export const { useGetYoutubeQuery } = youtubeApi;