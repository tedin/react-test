export function openConfirmDialog(options) {
    /*return function (dispatch) {
        dispatch({type: "OPEN_CONFIRM_DIALOG", payload: options});
        return Promise.resolve(options.)
    }*/
    return {type: "OPEN_CONFIRM_DIALOG", payload: options};
}

export function closeConfirmDialog() {
    return {type: "CLOSE_CONFIRM_DIALOG"};

}

export function handleOnSubmitInConfirmDialog(data) {
    return function (dispatch) {
        return Promise.resolve(data);
    }
}