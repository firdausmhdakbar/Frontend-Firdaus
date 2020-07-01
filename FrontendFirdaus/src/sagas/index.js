import { all, fork } from 'redux-saga/effects';
import { watchFindContacts, watchFindContactById, watchDeleteContactById, watchSaveContact } from './contacts';


export default function* rootSaga() {
    yield all([
        fork(watchFindContacts),
        fork(watchFindContactById),
        fork(watchDeleteContactById),
        fork(watchSaveContact),

    ]);
}