import { combineReducers } from "redux";

import home from "./home";
import error from "./error";

export const rootReducer = combineReducers({
    home,
    error,
});