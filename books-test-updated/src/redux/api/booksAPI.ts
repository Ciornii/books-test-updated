import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GoogleBook, GoogleBooksCollection} from "../../models/books";

const apiKey = "AIzaSyCSBhChQeia_4vfZwtSh0_R20IT8hHioY8";

export const booksApi = createApi({
  reducerPath: "booksApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://www.googleapis.com/books/v1/volumes",
  }),
  tagTypes: [],
  endpoints: (builder) => ({
    getBooksByName: builder.query<GoogleBooksCollection, string>({
      query: (name) => `?q=${name}&maxResults=28&key=${apiKey}`,
    }),
    getBookById: builder.query<GoogleBook, string>({
      query: (id) => `/${id}`,
    }),
  }),
});

// Export hooks for usage in functional components
export const { useGetBooksByNameQuery, useGetBookByIdQuery } = booksApi;
