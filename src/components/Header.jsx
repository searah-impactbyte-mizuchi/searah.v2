import React from "react";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import "../App.css";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexWrap: "wrap",
    },

    "@global": {
        ul: {
            margin: 0,
            padding: 0,
            listStyle: "none",
        },
    },
    appBar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
        background: "#1F618D",
    },
    toolbar: {
        flexWrap: "wrap",
    },
    toolbarTitle: {
        flexGrow: 1,
        color: "white",
        fontFamily: "Fredericka the Great, cursive",
        fontSize: 40,
    },
    link: {
        margin: theme.spacing(1, 1.5),
        color: "white",
        fontFamily: "Comfortaa, cursive",
    },
    image: {
        maxWidth: 80,
    },
}));

export default function Pricing() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <React.Fragment>
                <CssBaseline />
                <AppBar
                    position="static"
                    color="default"
                    elevation={0}
                    className={classes.appBar}
                    
                >
                    <Toolbar className={classes.toolbar}>
                        <Typography
                            variant="h6"
                            color="inherit"
                            noWrap
                            className={classes.toolbarTitle}
                        >
                            {/* <img src={Logo} alt="" className={classes.image}/> */}
                            SEARAH
                        </Typography>
                        <nav className={classes.root}>
                            <Link
                                variant="button"
                                color="textPrimary"
                                href="./main-page"
                                className={classes.link}
                            >
                                Home
                            </Link>
                            <Link
                                variant="button"
                                color="textPrimary"
                                href="./trips"
                                className={classes.link}
                            >
                                Start a trip
                            </Link>
                            <Link
                                variant="button"
                                color="textPrimary"
                                href="./profile"
                                className={classes.link}
                            >
                                Profile
                            </Link>
                            <Link
                                variant="button"
                                color="textPrimary"
                                href="./profile"
                                className={classes.link}
                            >
                                About us
                            </Link>
                            <Link
                                variant="button"
                                color="textPrimary"
                                href="./"
                                className={classes.link}
                            >
                                Logout
                            </Link>
                        </nav>
                    </Toolbar>
                </AppBar>
            </React.Fragment>
        </div>
    );
}
