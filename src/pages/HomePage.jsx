import React , {Component} from 'react';
import connect from "react-redux/es/connect/connect";
import redirect from "../utilite/redirect";
// import {LogIn} from '../action/LoginActions';
// import {bindActionCreators} from "redux";
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'

const putStateToProps = (state) =>{
    return{user: state.user,};
};

const putActionToProps = (dispatch) =>{
    return{};
};

class HomePage extends Component{
    componentDidMount() {
        if(!this.props.user.loggedIn){
            redirect('/login');
        }
    }

    render(){
        return(
            <div>
                Home
                <Button><Link to="/personalArea">Personal area</Link></Button>
                <Button><Link to="/cutaway">Cutaway</Link></Button>
            </div>
        );
    }
}

export default  connect(putStateToProps,putActionToProps)(HomePage);
