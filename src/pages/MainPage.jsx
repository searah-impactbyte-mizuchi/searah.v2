import React, { useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import FormRow from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import { red } from "@material-ui/core/colors";
import CityCard from "../components/MainCard";
import SearchInput from "../components/searchbar";
import ReviewCard from "../components/ReviewCard";
import SearchIcon from "@material-ui/icons/Search";

import Header from "../components/Header";
import Footer from "../components/Footer";

import { useDispatch, useSelector } from "react-redux";
import { fetchAllTrip } from "../redux/actions/mainAction";
import { getUser } from "../redux/actions/userActions";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: "center",
        color: theme.palette.text.secondary,
    },
}));

export default function MainPage() {
    const result = useSelector((state) => {
        return state.tripView;
    });
    const users = useSelector((state) => {
        return state.existingUser;
    });
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllTrip(), getUser());
    }, [dispatch]);

    const classes = useStyles();
    return (
        <form>
            <Header />
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
                ></Grid>
                <Container>
                    <Grid container spacing={2} className={classes.paper}>
                        {result.data != undefined &&
                            result.data.map((item) => {
                                return (
                                    <Grid item xs={3}>
                                        <CityCard
                                            destination={item.destination}
                                            description={item.description}
                                        />
                                    </Grid>
                                );
                            })}
                    </Grid>
                </Container>
            </Container>
            <Footer />
        </form>
    );
}
