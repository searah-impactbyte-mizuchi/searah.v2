import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CityCard from "../components/MainCard";
import SearchInput from "../components/searchbar";
import ReviewCard from "../components/ReviewCard";

import { useDispatch, useSelector } from "react-redux";
import { fetchAllTrip } from "../redux/actions/mainAction";
import { getUser } from "../redux/actions/userActions";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
    },
    toolbar: {
        paddingRight: 24,
    },
    toolbarIcon: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        padding: "0 8px",
        ...theme.mixins.toolbar,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    menuButtonHidden: {
        display: "none",
    },
    title: {
        flexGrow: 1,
    },
    drawerPaper: {
        position: "relative",
        whiteSpace: "nowrap",
        width: drawerWidth,
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: "hidden",
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up("sm")]: {
            width: theme.spacing(9),
        },
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: "100vh",
        overflow: "auto",
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    paper: {
        padding: theme.spacing(2),
        // display: 'flex',
        // overflow: 'auto',
        // flexDirection: 'row',
        // background: "lightblue",
        textAlign: "center",
        color: theme.palette.text.secondary,
    },
    fixedHeight: {
        height: 180,
        opacity: 0.5,
    },
}));

export default function MainPage() {
    const result = useSelector((state) => {
        return state.tripView;
    });


    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllTrip(), getUser());
    }, [dispatch]);

    const classes = useStyles();
    
    const addMember = (id) => {
        console.log(id);
        
    }

    return (
        <div className={classes.root}>
            <CssBaseline />
            <main className={classes.content}>
                <Header />

                <div className={classes.appBarSpacer} />
                <Container maxWidth="lg" className={classes.container}>
                    <Grid
                        container
                        spacing={3}
                        alignItems="center"
                        justify="center"
                        direction="column"
                    >
                        <Grid item xs={12} md={4} lg={4}>
                            <div
                                className={classes.paper}
                                style={{ marginBottom: 50 }}
                            >
                                <SearchInput />
                            </div>
                        </Grid>
                    </Grid>

                    <Grid container spacing={3}>
                        {result.data !== undefined &&
                            result.data.map((item) => {
                                console.log(result);
                                
                                return (
                                    <Grid
                                        item
                                        xs={12}
                                        md={4}
                                        lg={3}
                                        key={item.id}
                                    >
                                        <div className={classes.paper}>
                                            <CityCard
                                                destination={item.destination}
                                                description={item.description}
                                                addMember={addMember}
                                                id={item.id}
                                            />
                                        </div>
                                    </Grid>
                                );
                            })}
                    </Grid>

                    <h1
                        style={{
                            textAlign: "center",
                            padding: 50,
                            fontFamily: "Comfortaa, cursive",
                            color: "#fae7c5",
                        }}
                    >
                        {" "}
                        Review{" "}
                    </h1>

                    <Grid container spacing={3}>
                        <Grid item xs={12} md={4} lg={3}>
                            <div className={classes.paper}>
                                <ReviewCard />
                            </div>
                        </Grid>

                        <Grid item xs={12} md={4} lg={3}>
                            <div className={classes.paper}>
                                <ReviewCard />
                            </div>
                        </Grid>

                        <Grid item xs={12} md={4} lg={3}>
                            <div className={classes.paper}>
                                <ReviewCard />
                            </div>
                        </Grid>

                        <Grid item xs={12} md={4} lg={3}>
                            <div className={classes.paper}>
                                <ReviewCard />
                            </div>
                        </Grid>
                    </Grid>

                    <Box pt={4}>
                        <Grid container spacing={1}>
                            <Footer />
                        </Grid>
                    </Box>
                </Container>
            </main>
        </div>
    );
}