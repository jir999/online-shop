import { createStore, applyMiddleware, combineReducers } from "redux";
import { Restaurants } from "./reducers";
import thunk from "redux-thunk";

const reducer = combineReducers({ Restaurants });
const enhancer = applyMiddleware(thunk);

const store = createStore(reducer, {}, enhancer);

export default store;