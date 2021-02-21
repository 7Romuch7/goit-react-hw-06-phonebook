import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, combineReducers } from "redux";
import phoneReducer from './phonebook/phonebook-reducer';



const rootReducer = combineReducers({
  phonebook: phoneReducer
});

const store = createStore(rootReducer, composeWithDevTools());
/* export default combineReducers({
    phoneReducer,
    filter,
}); */
export default store;
