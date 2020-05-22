import React, { useEffect } from "react";
import {
    useParams,
    Link
} from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Footer from "../components/Footer";
import Header from "../components/Header";
import TableCell from "@material-ui/core/TableCell";
import Table from "@material-ui/core/Table";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import Typography from "@material-ui/core/Typography";
import "../App.css";
import Cardgroup from "../components/Cardgroup";
import RoomIcon from "@material-ui/icons/Room";
import DateRangeIcon from "@material-ui/icons/DateRange";
import PermPhoneMsgIcon from "@material-ui/icons/PermPhoneMsg";
import EmailIcon from "@material-ui/icons/Email";
import Chip from "@material-ui/core/Chip";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Checkbox from "../components/Checkbox";
import Rate from "../components/Rate";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import { fetchReview } from "../redux/actions/reviewActions";
import { useDispatch, useSelector } from "react-redux";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
    },
    toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
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
        display: "flex",
        overflow: "auto",
        flexDirection: "column",
        // background: "#fafafa"
    },
    fixedHeight: {
        fontFamily: "Comfortaa, cursive",
    },
    table: {
        height: 300,
    },
    pad: {
        // padding: 20,
        marginRight: 40,
        maxWidth: 200,
    },
    button: {
        fontFamily: "Comfortaa, cursive",
        fontSize: 15,
        marginTop: 30,
        // background: "#1F618D",
        // color: "white",
    },
    members: {
        fontFamily: "Comfortaa, cursive",
        padding: 50,
    },
    checkbox: {
        marginTop: 70,
    },
}));

export default function GroupReview() {
    const { id } = useParams();

    const classes = useStyles();

    const review = useSelector((state) => {

        return state.userReview;

    });
    const dispatch = useDispatch();

    const Uid = localStorage.getItem('userid')


    useEffect(() => {
        dispatch(fetchReview(id));
    }, [dispatch]);

    console.log(review.length > 0 &&
        review[0], "reviewaa");

    return (

        <div className={classes.root}>
            <CssBaseline />
            <main className={classes.content}>
                <Header />
                <div className={classes.appBarSpacer} />
                <Container maxWidth="lg" className={classes.container}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={9} lg={9}>
                            <Paper className={classes.paper}>
                                <Table>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell className={classes.font}>
                                                <h1>
                                                    {review.length > 0 &&
                                                        review[0].title}
                                                </h1>
                                            </TableCell>
                                            <TableCell>
                                                <li className={classes.root}>
                                                    <RoomIcon />
                                                    <Typography
                                                        className={classes.font}
                                                    >
                                                        {review.length > 0 &&
                                                            review[0].location}
                                                    </Typography>
                                                </li>
                                                <li className={classes.root}>
                                                    <DateRangeIcon />
                                                    <Typography
                                                        className={classes.font}
                                                    >
                                                        {review.length > 0 &&
                                                            review[0].from} to {review.length > 0 &&
                                                                review[0].to}
                                                    </Typography>

                                                </li>
                                            </TableCell>
                                        </TableRow>

                                        <TableRow>
                                            <TableCell className={classes.font}>
                                                <h3>Trip Details :</h3>
                                                <li className={classes.root}>
                                                    {review.length > 0 &&
                                                        review[0].description}
                                                </li>
                                            </TableCell>
                                        </TableRow>

                                        <TableRow>
                                            <TableCell className={classes.font}>
                                                <h3>Meet up point</h3>
                                                <li className={classes.root}>
                                                    <RoomIcon />
                                                    <Typography
                                                        className={classes.font}
                                                    >
                                                        {" "}
                                                        {review.length > 0 &&
                                                            review[0]
                                                                .meetupPoint}
                                                    </Typography>
                                                </li>
                                            </TableCell>
                                        </TableRow>

                                        <TableRow>
                                            <TableCell className={classes.font}>
                                                <h3>Trip Created by  {review.length > 0 &&
                                                    review[0]['user.username']}

                                                </h3>
                                                <Grid container spacing={3}>
                                                    <Grid>
                                                        <img
                                                            src={
                                                                (review.length >
                                                                    0 &&
                                                                    review[0][
                                                                    "user.avatar"
                                                                    ]) ||
                                                                null
                                                            }
                                                            alt="User_Avatar"
                                                            className={
                                                                classes.pad
                                                            }
                                                        />
                                                    </Grid>

                                                    <Grid>
                                                        <h4>Contact me :</h4>
                                                        <li
                                                            className={
                                                                classes.root
                                                            }
                                                        >
                                                            <EmailIcon />
                                                            <Typography
                                                                className={
                                                                    classes.font
                                                                }
                                                            >
                                                                {review.length > 0 &&
                                                                    review[0]['user.email']}

                                                            </Typography>
                                                        </li>
                                                    </Grid>
                                                </Grid>
                                                <Grid>
                                                    <Link
                                                        to={`/profile/${Uid}`}
                                                    >
                                                        <Chip
                                                            icon={
                                                                <AccountCircleIcon />
                                                            }
                                                            label="View Profile"
                                                            component="a"
                                                            clickable
                                                            className={
                                                                classes.button
                                                            }
                                                        />
                                                    </Link>
                                                </Grid>
                                            </TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </Paper>
                        </Grid>
                    </Grid>

                    <h3 className={classes.members}>Members :</h3>
                    <Grid container spacing={3}>
                        {review.length > 0 &&
                            review[0].members.map((item) => {
                                return (
                                    <Grid
                                        item
                                        xs={6}
                                        md={3}
                                        lg={2}
                                        key={item.id}
                                    >
                                        <Paper>
                                            <Cardgroup
                                                username={item.username}
                                                avatar={item.avatar}
                                                id={item.id}
                                            />
                                        </Paper>
                                    </Grid>
                                );
                            })}
                    </Grid>

                    <div className={classes.checkbox}>
                        <Checkbox />
                        <h3 className={classes.font}>Review :</h3>
                        <TextareaAutosize
                            aria-label="empty textarea"
                            rowsMax={5}
                            rowsMin={5}
                            placeholder="How was your trip ?"
                            className={classes.font}
                        />
                        <h3 className={classes.font}>Rate this Trip :</h3>
                        <Rate />
                    </div>

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
