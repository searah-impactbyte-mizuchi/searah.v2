import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import Logo from "./logo/profile.JPG";
import "../App.css";
import Chip from "@material-ui/core/Chip";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
    root: {
        display: "flex",
    },
    media: {
        height: 200,
        width: 200,
    },
    text: {
        fontFamily: "Comfortaa, cursive",
        marginLeft: 10,
    },
    button: {
        fontFamily: "Comfortaa, cursive",
        fontSize: 10,
        background: "#1F618D",
        color: "white",
    },
});

export default function CardGroup(props) {
    const classes = useStyles();

    console.log(props, "propsd");



    return (
        <Card className={classes.root}>
            <div>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={
                            props.avatar !== null && props.avatar !== ""
                                ? props.avatar
                                : Logo
                        }
                        title="Profile_Image"
                    />
                </CardActionArea>
                <Typography className={classes.text}>
                    {props.username}
                </Typography>
                <CardActions>
                    <Link to={`/profile/${props.id}`} style={{textDecoration: "none"}}>
                        <Chip
                            label="View Profile"
                            component="a"
                            clickable
                            className={classes.button}
                        />
                    </Link>
                </CardActions>
            </div>
        </Card>
    );
}