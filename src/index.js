import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ManageUsers from './components/ManageUsers';
import ManageUser from './components/ManageUser';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

const store = configureStore();
//store.dispatch(getUsers());

ReactDOM.render(
    <Provider store={store}>
        {/*<App/>*/}
        <BrowserRouter>
            <Switch>
                <Route exact path={'/'} component={App}/>
                <Route exact path={'/manage'} component={ManageUsers}/>
                <Route path={'/manage/:id'} component={ManageUser}/>
                <Route path={'/params'} render={(props) => {
                    const params = new URLSearchParams(props.location.search);
                    console.log(params.get("name"));
                    return (<pre>PARAMS</pre>)
                }}/>
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
