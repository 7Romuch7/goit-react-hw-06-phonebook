import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, combineReducers } from "redux";
import phoneReducer from './phonebook/phonebook-reducer';



const rootReducer = combineReducers({
  contacts: phoneReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
