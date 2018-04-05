import React from 'react';
import {Link} from "react-router-dom";
import {Drawer, MenuItem} from "material-ui";

export default class Sidebar extends React.Component {
    render() {
        return (
            <Drawer open={this.props.isOpen}>
                <Link to={"/"}> <MenuItem> Home </MenuItem>
                </Link>
                <Link to={"/manage"}><MenuItem>Manage</MenuItem></Link>

                <MenuItem> <Link to={"/manageuser"}>ManageWithId</Link> </MenuItem>
            </Drawer>
        );
    }
}