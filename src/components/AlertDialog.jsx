import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {openDialog, closeDialog, saveDialog, changeNameLink, changeLink } from '../action/dialogActions';

import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';

const putStateToProps = (state) =>{
    return{
		open: state.user.openDialog,
		newLink : state.user.newLink,
		isDisabled : state.user.DiseblebleBTN,
    };
};

const putActionToProps = (dispatch) =>{
    return{
        openDialog: bindActionCreators(openDialog, dispatch),
        closeDialog: bindActionCreators(closeDialog, dispatch),
		saveChange:  bindActionCreators(saveDialog, dispatch),
		changeNameLink : bindActionCreators(changeNameLink, dispatch),
		changeLink : bindActionCreators(changeLink, dispatch),
    };
};


class AlertDialog extends React.Component {

	render() {
		return (
			<div>
				<Button variant="outlined" color="primary" onClick={this.props.openDialog}>
					add links
				</Button>
				<Dialog
				open={this.props.open}
				onClose={this.props.closeDialog}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
				>
					<DialogTitle id="alert-dialog-title">{"add new link"}</DialogTitle>
					<DialogContent>			
						<DialogContentText id="alert-dialog-description">
							link's name
						</DialogContentText>
						<input defaultValue={this.props.newLink.name} onChange={(e) => this.props.changeNameLink(e.target.value)}/>
						<DialogContentText id="alert-dialog-description">
							link
						</DialogContentText>
						<input defaultValue={this.props.newLink.link} onChange={(e) => this.props.changeLink(e.target.value)}/>
					</DialogContent>
					<DialogActions>
						<Button onClick={this.props.closeDialog} color="primary">
							close
						</Button>
						<Button onClick={() => this.props.saveChange(this.props.newLink)} color="primary" >
							saves
						</Button>
						
					</DialogActions>
				</Dialog>
			</div>
		);
	}
}

export default connect(putStateToProps, putActionToProps)(AlertDialog);
