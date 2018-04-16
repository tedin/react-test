import React from 'react';
import {NavLink} from "react-router-dom";
import {Drawer, MenuItem} from "material-ui";
import '../siedebar.css';
import {connect} from 'react-redux';
import * as sidebarActions from '../actions/sidebarActions';
import {bindActionCreators} from "redux";
import logo from '../logo.svg';
import '../App.css';

const Sidebar = (props) =>
    (
        <Drawer open={props.sidebar}>
            <div style={{height: 130}}>
                <img src={logo} className={"App-logo"}
                     style={{marginTop: 20, marginBottom: 20, marginRight: 60, marginLeft: 60}}/>
            </div>
            <div onClick={props.sidebarActions.closeSidebar}>
                <NavLink to={"/"}> <MenuItem className={"Item"}> Home </MenuItem>
                </NavLink>
            </div>
            <div onClick={props.sidebarActions.closeSidebar}>
                <NavLink to={"/manage"}><MenuItem className={"Item"}>Manage</MenuItem></NavLink>
            </div>
            <div onClick={props.sidebarActions.closeSidebar}>
                <NavLink to={"/manageuser"}> <MenuItem className={"Item"}> ManageWithId</MenuItem></NavLink>
            </div>
        </Drawer>
    );

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

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
