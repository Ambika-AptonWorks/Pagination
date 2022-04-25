import {createStore,applyMiddleware} from 'redux'
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from './Reducers'

const Middleware=[thunk];

const Store=createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...Middleware))
)

export default Store;

