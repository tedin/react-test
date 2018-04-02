import React from 'react';
import {Button, Header, Icon, Modal} from 'semantic-ui-react'

const ConfirmDialogModal = ({open, header, body, handleClose}) => {
    const handleOk = () => {
        alert("Ok clicked")
    };

    return (
        <Modal open={open}
               basic size={"mini"} dimmer={'blurring'}>
            <Header icon='browser' content={header}/>
            <Modal.Content>
                <h3>{body}</h3>
            </Modal.Content>
            <Modal.Actions>
                <Button basic color='red' onClick={handleClose} inverted>
                    <Icon name='remove'/> Close
                </Button>
                <Button color='green' onClick={handleOk}>
                    <Icon name='checkmark'/> Ok
                </Button>
            </Modal.Actions>
        </Modal>
    )
};

export default ConfirmDialogModal;