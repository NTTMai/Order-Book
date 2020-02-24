import { combineReducers } from "redux";
import orderbookReducer from "../components/orderBook/reducer";

export default combineReducers({ orderbook: orderbookReducer });
