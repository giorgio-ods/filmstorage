import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer, FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER } from "redux-persist";
import storage from 'redux-persist/lib/storage'
import { movieApi } from "./movieApi";
import movieLibReducer from "./movieLibSlice";
import movieSearchReducer from "./movieSearch";

const rootReducer = combineReducers({
  [movieApi.reducerPath]: movieApi.reducer,
  addMovie: movieLibReducer,
  clearLibrary: movieLibReducer,
  deleteMovie: movieLibReducer,
  checkLibrary: movieLibReducer,
  searchValue: movieSearchReducer
})

const persistConfig = {
  key: 'root',
  storage,
  blacklist: [movieApi.reducerPath]
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    [...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }), movieApi.middleware],
 
});


export const persistor = persistStore(store);
export default store;

