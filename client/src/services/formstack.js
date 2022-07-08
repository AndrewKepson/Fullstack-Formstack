import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const formstackApi = createApi({
  reducerPath: 'formstackApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `http://localhost:3001/forms`
    // prepareHeaders: (headers, { getState }) => {
    //   const token = getState().user.formstackAccessToken

    //   if (token) {
    //     headers.set('authorization', `Bearer ${token}`)
    //   }

    //   return headers
    // }
  }),
  endpoints: build => ({
    getForms: build.query({
      query: token => `/${token}`
    }),
    getForm: build.query({
      query: ({ id, token }) => `/${id}/${token}`
    }),
    getFormSubmissions: build.query({
      query: ({ id, token }) => `/${id}/submissions/${token}`
    })
  })
})

export const { useGetFormsQuery, useGetFormQuery, useGetFormSubmissionsQuery } =
  formstackApi
