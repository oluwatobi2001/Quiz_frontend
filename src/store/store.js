import React from "react";
import {combineReducers, configureStore} from '@reduxjs/toolkit'
import storage  from "redux-persist/lib/storage";
import {persistStore, persistReducer} from 'redux-persist'
import quizReducer from '../features/quiz/quiz'



const rootReducer  = combineReducers({
    quiz: quizReducer
})
const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer : persistedReducer
})

const persistor = persistStore(store)
export {store, persistor} ;
