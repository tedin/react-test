import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class Test extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    /*componentDidMount() {
        
    }*/

    render() {
        return ();
    }
}

Test.defaultProps = {
    //name: "test"
};

Test.propTypes = {
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
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Test)