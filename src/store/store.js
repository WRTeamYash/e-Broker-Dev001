import { combineReducers, configureStore } from '@reduxjs/toolkit'
import settingsReducer from "./reducer/settingsSlice"
import api from './middleware/api'


const rootReducer = combineReducers({
  Settings: settingsReducer,
 
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: [
    api
  ]
})

export const persistor = store;
