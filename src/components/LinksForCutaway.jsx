import React from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {remouveLink, editLink} from '../action/actionsForLinks';
// import history from '../history';

const putStateToProps = (state) =>{
    return{
        links: state.cutaway.links
    };
};

const putActionToProps = (dispatch) =>{
    return{
        remouveLink: bindActionCreators(remouveLink, dispatch),
        editLink: bindActionCreators(editLink, dispatch),
    };
};

class LinksForCutaway extends React.Component{


    render(){
        const renderLinks = this.props.links.map((linkObj) =>{
            return (
                <div key={linkObj.id}><a href={linkObj.link}>{linkObj.name}</a></div>
            )
        });
        
        return(
            <div>
                {renderLinks}
            </div>
        )
    }
}

export default connect(putStateToProps, putActionToProps)(LinksForCutaway);
