/* До рефакторинга 
import { combineReducers } from "redux";
import types from '../phonebook/phonebook-types';


const items = (state = [], { type, payload }) => {
    switch (type) {
        case types.ADD_CONTACT:
            return [ payload, ...state ]
        case types.REMOVE_CONTACT:
            return state.filter(({ id }) => id !== payload)
        default:
            return state;
    }
};

const filter = (state = '', { type, payload }) => {
    switch (type) {
        case types.FILTER_CONTACT:
            return payload;
        
        default:
            return state;
    };
};

export default combineReducers({
  items,
  filter,
}); */


/* ------------ Redux Toolkit --------------- */

import { combineReducers } from "redux";
import { createReducer } from '@reduxjs/toolkit';
import actions from '../phonebook/phonebook-actions';

const items = createReducer([], {
    [actions.addContact]: (state, {payload}) => [payload, ...state],
    [actions.removeContact]: (state, {payload}) => [state.filter(({ id }) => id !== payload)]
})

const filter = createReducer('', {
    [actions.filterContact]: (_, {payload}) => payload,
})

export default combineReducers({
  items,
  filter,
});