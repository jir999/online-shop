import { createStore, applyMiddleware, combineReducers } from "redux";
import { restaurantsData, dropDownData } from "./reducers";
import thunk from "redux-thunk";

const reducer = combineReducers({ restaurantsData, dropDownData });
//const enhancer = applyMiddleware(thunk);

//const store = createStore(reducer, {}, enhancer);
const store = createStore(reducer);

export default store;