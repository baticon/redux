import { createStore, combineReducers, applyMiddleware } from "redux";
import cashReducer from "../store/cashReducer";
import customerReducer from "../store/customerReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk"; // this is for async (for fetch in my case)

const rootReducer = combineReducers({
  cashReducerKey: cashReducer,
  customerReducerKey: customerReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
