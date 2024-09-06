import { configureStore, combineReducers } from '@reduxjs/toolkit';
import projectSlice from './slice/project.slice';
import taskSlice from './slice/task.slice';
import {persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({ projectSlice, taskSlice });

const persistConfig = {
  key: 'root',
  storage,
  version: 1
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store)