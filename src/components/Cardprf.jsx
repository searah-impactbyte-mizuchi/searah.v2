import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import "../App.css";
import Chip from "@material-ui/core/Chip";

const useStyles = makeStyles({
    root: {
        maxWidth: 385,
    },
    media: {
        height: 300,
    },
    text: {
        fontFamily: "Comfortaa, cursive",
    },
    button: {
        fontFamily: "Comfortaa, cursive",
        fontSize: 10,
        background: "#1F618D",
        color: "white",
    },
});

export default function MediaCard(props) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={`${props.image}`}
                    title="Contemplative Reptile"
                />
            </CardActionArea>
            <CardActions>
                <Chip
                    label="Edit Image"
                    component="a"
                    href="/http://localhost:3000/review"
                    clickable
                    className={classes.button}
                />
            </CardActions>
        </Card>
    );
}
