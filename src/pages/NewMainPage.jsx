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
import Carousel from "../components/Carousel2"
import { Paper, TableCell } from "@material-ui/core";



const drawerWidth = 240;

const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 1,
            width: 400,
        }}
    />
);

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
        // paddingTop: theme.spacing(4),
        // paddingBottom: theme.spacing(4),
        paddingLeft: 0,
        paddingRight: 0,
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
        height: 450,
        width: 350,
        margin: 0,
        
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

                <Container maxWidth="0" className={classes.container}>
                <Header />
                        <Carousel/>

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
                    <Grid item xs={12} md={12} lg={1}>
                        <Paper >
                            {/* pembatas */}
                        </Paper>
                    </Grid>

                    <Grid item xs={12} md={12} lg={10}>
                        <div>
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
                    </div>
                    </Grid>

                    <Grid item xs={12} md={12} lg={1}>
                        <Paper >
                            {/* pembatas */}
                        </Paper>
                    </Grid>
                    </Grid>


                                        

                    <div style={{ marginTop: 100, marginBottom: 100}}>  
                    <h1
                        style={{
                            textAlign: "center",
                            fontFamily: "Comfortaa, cursive",
                            justifyContent: "center"
                            
                        }}
                    >
                        {" "}
                        Review{" "}
                    </h1>
                    <ColoredLine color="black" />
                    </div>

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


                    {/* <Grid container spacing={3}>
                        <Grid item xs={12} md={6} lg={6}>
                            <Paper className={classes.paper}>
                            <iframe src="https://www.youtube.com/embed/DIuDK9ONLOc" 
                            frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                        </iframe>
                            </Paper>
                        </Grid>

                        <Grid item xs={12} md={6} lg={6}>
                            <div className={classes.paper}>
                            <iframe src="https://www.youtube.com/embed/DIuDK9ONLOc" 
                            frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                        </iframe>
                            </div>
                        </Grid>
                        </Grid> */}

                        
                            <Grid container spacing={3} style={{ marginTop: 100}}>
                            <Grid item xs={12} md={6} lg={3}>
                            <div
                                className="video"
                                style={{
                                    position: "relative",
                                    paddingBottom: "56.25%" /* 16:9 */,
                                    paddingTop: 25,
                                    height: 0
                                }}
                                >
                                <iframe
                                    style={{
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    width: "100%",
                                    height: "100%"
                                    }}
                                    src={`https://www.youtube.com/embed/Zpo4CCYjDb4`}
                                    frameBorder="0"
                                />
                                </div>
                                </Grid>

                                <Grid item xs={12} md={6} lg={3}>
                            <div
                                className="video"
                                style={{
                                    position: "relative",
                                    paddingBottom: "56.25%" /* 16:9 */,
                                    paddingTop: 25,
                                    height: 0
                                }}
                                >
                                <iframe
                                    style={{
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    width: "100%",
                                    height: "100%"
                                    }}
                                    src={`https://www.youtube.com/embed/AlTYyTB9xRY`}
                                    frameBorder="0"
                                />
                                </div>
                                </Grid>

                                <Grid item xs={12} md={6} lg={3}>
                            <div
                                className="video"
                                style={{
                                    position: "relative",
                                    paddingBottom: "56.25%" /* 16:9 */,
                                    paddingTop: 25,
                                    height: 0
                                }}
                                >
                                <iframe
                                    style={{
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    width: "100%",
                                    height: "100%"
                                    }}
                                    src={`https://www.youtube.com/embed/PUY26b2JfQY`}
                                    frameBorder="0"
                                />
                                </div>
                                </Grid>

                                <Grid item xs={12} md={6} lg={3}>
                            <div
                                className="video"
                                style={{
                                    position: "relative",
                                    paddingBottom: "56.25%" /* 16:9 */,
                                    paddingTop: 25,
                                    height: 0
                                }}
                                >
                                <iframe
                                    style={{
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    width: "100%",
                                    height: "100%"
                                    }}
                                    src={`https://www.youtube.com/embed/DB2xG9FAAy8`}
                                    frameBorder="0"
                                />
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
