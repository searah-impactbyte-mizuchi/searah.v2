 
import React from "react";
import { connect } from "react-redux";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import EditIcon from "@material-ui/icons/Edit";

import { updateUser, getUser } from "../redux/actions/userActions";

const useStyles = makeStyles((theme) => ({
    root: {
        height: 150,
        transform: "translateZ(0px)",
        flexGrow: 1,

        // '& > *': {
        //   margin: theme.spacing(1),
        // },
    },
    speedDial: {
        position: "absolute",
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
}));

function FormDialog({ updateUser }) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [username, setName] = React.useState("");
    const [avatar, setAvatar] = React.useState("");
    const [from, setFrom] = React.useState("");
    const [age, setAge] = React.useState("");
    const [about, setAbout] = React.useState("");

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSave = async () => {

        const Uid = localStorage.getItem('userid')

        localStorage.getItem('userid', JSON.stringify(Uid))

        console.log(Uid,"uid");
        

        const userProfile = {
            id: Uid,
            username,
            from,
            avatar,
            age,
            about,
        };

        updateUser(userProfile);

        console.log(userProfile);
        

        getUser(userProfile.id);

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
                <DialogTitle id="form-dialog-title">
                    Create and Edit Profile
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Add some information about yourself to share on your
                        profile. Let people know about you.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="Name"
                        label="Name"
                        type="text"
                        fullWidth
                        value={username}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <TextField
                        margin="dense"
                        id="City"
                        label="City"
                        type="text"
                        fullWidth
                        value={from}
                        onChange={(e) => setFrom(e.target.value)}
                    />
                    <TextField
                        margin="dense"
                        id="Age"
                        label="Age"
                        type="number"
                        fullWidth
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                    />
                    <TextField
                        margin="dense"
                        id="About"
                        label="About"
                        type="text"
                        fullWidth
                        value={about}
                        onChange={(e) => setAbout(e.target.value)}
                    />
                    <TextField
                        margin="dense"
                        id="Avatar"
                        label="Avatar"
                        type="text"
                        fullWidth
                        value={avatar}
                        onChange={(e) => setAvatar(e.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleSave} color="primary">
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default connect(null, { updateUser })(FormDialog);