import { configureStore } from '@reduxjs/toolkit';
import { gymApi } from './gymApi';
import { youtubeApi } from './youtubeApi';


export default configureStore({
  reducer: {
    [gymApi.reducerPath]: gymApi.reducer,
    [youtubeApi.reducerPath]: youtubeApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      gymApi.middleware,
      youtubeApi.middleware,
    ]),
});