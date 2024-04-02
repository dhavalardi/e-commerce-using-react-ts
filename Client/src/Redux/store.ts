import { configureStore } from '@reduxjs/toolkit'
import getAllProductSlice from './slice/getAllProductSlice'
 


export const store = configureStore({
  reducer: {
    product:getAllProductSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch