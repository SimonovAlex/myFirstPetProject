import React from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import redirect from "../utilite/redirect";
import Links from "../components/Links";
import AlertDialog from "../components/AlertDialog";
import Button from '@material-ui/core/Button';
// import { Link } from 'react-router-dom'
const putStateToProps = (state) =>{
    return{
        user: state.user
    };
};


class PersonalAreaPage extends React.Component{
    componentDidMount(){
        if(!this.props.user.loggedIn){
            redirect('/login')
        }
    }

    render(){
        return(
            <div>
                <h3>You cutaway: <a href={this.props.user.cutawayHTTP}>{this.props.user.cutawayHTTP}</a></h3>
                
                <div>
                    <h4>You links: </h4>
                    <Links />
                    <AlertDialog/>
                </div>
                
                <h4>if you want see you cutaway, send this button</h4>
                <Button color='default' href={this.props.user.cutawayHTTP} >send me</Button>
            </div>
        )
    }
}

export default connect(putStateToProps)(PersonalAreaPage);
