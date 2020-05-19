import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Container from "@material-ui/core/Container";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import { red } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
    border: {
        border: "solid",
        // color: "blue"
    },
}));




const location = [
    { city: "Bali" },
    { city: "malang" },
    { city: "Surabaya" },
    { city: "Bandung" },
    { city: "Jogjakarta" },
    { city: "Semarang" },
    { city: "Papua" },
    { city: "Citayam" },
];


function SearchInput() {
    const classes = useStyles();

    return (
        <div className={classes.root} >
            <Autocomplete
                freeSolo
                id="free-solo-2-demo"
                // onClick={this.handleClick}
                disableClearable
                options={location.map((option) => option.city)}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label="Search input"
                        margin="normal"
                        variant="outlined"
                        InputProps={{ ...params.InputProps, type: 'search' }}
                        className={classes.border}
                    />
                )}
            />
        </div>
    );
}

export default SearchInput