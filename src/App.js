import React, {Component} from 'react';
import 'react-notifications/lib/notifications.css';
import {NotificationContainer} from 'react-notifications';
import Sidebar from "./components/Sidebar";
import {AppBar} from 'material-ui';
import Routes from './routes';
import Snack from "./UIComponents/Snack";
import ConfirmDialog from "./UIComponents/ConfirmDialog";
import CustomLoader from './UIComponents/CustomLoader';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as sidebarActions from "./actions/sidebarActions";
import {ConnectedRouter} from 'react-router-redux';
import {history} from './store/configureStore';


class App extends Component {
    render() {
        return (
            <ConnectedRouter history={history}>
                <div>
                    <Sidebar/>
                    <CustomLoader/>
                    <AppBar
                        title="Title"
                        iconClassNameRight="muidocs-icon-navigation-expand-more"
                        onLeftIconButtonClick={this.props.sidebarActions.openSidebar}/>

                    <div onClick={this.props.sidebarActions.closeSidebar}>
                        <Routes/>
                        <NotificationContainer/>
                        <Snack/>
                        <ConfirmDialog/>
                    </div>
                </div>
            </ConnectedRouter>
        );
    }
}


function mapStateToProps(state, props) {
    return {
        sidebar: state.sidebar
    }
}

function mapDispatchToProps(dispatch) {
    return {
        sidebarActions: bindActionCreators(sidebarActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
