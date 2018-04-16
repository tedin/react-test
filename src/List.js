import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as userActions from './actions/userActions';
import * as snackBarActions from './actions/snackBarActions';
import * as dialogActions from './actions/dialogActions';
import {NotificationManager} from 'react-notifications';
import {Link} from "react-router-dom";
import {FlatButton} from 'material-ui';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn,} from 'material-ui/Table';
import {push} from 'react-router-redux'


const TestComponent = (props) => <h1>Are you sure you want do delete {props.name}?</h1>;


class List extends Component {
    handleClick = () => {
        this.props.showSnackBar({message: "Event emitted"});

    };


    deletePerson = p => {
        this.props.confirmDialog.openConfirmDialog({
            title: "Please confirm", onSubmit: (data) => {
                this.props.actions.deleteUser(p.id).then(() => {
                        NotificationManager.success("Success", "Title");
                    }
                );
            }, onCancel: (data) => {
                console.log("from cancel data", data);
            }, content: <TestComponent name={p.firstName}/>
        })/*.then(res => {
            debugger;
            console.log(res);
        }).catch(err => {
            debugger;
            console.log(err);
        })*/;
        /*this.props.actions.deleteUser(p.id).then(() => {
                //NotificationManager.success("Success", "Title");

            }
        );*/

    };

    submitForm = e => {
        e.preventDefault();

        let newUser = {
            name: e.target.elements.name.value,
            username: e.target.elements.username.value,
            email: e.target.elements.email.value,
            phone: e.target.elements.phone.value
        };
        //this.props.createUser(newUser);//TODO old way
        debugger;
        this.props.actions.createUser(newUser);
        //this.setState({users: this.state.users.concat(dataForSend)});
    };
    justEvent = e => {
        alert(JSON.stringify(e.nativeEvent));
    };

    constructor(props) {
        super(props);
        this.state = {
            items: ["prvi", "drugi", "treci"],
            result: {},
            inputResult: '',
            user: {
                id: 0,
                name: '',
                username: '',
                email: '',
                phone: ''
            },
            isLoaded: false,
            modalOpen: false,
            autoHideDuration: 2000,
            message: 'Event added to your calendar',
            open: false,
        };
    }

    componentDidMount() {
        /*axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(res => {
                const users = res.data;
                this.setState({users, isLoaded: true});
            })*/

        /*axios.get("/users").then(res => {
            console.log(res);
        }).catch(err => {
            console.log(err);
        });*/
        console.log("PROPS", this.props);
        this.props.actions.getUsers().then((res) => {
            console.log("in list", res);
        }).catch(err => {
            console.log(err);
        });
        this.props.goTo();
    }

    editPerson(e, p) {
        alert("Edit" + JSON.stringify(p));
    };

    render() {
        let params = new URLSearchParams(this.props.location.search);
        for (let param of params)
            console.log(param);
        return (
            <div>
                <Table selectable={false}>
                    <TableHeader enableSelectAll={false} displaySelectAll={false} adjustForCheckbox={false}>
                        <TableRow selectable={false}>
                            <TableHeaderColumn>Id</TableHeaderColumn>
                            <TableHeaderColumn>First name</TableHeaderColumn>
                            <TableHeaderColumn>Last name</TableHeaderColumn>
                            <TableHeaderColumn>Username</TableHeaderColumn>
                            <TableHeaderColumn>Email</TableHeaderColumn>
                            <TableHeaderColumn>Phone</TableHeaderColumn>
                            <TableHeaderColumn>Actions</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody selectable={false} displayRowCheckbox={false}>
                        {this.props.users.map((p, index) =>
                            <TableRow key={index} selectable={false}>
                                <TableRowColumn>{p.id}</TableRowColumn>
                                <TableRowColumn>{p.firstName}</TableRowColumn>
                                <TableRowColumn>{p.lastName}</TableRowColumn>
                                <TableRowColumn key={p.username}>{p.username}</TableRowColumn>
                                <TableRowColumn key={p.email}>{p.email}</TableRowColumn>
                                <TableRowColumn key={p.phone}>{p.phone}</TableRowColumn>
                                <TableRowColumn>
                                    <FlatButton primary={true}><Link to={{
                                        pathname: '/manage/3',
                                        state: p
                                    }
                                    }>EDIT</Link>
                                    </FlatButton>
                                    <FlatButton secondary={true}
                                                onClick={() => this.deletePerson(p)}>DELETE</FlatButton>
                                    <FlatButton onClick={this.handleClick}>Event</FlatButton>
                                </TableRowColumn>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
                {/*<Form onSubmit={this.submitForm}>
                    <Form.Field>
                        <TextField floatingLabelText={"Name"} name={"name"} type={"text"} hintText={"Enter name"}/>
                    </Form.Field>
                    <Form.Field>
                        <TextField floatingLabelText={"Username"} name={"username"} type={"text"}
                                   hintText={"Enter username"}/>
                    </Form.Field>
                    <Form.Field>
                        <TextField floatingLabelText={"Email"} name={"email"} type={"text"}
                                   hintText={"Enter email"}/> <br/>
                    </Form.Field>
                    <Form.Field>
                        <TextField floatingLabelText={"Phone"} name={"phone"} type={"text"}
                                   hintText={"Enter phone"}/> <br/>
                    </Form.Field>
                    <FlatButton type={"submit"}>Submit</FlatButton>
                </Form>

                <ul>
                    <li>
                        <Link to={`${this.props.match.url}/other`}>{`${this.props.match.url}/other`}</Link>
                    </li>
                </ul>

                <Route path={`${this.props.match.url}/other`} render={(props) =>
                    const params = new URLSearchParams(props.location.search);
                    params.forEach(key => console.log(key));
                     (<pre>PARAMS</pre>)
                }/>*/}
            </div>
        )

    }
}

List.defaultProps = {
    name: "test"
};

List.propTypes = {
    users: PropTypes.array.isRequired,
    //createUser: PropTypes.func.isRequired
    actions: PropTypes.object
};

function mapStateToProps(state, props) {
    return {
        users: state.users,
        snackBar: state.snackBar,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        //createUser: user => dispatch(userActions.createUser(user))
        actions: bindActionCreators(userActions, dispatch),
        ...bindActionCreators(snackBarActions, dispatch),
        confirmDialog: bindActionCreators(dialogActions, dispatch),
        goTo: () => dispatch(push('/'))

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(List)
