import React from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as dialogActions from "../actions/dialogActions";
import {Dialog, FlatButton} from "material-ui";


class ConfirmDialog extends React.Component {
    handleClose = () => {
        const data = "cancel data";
        this.props.closeConfirmDialog();
        this.props.options.onCancel(data)
    };
    handleSubmit = () => {
        const data = "Some data";
        this.props.closeConfirmDialog();
        this.props.options.onSubmit(data);
    };

    constructor(props) {
        super(props);
        this.state = {
            open: Object.assign({}, this.props.options.open)
        };
    }

    render() {
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onClick={this.handleClose}
            />,
            <FlatButton
                label="Submit"
                primary={true}
                keyboardFocused={true}
                onClick={this.handleSubmit}
            />,
        ];

        return (
            <div>
                <Dialog
                    title={this.props.options.title}
                    actions={actions}
                    modal={false}
                    open={this.props.options.open}
                    onRequestClose={this.handleClose}>
                    {this.props.options.content}
                </Dialog>
            </div>
        );
    }
}

function mapStateToProps(state, props) {
    return {options: state.confirmDialog};
}

function mapDispatchToProps(dispatch) {
    return {
        ...bindActionCreators(dialogActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmDialog);