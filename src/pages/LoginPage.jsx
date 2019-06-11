import React from 'react';
import {changeEmail, changePassword,LogIn } from '../action/LoginActions';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import redirect from "../utilite/redirect";
import { Link } from 'react-router-dom'

import styles from './styles.module.css';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const putStateToProps = (state) =>{
    return{
        user: state.user,
        login: state.login
    };
};

const putActionToProps = (dispatch) =>{
    return{
        changeEmail: bindActionCreators(changeEmail, dispatch),
        changePassword: bindActionCreators(changePassword, dispatch),
        LogIn: bindActionCreators(LogIn, dispatch),
    };
};

class LoginPage extends React.Component{

    componentDidMount() {
        // (this.props.user.loggedIn)?redirect('/'):null;
        if(this.props.user.loggedIn){
            redirect('/')
        }
    }
    render(){  
        return(
            <div className={styles['wrapper']}>
                <div className={styles['Container']}>


                    <div className={styles['loginWithUs']} >
                        <h3>Login with us</h3>
                        <TextField placeholder="Username" className={styles.inputsStyle} onChange={(e) => this.props.changeEmail(e.target.value)}/>

                        <TextField placeholder="Password" className={styles.inputsStyle} onChange={(e) => this.props.changePassword(e.target.value)}/>

                        <Button label="Default" className={styles.loginBTNStyle} onClick={() => this.props.LogIn({email:this.props.login.email,password: this.props.login.password})}> login </Button>
                        <div className={styles['buttonWrapper']}>
                            <Button label='Default' className={styles.registerBTNStyle} ><Link to='/register' className={styles.btnLinks}> Register</Link></Button>
                            <Button label='Default' className={styles.forgotBTNStyle} ><Link to='/forgotPassword' className={styles.btnLinks}> Forgot password</Link></Button>
                        </div>

                    </div>
                    <div className={styles['loginAll']}>
                        <h3>Login whis</h3>
                        <div className={styles['btnGroup']}>
                            <button className={styles['btn']}>Google</button>
                            <button className={styles['btn']}>Google</button>
                            <button className={styles['btn']}>Google</button>
                        </div>
                    </div>


                </div>
            </div>
        )
    }
}

export default connect(putStateToProps,putActionToProps)(LoginPage);

