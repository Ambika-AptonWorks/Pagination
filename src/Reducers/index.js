import { combineReducers } from "redux";
import Player1Reducer from "./Player1";
import Player2Reducer from "./Player2";

const reducer= combineReducers({
    Player1:Player1Reducer,
    player2:Player2Reducer
})

export default reducer
