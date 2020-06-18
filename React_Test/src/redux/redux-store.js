import profileReducer from "./profileReducer";
import messageReducer from "./messageReducer";

const { createStore, combineReducers } = require("redux");

let reducers = combineReducers({
  profilePost: profileReducer,
  messagePage: messageReducer,
});

let store = createStore(reducers);

window.store = store;

export default store;
