import { combineReducers, createStore } from "redux";
import { valueReducer } from "./valueReducer";
import { composeWithDevTools } from '@redux-devtools/extension';
import { clientReducer } from "./clientReducer";

const rootReducer = combineReducers({
    valueReducer,
    clientReducer
})

export const store = createStore(rootReducer, composeWithDevTools())