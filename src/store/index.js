import { createStore, applyMiddleware, combineReducers } from "redux";
import { restaurantsData, dropDownData, menuData, basketData } from "./reducers";
import thunk from "redux-thunk";

const reducer = combineReducers({ restaurantsData, dropDownData, menuData, basketData });
//const enhancer = applyMiddleware(thunk);

//const store = createStore(reducer, {}, enhancer);
const store = createStore(reducer);

export default store;