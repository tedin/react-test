import {combineReducers} from 'redux';
import users from './userReducer';
import snackBar from './snackBarReducer'
import confirmDialog from './confirmDialogReducer';

const rootReducer = combineReducers({
    users,
    snackBar,
    confirmDialog
});

export default rootReducer;