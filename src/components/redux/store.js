import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
// import { composeWithDevTools } from "redux-devtools-extension";
import contactsReducer from "./reducer";
import storage from "redux-persist/lib/storage";
import authReducer from "./auth/auth-slice";
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

console.log(process.env.NODE_ENV);

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
  blacklist: ["filter"],
};
export const store = configureStore({
  reducer: {
    // phonebook: persistReducer(phonebookPersistConfig, contactsReducer),
    auth: persistReducer(authPersistConfig, authReducer),
    phonebook: contactsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(logger),
  devTools: process.env.NODE_ENV === "development",
});

export const persistor = persistStore(store);

// export default { store, persistor };

// const rootReducer = combineReducers({
//   // phonebook: contactsReducer,
//   phonebook: persistReducer(persistConfig, contactsReducer),
// });
// const persistedReducer = persistReducer(persistConfig, rootReducer);
// const rootReducer = combineReducers({
//   phonebook: contactsReducer,
// });
// const store = createStore(
//   rootReducer,
//   composeWithDevTools()
// );
// console.log(getDefaultMiddleware());
// const middlewere = [...getDefaultMiddleware(), logger];

// const myMiddlewere = (store) => (next) => (action) => {
//   console.log("Моя прослойка", action);
//   next(action);
// };
