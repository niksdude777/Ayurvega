import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import data from '../data';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import { withStyles } from '@material-ui/core/styles';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import Link from "next/link";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

export class FormPersonalDetails extends Component {

  constructor(props){
    super(props)
     this.state={
       open:true
     }
  }
   handleClose = () => {
    this.setState({open:false});
    this.props.setOpen(false)
  };
  continue = e => {
    console.log(this.props.disease_category)
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    
   
    return (
      <>
     
      <MuiThemeProvider>
        <>
          <Dialog
            open={this.state.open}
            fullWidth
            maxWidth='sm'
          >
             <DialogTitle id="customized-dialog-title" onClose={this.handleClose}>
          Please select the issue that you are facing
        </DialogTitle>
            { Object.values(data[this.props.disease_category]).map(s=>(<><br/><Link href="/landing"><Button
              color="primary"
              variant="contained"
              
            >{s}</Button></Link></>
            
            ))}
            <AppBar title="Enter Personal Details" />
            <br/>
            <Button
              color="secondary"
              variant="contained"
              onClick={this.back}
            >Back</Button>

           
          </Dialog>
        </>
      </MuiThemeProvider>
      </>
    );
  }
}

export default FormPersonalDetails;
