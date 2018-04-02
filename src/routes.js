import React from 'react';
import {Route, Switch} from 'react-router-dom';
import ManageUsers from "./components/ManageUsers";
import App from "./App";

export default (
    <Switch>
        <Route>
            <Route exact component={App} path={'/'}/>
            <Route path={"/manage"} component={ManageUsers}/>
        </Route>
    </Switch>)