import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Container from "@material-ui/core/Container";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import FormRow from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper'

import { red } from '@material-ui/core/colors';
import CityCard from "./components/card"
import SearchInput from "./components/searchbar"
import ReviewCard from "./components/ReviewCard"
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';

import Header from "./components/Header"
// import Footer from "./components/Footer"


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

function StartJourney() {
    return (
        <Button variant="contained" color="secondary">Start your journey here <DirectionsRunIcon /> </Button>

    )
}


export default function MainPage() {
    const classes = useStyles();
    return (
        <form>
            <Header/>
            <Container component="main">
                <Grid
                    container
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justify="center"

                >
                    <Grid item xs={3}>
                        <SearchInput />
                    </Grid>
                </Grid>
                <Grid
                    container
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justify="center"

                >
                    <Grid item xs={3}>
                        <StartJourney />
                    </Grid>
                </Grid>
                <Container >
                    <Grid container spacing={2} className={classes.paper}>
                        <Grid item xs={3}>
                            <CityCard />
                        </Grid>
                        <Grid item xs={3}>
                            <CityCard />
                        </Grid>
                        <Grid item xs={3}>
                            <CityCard />
                        </Grid>
                        <Grid item xs={3}>
                            <CityCard />
                        </Grid>
                    </Grid>
                </Container>
                <Grid
                    container
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justify="center"
                >
                    <Grid item xs={3}>
                        <h1> Review </h1>
                    </Grid>
                </Grid>
                <Container >
                    <Grid container spacing={2} className={classes.paper}>
                        <Grid item xs={3}>
                            <ReviewCard />
                        </Grid>
                        <Grid item xs={3}>
                            <ReviewCard />
                        </Grid>
                        <Grid item xs={3}>
                            <ReviewCard />
                        </Grid>
                        <Grid item xs={3}>
                            <ReviewCard />
                        </Grid>
                    </Grid>
                </Container>
            </Container>
            {/* <Footer /> */}
        </form >
    )
}

