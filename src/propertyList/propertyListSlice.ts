import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { PropertyListing } from './types'

const initialState: PropertyListing[] = [{
  id: 1,
  name: 'Property 1',
  description: 'This is a description of property 1',
  imageSrc: 'https://via.placeholder.com/150',
}]

export const propertyListSlice = createSlice({
  name: 'propertyList',
  initialState,
  reducers: {
    setProperties: (state, action: PayloadAction<PropertyListing[]>) => {
      state = action.payload
    }
  }
})

export const { setProperties } = propertyListSlice.actions

export default propertyListSlice.reducer
