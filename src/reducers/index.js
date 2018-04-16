import {combineReducers} from 'redux';
import users from './userReducer';
import snackBar from './snackBarReducer'
import confirmDialog from './confirmDialogReducer';
import customLoader from './customLoaderReducer';
import sidebar from './sidebarReducer';
import {routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({
    users,
    snackBar,
    confirmDialog,
    customLoader,
    sidebar,
    router: routerReducer
});

export default rootReducer;
