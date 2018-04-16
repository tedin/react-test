import {call, fork, put, takeLatest} from 'redux-saga/effects';
import axios from 'axios';


//Worker saga
export function* createUserAsync(action) {
    try {
        //call api
        console.log("attempting to get all users");
        console.log("action", action);
        //const response = yield call(axios.post, "https://jsonplaceholder.typicode.com/posts", action.payload);
        const response = yield call(axios.post, "/users", action.payload);
        console.log(response);

        yield put({type: 'SHOW_SNACKBAR'})
    } catch (e) {
        console.log("response failed", e);
        yield put({type: 'CREATE_USER_FAILED'})


    }
}

export function* loadUsersAsync() {
    try {
        const result = yield call(axios.get, "https://jsonplaceholder.typicode.com/posts");
        console.log(result);
        yield put({type: "LOAD_USER_SUCCESS", payload: result.data});
    } catch (e) {

    }
}


//Watcher saga
export function* watchUserCreate() {
    console.log('redux saga is running action listener');
    yield takeLatest('CREATE_USER', createUserAsync);
}

export function* watchUserGet() {
    yield takeLatest("LOAD_USERS", loadUsersAsync)
}

export default function* rootSaga() {
    yield [
        fork(watchUserCreate),
    ]
}
