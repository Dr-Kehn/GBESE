import { combineReducers, configureStore } from "@reduxjs/toolkit";
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
import { api } from "./services/apiSlices";
import storage from "redux-persist/lib/storage";
import userEmailReducer from "@/redux/services/userEmailSlice";
import userReducer from './services/slices/UserSlice';


const persistConfig = {
  key: "root",
  storage,
  whitelist: ["global", "userEmail", "User"],
};

const rootReducer = combineReducers({
  userEmail: userEmailReducer,
  user: userReducer,
  [api.reducerPath]: api.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(api.middleware),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
