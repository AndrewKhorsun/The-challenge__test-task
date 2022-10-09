import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { List } from "../types/List";

const BASE_URL = "https://5af1eee530f9490014ead8c4.mockapi.io/";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getList: builder.query<List[], void>({
      query: () => "items",
    }),
  }),
});

export const { useGetListQuery } = api;



