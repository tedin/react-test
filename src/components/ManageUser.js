import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as userActions from '../actions/userActions';
import {Button, Form, Input} from 'semantic-ui-react';


const ManageUser = (props) => {
    console.log(props.match.params.id);
    const onSubmit = (e) => {
        e.preventDefault();
        let newUser = {
            name: e.target.elements.name.value,
            username: e.target.elements.username.value,
            email: e.target.elements.email.value
        };
        this.props.actions.createUser(newUser);
    };
    return (
        <div>
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
        </div>
    )

};

ManageUser.defaultProps = {
    //name: "test"
};

ManageUser.propTypes = {
    //users: PropTypes.array.isRequired,
    //createUser: PropTypes.func.isRequired
    //actions: PropTypes.object

};

function mapStateToProps(state, props) {
    return {
        users: state.users
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(userActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageUser)