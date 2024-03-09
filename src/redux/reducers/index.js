import { combineReducers } from "redux";
import { AddData } from "./AddData";
import { BgColor } from "./BgColor";
import { Counter } from "./Counter";

export const mainReducer = combineReducers({
    count:Counter,
    color:BgColor,
    Alldata:AddData
})
