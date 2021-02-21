import { combineReducers } from "redux";
import types from '../phonebook/phonebook-types';


const items = (state = [], { type, payload }) => {
    switch (type) {
        case types.ADD_CONTACT:
            return [ ...state, payload ]
        case types.REMOVE_CONTACT:
            return state.filter(({ id }) => id !== payload)
        default:
            return state;
    }
};

const filter = (state = '', { type, payload }) => {
    switch (type) {
        case types.CHANGE_FILTER:
            return payload;
        
        default:
            return state;
    };
};

export default combineReducers({
  items,
  filter,
});