"use client"
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import {persistStore, persistReducer} from 'redux-persist'
// import storage from '../utils/storage';
import settingsReducer from "./reducer/settingsSlice"
import authReducer from './reducer/authSlice';
import languageSlice from './reducer/languageSlice';
import api from './middleware/api'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web


const persistConfig = {
  key: 'root',
  storage,
}
const rootReducer = combineReducers({
  Settings: settingsReducer,
  User_signup: authReducer,
  Language: languageSlice, // Import the reducer correctly
 
});

export const store = configureStore({
  reducer: persistReducer(persistConfig, rootReducer),
  middleware: [
    api
  ]
  
})

export const persistor = persistStore(store);
