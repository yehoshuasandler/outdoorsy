import { configureStore } from '@reduxjs/toolkit'
import searchSlice from './search/searchSlice'
import propertyListSlice from './propertyList/propertyListSlice'

export const store = configureStore({
  reducer: {
    search: searchSlice,
    properties: propertyListSlice
  }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
