import { configureStore } from '@reduxjs/toolkit'
import loginReducer from '../redux-toolkit/authSlice'
import postReducer from '../redux-toolkit/postSlice'
export const store = configureStore({
  reducer: {
      login: loginReducer,
      posts: postReducer
  },
})