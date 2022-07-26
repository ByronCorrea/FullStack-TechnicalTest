import { configureStore, combineReducers } from "@reduxjs/toolkit";
import searchBarReducer from "./searchBar";
import storage from "redux-persist/lib/storage";
import storageSession from "redux-persist/lib/storage/session";
import userReducer from "./user";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  blacklist: ["searchBar"],
};

const seachBarPersistConfig = {
  key: "searchBar",
  version: 1,
  storage: storageSession,
};

const rootReducer = combineReducers({
  searchBar: persistReducer(seachBarPersistConfig, searchBarReducer),
  user: userReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
