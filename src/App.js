import React, {Component} from 'react';
import 'react-notifications/lib/notifications.css';
import {NotificationContainer} from 'react-notifications';
import {BrowserRouter} from 'react-router-dom';
import Sidebar from "./components/Sidebar";
import {AppBar} from 'material-ui';
import Routes from './routes';
import Snack from "./UIComponents/Snack";
import ConfirmDialog from "./UIComponents/ConfirmDialog";
import CustomLoader from './UIComponents/CustomLoader';

class App extends Component {
    state = {
        isOpen: false
    };
    contentStyle = {transition: 'margin-left 450ms cubic-bezier(0.23, 1, 0.32, 1)'};

    closeDrawer = () => this.setState({isOpen: false});

    openDrawer = () => this.setState({isOpen: true});

    render() {
        return (
            <BrowserRouter>
                <div>
                    <CustomLoader/>
                    <AppBar
                        title="Title"
                        iconClassNameRight="muidocs-icon-navigation-expand-more"
                        onLeftIconButtonClick={this.openDrawer}/>

                    <Sidebar isOpen={this.state.isOpen}/>

                    <div onClick={this.closeDrawer} style={this.contentStyle}>
                        <Routes/>
                        <NotificationContainer/>
                        <Snack/>
                        <ConfirmDialog/>
                    </div>


                </div>
            </BrowserRouter>
        );
    }
}

export default App;
