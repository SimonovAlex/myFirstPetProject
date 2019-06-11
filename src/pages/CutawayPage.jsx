import React from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';

// import {getDataLinksForCutaway} from '../action/actions';
import {getDataLinksForCutaway} from '../action/action';




import LinksForCutaway from '../components/LinksForCutaway'
const putStateToProps = (state) =>{
    return{
        user: state.cutaway
    };
};

const putActionToProps = (dispatch) =>{
    return{
        getDataLinks: bindActionCreators(getDataLinksForCutaway, dispatch),
    };
};

class PersonalAreaPage extends React.Component{

    render(){
        return(
            <div>
                <h2>{this.props.user.name}</h2>
                <h2>{this.props.user.serName}</h2>

                <LinksForCutaway />
               
                
            </div>
        )
    }
}

export default connect(putStateToProps, putActionToProps)(PersonalAreaPage);
