import { configureStore } from '@reduxjs/toolkit'
import { experience } from './experienceReduce'
import { portalSlice } from './PortalReduce'

export const {counterPercent} = experience.actions
export const store = configureStore({
  reducer: {experience: experience.reducer,portal: portalSlice.reducer}
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch