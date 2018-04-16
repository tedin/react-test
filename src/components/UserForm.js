import React from 'react';
import {DatePicker, FlatButton, TextField} from "material-ui";
import * as userActions from "../actions/userActions";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

const UserForm = (props) => {

    const submitForm = e => {
        e.preventDefault();
        /* let fileName = e.target.elements.file.files[0].name;
         let fileSize = e.target.elements.file.files[0].size;
         let reader = new FileReader();*/
        let newUser = {
            id: props.location.state !== undefined ? props.location.state.id : null,
            firstName: e.target.elements.firstName.value,
            lastName: e.target.elements.lastName.value,
            username: e.target.elements.username.value,
            password: e.target.elements.password.value
            /*email: e.target.elements.email.value,
            phone: e.target.elements.phone.value,
            date: e.target.elements.date.value,
            file: null*/
        };
        props.actions.createUser(newUser);
        /*reader.onloadend = function () {
            newUser.file = {
                name: fileName,
                size: fileSize,
                content: reader.result
            };
            props.actions.createUser(newUser).then(() => {
                NotificationManager.success("Success", "Title");
                props.history.push({
                    pathname: '/'
                });
            }).catch(err => {
                console.log(err);
                NotificationManager.error("Error message", "Title");
            });
        };
        reader.readAsBinaryString(e.target.elements.file.files[0]);*/
        /* setInterval(() => {props.actions.createUser(newUser)}/!*.then(() => {
             /!*NotificationManager.success("Success", "Title");
             props.history.push({
                 pathname: '/'
             });*!/
         }).catch(err => {
             console.log(err);
             NotificationManager.error("Error message", "Title");
         })*!/, 300);*/
        /*props.actions.createUser(newUser).then(() => {
            /!*NotificationManager.success("Success", "Title");
            props.history.push({
                pathname: '/'
            });*!/
        }).catch(err => {
            console.log(err);
            NotificationManager.error("Error message", "Title");
        });*/


    };
    return (
        <form onSubmit={submitForm}>
            <TextField floatingLabelText={"First name"} name={"firstName"} type={"text"} hintText={"Enter first name"}/>
            <TextField floatingLabelText={"Last name"} name={"lastName"} type={"text"} hintText={"Enter last name"}/>
            <TextField floatingLabelText={"Username"} name={"username"} type={"text"}
                       hintText={"Enter username"}/>
            <TextField floatingLabelText={"Password"} name={"password"} type={"password"}
                       hintText={"Enter password"}/> <br/>
            {/*<TextField floatingLabelText={"Email"} name={"email"} type={"text"}
                       hintText={"Enter email"}/> <br/>
            <TextField floatingLabelText={"Phone"} name={"phone"} type={"text"}
                       hintText={"Enter phone"}/> <br/>*/}

            <DatePicker hintText="Date of birth" name={"date"}/>
            <input type={"file"} name={"file"}/>

            <FlatButton type={"submit"}>Submit</FlatButton>
        </form>
    );
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

export default connect(mapStateToProps, mapDispatchToProps)(UserForm)
