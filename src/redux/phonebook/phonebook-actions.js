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

export default {addContact, removeContact, filterContact}