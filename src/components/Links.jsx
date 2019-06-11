import React from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import Button from '@material-ui/core/Button';

import {remouveLink, editLink} from '../action/actionsForLinks';
const putStateToProps = (state) =>{
    return{
        user: state.user
    };
};

const putActionToProps = (dispatch) =>{
    return{
        remouveLink: bindActionCreators(remouveLink, dispatch),
        editLink: bindActionCreators(editLink, dispatch),
    };
};

class Links extends React.Component{

    render(){
        const renderLinks = this.props.user.links.map((linkObj) =>{
            return (
            <div key = {linkObj.id}>
                <a href={linkObj.link}>{linkObj.name}</a>
                <Button color= 'secondary' onClick={() => this.props.remouveLink(linkObj)}>remouve</Button>
                <Button color= 'primary' onClick={() => this.props.editLink(linkObj)}>edit </Button>
            </div>)
        });
        return(
            <div>
                {renderLinks}
            </div>
        )
    }
}

export default connect(putStateToProps, putActionToProps)(Links);
