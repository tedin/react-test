import {confirmDialogInitialState} from "./initialState";

export default function (state = confirmDialogInitialState, action) {
    switch (action.type) {
        case "OPEN_CONFIRM_DIALOG":
            return Object.assign({}, action.payload, {open: true});
        case "CLOSE_CONFIRM_DIALOG":
            return Object.assign({}, state, {open: false});
        default:
            return state;
    }
}