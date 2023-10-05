
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import {persistStore, persistReducer} from 'redux-persist'
import settingsReducer from "./reducer/settingsSlice"
import authReducer from './reducer/authSlice';
import languageSlice from './reducer/languageSlice';
import filterDataReducer from './reducer/filterDataSlice';
import api from './middleware/api'
import storage from 'redux-persist/lib/storage' 


const persistConfig = {
  key: 'root',
  storage,
}
const rootReducer = combineReducers({
  Settings: settingsReducer,
  User_signup: authReducer,
  Language: languageSlice,
  filterData: filterDataReducer,
  // ProfileData: userProfileSlice,
 
});

export const store = configureStore({
  reducer: persistReducer(persistConfig, rootReducer),
  middleware: [
    api
  ]
  
})

export const persistor = persistStore(store);
