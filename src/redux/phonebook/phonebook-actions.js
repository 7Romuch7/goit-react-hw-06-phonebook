/* До рефакторинга
import types from '../phonebook/phonebook-types';
import shortid from 'shortid';

export const addContact = (name, number) => ({
    type: types.ADD_CONTACT,
    payload: { id: shortid.generate(), name, number},
});

export const removeContact = id => ({
    type: types.REMOVE_CONTACT,
    payload: id,
});

export const filterContact = value => ({
    type: types.FILTER_CONTACT,
    payload: value,
});

export default {addContact, removeContact, filterContact} */


/* ------------ Redux Toolkit --------------- */

import { createAction } from '@reduxjs/toolkit';
import shortid from 'shortid';

const addContact = createAction('phonebook/Add', (name, number) => ({
     payload: { id: shortid.generate(), name, number},
}));

const removeContact = createAction('phonebook/Delete');

const filterContact = createAction('phonebook/Filter');

export default {addContact, removeContact, filterContact}