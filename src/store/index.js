import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "../reducers/index";

export default function configStore(state) {
  return createStore(reducers, state, applyMiddleware(thunk));
}
