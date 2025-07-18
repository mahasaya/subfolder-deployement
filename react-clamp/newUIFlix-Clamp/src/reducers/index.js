import { combineReducers } from "redux";
import flixReducer from "../Slice/FlixSlice"
const rootReducer = combineReducers({
    flixParams:flixReducer
})

export default rootReducer