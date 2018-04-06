import {combineReducers} from 'redux';
import users from './userReducer';
import snackBar from './snackBarReducer'
import confirmDialog from './confirmDialogReducer';
import customLoader from './customLoaderReducer';

const rootReducer = combineReducers({
    users,
    snackBar,
    confirmDialog,
    customLoader
});

export default rootReducer;