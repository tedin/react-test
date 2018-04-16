import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
//import 'semantic-ui-css/semantic.min.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from "./App";
import {saveState} from "./common/localStorage";
import {throttle} from 'lodash';
//import 'loaders.css/loaders.min.css';

const store = configureStore();
/*store.subscribe(throttle(() => {
    saveState({
        users: store.getState().users
    });
}, 1000));*/
store.subscribe(() => {
    console.log("state changed");
    saveState({
        users: store.getState().users
    });
});
//store.dispatch(userActions.getUsers());


ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider>
            <App/>
        </MuiThemeProvider>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
