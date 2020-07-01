import { combineReducers } from 'redux';
import { savedContact, deletedContactById, contactById, contacts } from './contacts';

export default combineReducers({
    savedContact,
    deletedContactById,
    contactById,
    contacts,

});