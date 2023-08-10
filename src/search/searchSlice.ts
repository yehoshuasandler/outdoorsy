import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { SearchRequest } from './types'
import { sanitizeUserInputString } from '../utils/sanatizeUserInput'

const initialState: SearchRequest = {
  filterKeywords: [],
  limit: 10,
  offset: 0,
}

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    addKeyword: (state, action: PayloadAction<string>) => {
      const sanitizedKeyword = sanitizeUserInputString(action.payload)
      const slicedKeywords = sanitizedKeyword.split(' ');
      const uniqueKeywords = slicedKeywords.filter(w => {
        return !state.filterKeywords.includes(sanitizedKeyword)
      })


      state.filterKeywords = [...state.filterKeywords, ...uniqueKeywords]
      console.log('New keywords ', state.filterKeywords)
    }
  }
})

export const { addKeyword } = searchSlice.actions

export default searchSlice.reducer
