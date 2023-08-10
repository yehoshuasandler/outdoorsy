import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { PropertyListing } from './types'

const initialState: {listings: PropertyListing[] } = {
  listings: []
}

export const propertyListSlice = createSlice({
  name: 'propertyList',
  initialState,
  reducers: {
    setProperties: (state, action: PayloadAction<PropertyListing[]>) => {
      state.listings = action.payload
    }
  }
})

export const { setProperties } = propertyListSlice.actions

export default propertyListSlice.reducer
