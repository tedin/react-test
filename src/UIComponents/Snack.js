import React, {Component} from 'react';
import {Snackbar} from 'material-ui';
import {connect} from 'react-redux';
import * as snackBarActions from "../actions/snackBarActions";
import {bindActionCreators} from "redux";

class Snack extends Component {

    render() {
        return (
            <Snackbar
                open={this.props.options.open}
                message={this.props.options.message}
                //action="undo"
                autoHideDuration={this.props.options.autoHideDuration}
                //onActionClick={this.handleActionClick}
                onRequestClose={this.props.actions.hideSnackBar}
            />
        );
    }
}

function mapStateToProps(state, props) {
    return {options: state.snackBar};
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(snackBarActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Snack);
