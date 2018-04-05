import React from 'react';
import {Route, Switch} from 'react-router-dom';
import ManageUser from "./components/ManageUser";
import Home from "./components/Home";
import List from "./List";

export default function () {
    return (
        <Switch>
            <Route exact path={'/'} component={Home}/>
            <Route exact path={"/manage"} component={List}/>
            <Route path={'/manageuser'} component={ManageUser}/>
            {/*<Route exact path={'manage'} component={ManageUsers}/>
                <Route path={'params'} render={(props) => {
                    const params = new URLSearchParams(props.location.search);
                    params.forEach(key => console.log(key));
                    return (<pre>PARAMS</pre>)
                }}/>*/}
        </Switch>
    );
}
