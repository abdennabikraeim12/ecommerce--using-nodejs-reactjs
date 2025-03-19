import {combineReducers, configureStore, createReducer} from "@reduxjs/toolkit"
import  userReducer from "./userredux"

import {persistStore,persistReducer,FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER,} from 'redux-persist'
import carteReducer from "./cardRedux"
import storage from 'redux-persist/lib/storage'
const persistConfig = {
    key: 'root',
    version: 1,
    storage,
}
const routeReducer = combineReducers({
    user :userReducer,
    cart :carteReducer

})//cest un code de cobinaisonentre userreduser et carte reducer 
const persistedReducer = persistReducer(persistConfig,routeReducer)

export const store = configureStore({

    reducer:persistedReducer,

    middleware:(getDefaultMiddleware)=>
    getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),

   
    

})

export let persistor = persistStore(store)