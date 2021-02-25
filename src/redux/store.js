/* До рефакторина 
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, combineReducers } from "redux";
import phoneReducer from './phonebook/phonebook-reducer';



const rootReducer = combineReducers({
  contacts: phoneReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store; */


/* ------------ Redux Toolkit --------------- */

import { configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import logger from 'redux-logger';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER} from 'redux-persist';
import phoneReducer from './phonebook/phonebook-reducer';
import storage from 'redux-persist/lib/storage';

const contactsPersistConfig = {
    key: 'contacts',
    storage,
    blacklist: ['filter'],
}

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }), logger];

const store = configureStore({
  reducer: {
    contacts: persistReducer(contactsPersistConfig, phoneReducer),
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

const persistor = persistStore(store);

export default { store, persistor };
