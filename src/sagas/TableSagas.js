import {put, call,takeEvery,all,takeLatest} from 'redux-saga/effects'
import * as api from '../fakeApi'
import {editUserDataType, editUserSucceededType,
    editUserFailedType, initUserDataType,
    initUserSucceededType,initUserFailedType,editUserSubmitedType } from "../store/reducerForSaga"


function *editUser(){
    yield takeEvery('EDIT_USERS', callEditUser)
}

function * editUserSubmit() {
    yield takeLatest(editUserSucceededType, callEditUserSubmit)

}

function *callEditUserSubmit({user}) {
    console.log('saga-edit-submit');
    console.log(user);
    yield call(api.editUser, user);
    yield put({type: editUserSubmitedType, users: user})
}

function *callEditUser({user}) {
    try {
        console.log('saga-edit');
        yield put({type:editUserDataType});
       // yield call(api.editUser, user);
       // yield put({type: editUserSucceededType, user})
    } catch (e) {
        yield put({type: editUserFailedType})
    }
}

function *initUser(){
    yield takeEvery('INIT_USERS', callInitUsers)
}

function *callInitUsers() {
    try {
        console.log('saga-init');
        //yield put({type:initUserDataType});
        const users = yield call(api.getUsers);
        yield put({type:'INIT_USER_SUCCEEDED', users})
    } catch (e) {
        yield put({type: initUserFailedType})
    }
}

export default function* rootSaga() {
    yield all([
        editUser(),
        initUser(),
        editUserSubmit()
        ]
    )
}
