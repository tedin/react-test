import * as userApi from "../api/mockUserApi";

const CREATE_USER = 'CREATE_USER';//this goes to separate actionTypes file
export function createUser(user) {
    return {type: CREATE_USER, payload: user}
}

export function loadUsersSuccess(users) {
    return {
        type: 'LOAD_USERS_SUCCESS',
        payload: users
    }
}

export function getUsers() {
    return function (dispatch) {
        return userApi.getUsers().then(users => {
            dispatch(loadUsersSuccess(users));
        }).catch(error => {
            console.log(error);
            throw(error);
        })
    }
}