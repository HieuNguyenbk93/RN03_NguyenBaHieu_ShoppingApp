import { applyMiddleware, combineReducers, createStore } from "redux";
import authenReducer from "./reducers/authenReducer";
import thunk from "redux-thunk";

const rootReducers = combineReducers({authenReducer});

export const store = createStore( rootReducers, applyMiddleware(thunk));