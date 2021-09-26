import { combineReducers } from "redux";
import items from "./items/index";
import modal from "./modal/index";

const reducer = combineReducers({ items, modal });

export default reducer;
