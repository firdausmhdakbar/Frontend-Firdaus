import {
    SAVE_CONTACT_REQUEST,
    DELETE_CONTACT_REQUEST,
    FIND_CONTACT_REQUEST,
    FIND_CONTACTS_REQUEST,
} from './constants';

export function save(data) {
    return {
        type: SAVE_CONTACT_REQUEST,
        data: data
    };
}

export function deleteById(id) {
    return {
        type: DELETE_CONTACT_REQUEST,
        id: id
    };
}

export function findById(id) {

    return {
        type: FIND_CONTACT_REQUEST,
        id: id
    };
}

export function findAll(params) {
    return {
        type: FIND_CONTACTS_REQUEST,
        params: params
    };
}

