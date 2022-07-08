import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const documentsApi = createApi({
  reducerPath: 'documentsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `http://localhost:3001/documents`,
  }),
  endpoints: build => ({
    getDocuments: build.query({
      query: () => `/`,
    }),
    getDocument: build.query({
      query: id => `/${id}`,
    }),
  }),
})

export const { useGetDocumentsQuery, useGetDocumentQuery } = documentsApi
