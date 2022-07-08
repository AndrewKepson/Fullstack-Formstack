import { configureStore } from '@reduxjs/toolkit'

import { formstackApi } from '../services/formstack'
import { documentsApi } from '../services/documents'
import userReducer from '../features/auth'

export default configureStore({
  reducer: {
    [formstackApi.reducerPath]: formstackApi.reducer,
    [documentsApi.reducerPath]: documentsApi.reducer,
    user: userReducer,
  },
})
