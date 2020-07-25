import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import data from '../data';
import { createMuiTheme, withStyles, makeStyles } from '@material-ui/core/styles';
import { green, purple } from '@material-ui/core/colors';
import './style.scss'
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

const BootstrapButton = withStyles({
  root: {
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    width:'75%',
    padding: '6px 12px',
    border: '1px solid',
    alignSelf:'center',
    lineHeight: 1.5,
    backgroundColor: '#0063cc',
    borderColor: '#0063cc',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      backgroundColor: '#0069d9',
      borderColor: '#0062cc',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#0062cc',
      borderColor: '#005cbf',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  },
})(Button);



const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  
  

}));

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



export class FormUserDetails extends Component {

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

  continue = (e,s) => {
    e.preventDefault();
    this.props.nextStep(s);
  };

  

  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <>
          <Dialog
          
          open={this.state.open}
            fullWidth
            maxWidth='sm'
            
          >
      <DialogTitle id="customized-dialog-title" onClose={this.handleClose}>
          Which body part you want to improve .
        </DialogTitle>
{ Object.keys(data).map(s=>(<><br/><BootstrapButton variant="contained" color="primary" disableRipple className={useStyles.margin}
              onClick={(e)=>this.continue(e,s)}
            >{s}</BootstrapButton></>
            
            ))}

          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default FormUserDetails;
