import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';



const useStyles = makeStyles((theme) => ({
  root: {
    height: 150,
    transform: 'translateZ(0px)',
    flexGrow: 1,
    
    // '& > *': {
    //   margin: theme.spacing(1),
    // },
  },
  speedDial: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  
}));

export default function FormDialog() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
       <Fab 
       color="secondary" 
       aria-label="edit" 
       onClick={handleClickOpen} 
       className={classes.speedDial}
       >
        <EditIcon />
      </Fab>
      <Dialog 
      open={open} 
      onClose={handleClose} 
      aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Create and Edit Profile</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Add some information about yourself to share on your profile. Let people know about you.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="email"
            fullWidth
          />
           <TextField
            
            margin="dense"
            id="name"
            label="Where are you come from"
            type="email"
            fullWidth
          />
           <TextField
            
            margin="dense"
            id="name"
            label="Age"
            type="email"
            fullWidth
          />
           <TextField
            
            margin="dense"
            id="name"
            label="About"
            type="email"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
