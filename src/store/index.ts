import { applyMiddleware, combineReducers, createStore } from "redux";
import { valueReducer } from "./valueReducer";
import { composeWithDevTools } from '@redux-devtools/extension';
import { clientReducer } from "./clientReducer";
import thunk from "redux-thunk";
import { usersReducer } from "./usersReducer";
import { useDispatch } from "react-redux";

const rootReducer = combineReducers({
    valueReducer,
    clientReducer,
    usersReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;