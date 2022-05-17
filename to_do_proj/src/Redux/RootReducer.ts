import {combineReducers, createStore} from "redux";
import {createStoreHook} from "react-redux";
import AppReducer from "./Reducers/AppReducer";


export const rootReducer = combineReducers({
    App: AppReducer
})