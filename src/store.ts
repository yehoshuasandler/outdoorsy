import { configureStore } from '@reduxjs/toolkit'
import searchSlice from './search/searchSlice'
import propertyListSlice from './propertyList/propertyListSlice'
import { searchApi } from './search/searchApi'
import { setupListeners } from '@reduxjs/toolkit/dist/query'

export const store = configureStore({
  reducer: {
    search: searchSlice,
    properties: propertyListSlice,
    [searchApi.reducerPath]: searchApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(searchApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

setupListeners(store.dispatch)
