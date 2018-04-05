import * as actionTypes from '../actions/actionTypes';
import * as initialState from './initialState';

export default function snackBarReducer(state = initialState.snackBarInitialState, action) {
    switch (action.type) {
        case actionTypes.SHOW_SNACKBAR:
            debugger;
            return {...state, ...action.payload, ...{open: true}};
        case actionTypes.HIDE_SNACKBAR:
            return {...state, ...action.payload};
        default:
            return state;
    }
}