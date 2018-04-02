import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {Button, Container, Form, Input, Table} from 'semantic-ui-react';
import ConfirmDialogModal from './ConfirmDialogModal';
import {connect} from 'react-redux';
import * as userActions from './actions/userActions';

class List extends Component {
    changeInput = ev => this.setState({inputResult: ev.target.value});
    deletePerson = p => {
        //alert("Delete" + JSON.stringify(p));
        this.setState({modalOpen: true});
    };
    handleModalClose = () => {
        this.setState({modalOpen: false});
        alert("modal closed");
    };
    submitForm = e => {
        e.preventDefault();
        console.log(e.target.elements.name.value);
        /*this.state.user = {
            name: e.target.elements.name.value,
            username: e.target.elements.username.value,
            email: e.target.elements.email.value
        };*/
        let newUser = {
            name: e.target.elements.name.value,
            username: e.target.elements.username.value,
            email: e.target.elements.email.value
        };
        //this.props.createUser(newUser);//TODO old way
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
            modalOpen: false
        };
    }

    componentDidMount() {
        /*axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(res => {
                const users = res.data;
                this.setState({users, isLoaded: true});
            })*/
        this.props.actions.getUsers();
    }

    editPerson(e, p) {
        console.log("event", e.nativeEvent);
        alert("Edit" + JSON.stringify(p));
        console.log(this.state);

    };

    render() {
        console.log(this.state);
        let {inputResult} = this.state;
        return (
            <div>
                {/*<Table>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>{"Id"}</Table.HeaderCell>
                            <Table.HeaderCell>{"Name"}</Table.HeaderCell>
                            <Table.HeaderCell>{"Username"}</Table.HeaderCell>
                            <Table.HeaderCell>{"Email"}</Table.HeaderCell>
                            <Table.HeaderCell>{"Phone"}</Table.HeaderCell>
                            <Table.HeaderCell>{"Actions"}</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {this.state.isLoaded ? this.state.users.map((p, index) =>
                            <Table.Row key={index}>
                                <Table.Cell>{p.id}</Table.Cell>
                                <Table.Cell>{p.name}</Table.Cell>
                                <Table.Cell key={p.username}>{p.username}</Table.Cell>
                                <Table.Cell key={p.email}>{p.email}</Table.Cell>
                                <Table.Cell key={p.phone}>{p.phone}</Table.Cell>
                                <Table.Cell>
                                    <Button size={"small"} positive onClick={(e) => this.editPerson(e, p)}>EDIT
                                    </Button>
                                    <Button size={"small"} negative onClick={() => this.deletePerson(p)}>DELETE</Button>
                                    <Button onClick={this.justEvent}>Event</Button>
                                </Table.Cell>
                            </Table.Row>
                        ) : <Table.Row>
                            <Table.Cell>{"Loading..."}</Table.Cell>
                        </Table.Row>}
                    </Table.Body>
                </Table>*/}
                <Table>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>{"Id"}</Table.HeaderCell>
                            <Table.HeaderCell>{"Name"}</Table.HeaderCell>
                            <Table.HeaderCell>{"Username"}</Table.HeaderCell>
                            <Table.HeaderCell>{"Email"}</Table.HeaderCell>
                            <Table.HeaderCell>{"Phone"}</Table.HeaderCell>
                            <Table.HeaderCell>{"Actions"}</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {this.props.users.map((p, index) =>
                            <Table.Row key={index}>
                                <Table.Cell>{p.id}</Table.Cell>
                                <Table.Cell>{p.name}</Table.Cell>
                                <Table.Cell key={p.username}>{p.username}</Table.Cell>
                                <Table.Cell key={p.email}>{p.email}</Table.Cell>
                                <Table.Cell key={p.phone}>{p.phone}</Table.Cell>
                                <Table.Cell>
                                    <Button size={"small"} positive onClick={(e) => this.editPerson(e, p)}>EDIT
                                    </Button>
                                    <Button size={"small"} negative onClick={() => this.deletePerson(p)}>DELETE</Button>
                                    <Button onClick={this.justEvent}>Event</Button>
                                </Table.Cell>
                            </Table.Row>
                        )}
                    </Table.Body>
                </Table>
                <Form onSubmit={this.submitForm}>
                    <Form.Field>
                        <label>First name</label>
                        <Input name={"name"} type={"text"} placeholder={"Enter name"}/>
                    </Form.Field>
                    <Form.Field>
                        <label>Username</label>
                        <Input name={"username"} type={"text"} placeholder={"Enter username"}/>
                    </Form.Field>
                    <Form.Field>
                        <label>Email</label>
                        <Input name={"email"} type={"email"} placeholder={"Enter email"}/> <br/>
                    </Form.Field>
                    <Button type={"submit"}>Submit</Button>
                </Form>
                <Container>
                    <p>{this.props.name}</p>
                </Container>
                <Input type={'text'} value={inputResult} onChange={(e) => this.changeInput(e)}/>
                <Container>
                    <pre>{inputResult}</pre>
                </Container>
                <ConfirmDialogModal header={"Header"} body={"Body"} open={this.state.modalOpen}
                                    handleClose={this.handleModalClose}/>
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
        users: state.users
    }
}

function mapDispatchToProps(dispatch) {
    return {
        //createUser: user => dispatch(userActions.createUser(user))
        actions: bindActionCreators(userActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(List)