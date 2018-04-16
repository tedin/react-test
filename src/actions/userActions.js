import * as userApi from "../api/mockUserApi";
import {hideLoader, showLoader} from './customLoaderActions';

//const CREATE_USER = 'CREATE_USER';//this goes to separate actionTypes file
export function createUser(user) {
    return {type: "CREATE_USER", payload: user}
}

/*export function createUser(user) {
    return function (dispatch) {
        return userApi.addUser(user).then(res => {
            dispatch(createUserSuccess(res.data));
            //dispatch(createUser(user));
        }).catch(err => {
            throw err;
        })
    }
}*/

export function createUserSuccess(user) {
    return {type: "CREATE_USER_SUCCESS", payload: user};
}

export function updateUser(user) {
    return function (dispatch) {
        return userApi.updateUser(user).then(res => {
            dispatch(updateUserSuccess(res.data));
        }).catch(err => {
            throw err;
        })
    }
}

export function updateUserSuccess(user) {
    return {type: "UPDATE_USER_SUCCESS", payload: user};
}

export function loadUsersSuccess(users) {
    return {
        type: 'LOAD_USERS_SUCCESS',
        payload: users
    }
}

export function getUsers() {
    return function (dispatch, state) {
        dispatch(showLoader());
        return userApi.getUsers().then(res => {
            dispatch(hideLoader());
            //dispatch(loadUsersSuccess(res.data));
            dispatch(loadUsersSuccess(res.data));
            return Promise.resolve(res.data);
        }).catch(error => {
            dispatch(hideLoader());
            throw(error);
        })
    }
}

export function deleteUser(id) {
    return function (dispatch) {
        /*dispatch(userDeletedSuccess(id));
        return Promise.resolve();*/
        return userApi.deleteUser(id).then(res => {
            dispatch(userDeletedSuccess(id));
        }).catch(error => {
            throw(error);
        })
    }
}

export function userDeletedSuccess(id) {
    return {
        type: "USER_DELETED_SUCCESS", payload: id
    }
}
