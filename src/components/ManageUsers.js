import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as userActions from '../actions/userActions';

class ManageUsers extends Component {
    constructor(props) {
        super(props);
    }

    /*componentDidMount() {
        
    }*/

    render() {
        return (<div>TEST</div>);
    }
}

ManageUsers.defaultProps = {
    //name: "test"
};

ManageUsers.propTypes = {
    //users: PropTypes.array.isRequired,
    //createUser: PropTypes.func.isRequired
    //actions: PropTypes.object
};

function mapStateToProps(state, props) {
    return {
        //users: state.users
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(userActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageUsers)