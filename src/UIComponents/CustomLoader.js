import React from 'react';
import {connect} from 'react-redux';
import './customLoader.css';
import {LinearProgress} from "material-ui";

{/*
<Loader type="ball-grid-pulse" active={props.customLoader.active}/>
*/
}


const CustomLoader = (props) => (props.customLoader.active && <LinearProgress mode="indeterminate"/>);


function mapStateToProps(state, ownProps) {
    return {
        customLoader: state.customLoader
    };
}

export default connect(mapStateToProps)(CustomLoader)

