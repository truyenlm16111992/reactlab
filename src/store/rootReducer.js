import { combineReducers } from "redux";
import { demoReduxReducer } from "./demoRedux/reducer";
import { baiTapPhoneReducer } from "./baiTapPhone/reducer";

export const rootReducer = combineReducers({
    demoRedux: demoReduxReducer,
    baiTapPhone: baiTapPhoneReducer,
});