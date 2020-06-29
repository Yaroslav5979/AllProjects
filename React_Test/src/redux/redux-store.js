import profileReducer from "./profileReducer";
import messageReducer from "./messageReducer";
import usersReducer from "./userReducer";
import authReducer from "./auth-reducer";

const { createStore, combineReducers } = require("redux");

let reducers = combineReducers({
  profilePost: profileReducer,
  messagePage: messageReducer,
  usersPage: usersReducer,
  auth: authReducer,
});

let store = createStore(reducers);

window.store = store;

export default store;
