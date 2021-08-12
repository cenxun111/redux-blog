import { configureStore } from '@reduxjs/toolkit'
import loginReducer from '../redux-toolkit/authSlice'
import postReducer from '../redux-toolkit/postSlice'
import wordReducer from '../redux-toolkit/wordSlice'
export const store = configureStore({
  reducer: {
      login: loginReducer,
      posts: postReducer,
      words:wordReducer
  },
})