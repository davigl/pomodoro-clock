import { createStore, combineReducers } from "redux";

import settingsReducer from "../reducers/settings";

const rootReducer = combineReducers({
  settings: settingsReducer
});

const store = createStore(rootReducer);

export default store;
