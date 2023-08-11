import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { SearchRequest, SearchResponse } from './types'

const defaultLimit = 10
const defaultOffset = 0

const makeRequestString = (requestProps: SearchRequest) => {
  const { filterKeywords, limit, offset } = requestProps
  const filterParam = `filter[keywords]=${filterKeywords.join('%20')}`
  const limitParam = `page[limit]=${limit || defaultLimit}`
  const offsetParam = `page[offset]=${offset ?? defaultOffset}`
  return `?${filterParam}&${limitParam}&${offsetParam}`
}

export const searchApi = createApi({
  reducerPath: 'searchApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://search.outdoorsy.com/rentals' }),
  endpoints: builder => ({
    getRentalsByKeywords: builder.query<SearchResponse, SearchRequest>({
      query: request => makeRequestString(request)
    })
  })
})

export const { useGetRentalsByKeywordsQuery } = searchApi