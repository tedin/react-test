import React, {Component} from 'react';
import './App.css';
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import List from "./List.js";
import {Button} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import "./index.css";
import {Link} from 'react-router-dom';

class App extends Component {
    createNotification = (type) => {
        return () => {
            switch (type) {
                case 'info':
                    NotificationManager.info('Info message');
                    break;
                case 'success':
                    NotificationManager.success('Success message', 'Title here');
                    break;
                case 'warning':
                    NotificationManager.warning('Warning message', 'Close after 3000ms', 3000);
                    break;
                case 'error':
                    NotificationManager.error('Error message', 'Click me!', 5000, () => {
                        alert('callback');
                    });
                    break;
                default:
                    break;
            }
        };
    };

    render() {
        return (

            <div className='root'>
                <Link to={'/manage'}>{'Manage'}</Link>
                <Link to={'/manage/3'}>{'Manage with id'}</Link>
                <Link to={'/params?id=3&name=edin'}>{'Params'}</Link>
                <Button primary className='btn btn-info'
                        onClick={this.createNotification('info')}>Info
                </Button>
                <Button positive className='btn btn-success'
                        onClick={this.createNotification('success')}>Success
                </Button>
                <Button style={{backgroundColor: "orange", color: "white"}} className='btn btn-warning'
                        onClick={this.createNotification('warning')}>Warning
                </Button>
                <Button negative className='btn btn-danger'
                        onClick={this.createNotification('error')}>Error
                </Button>
                <Button onClick={() => this.setState({visible: true})}>Open modal</Button>
                <List/>
                <NotificationContainer/>
            </div>
        );
    }
}

export default App;
