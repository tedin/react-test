import React from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as userActions from '../actions/userActions';
import {Tab, Tabs} from "material-ui";
import UserForm from "./UserForm";


/*
const TabOne = (props) => {
    console.log(props);
    return (
        <div>

        </div>
    );
};
*/

const TabTwo = (props) => {
    console.log(props);
    return (
        <p>Tab two content</p>
    );
};

const TabThree = (props) => {
    console.log(props);
    return (
        <p>Tab three content</p>
    );
};

const ManageUser = (props) => {
    const styles = {
        headline: {
            fontSize: 24,
            paddingTop: 16,
            marginBottom: 12,
            fontWeight: 400,
        },
    };
    console.log(props);
    console.log(props.match.params.id);

    return (
        <div>
            <Tabs>
                <Tab label="Item One">
                    <div>
                        <UserForm {...props}/>
                    </div>
                </Tab>
                <Tab label="Item Two">
                    <div>
                        <h2 style={styles.headline}>Tab Two</h2>
                        <TabTwo/>
                    </div>
                </Tab>
                <Tab
                    label="onActive"
                    data-route="/home"
                >
                    <div>
                        <h2 style={styles.headline}>Tab Three</h2>
                        <TabThree/>
                    </div>
                </Tab>
            </Tabs>
        </div>
    )

};

ManageUser.defaultProps = {
    //name: "test"
};

ManageUser.propTypes = {
    //users: PropTypes.array.isRequired,
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
        actions: bindActionCreators(userActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageUser)