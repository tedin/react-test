import * as actionTypes from './actionTypes';

export function showSnackBar(options) {
    // noinspection JSAnnotator
    return {type: actionTypes.SHOW_SNACKBAR, payload: options};
}

export function hideSnackBar() {
    return {type: actionTypes.HIDE_SNACKBAR, payload: {open: false}}
}