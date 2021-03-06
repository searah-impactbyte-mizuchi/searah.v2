import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import LocationOnIcon from "@material-ui/icons/LocationOn";

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: "56.25%", // 16:9
    },
    expand: {
        transform: "rotate(0deg)",
    },
    expandOpen: {
        transform: "rotate(180deg)",
    },
});

export default function ImgMediaCard(props) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="240"
                    image={props.avatar}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        <LocationOnIcon /> {props.destination}
                    </Typography>
                    {/* <Typography gutterBottom variant="h5" component="h2">
                        {props.description}
                    </Typography> */}
                    <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                    >
                            {props.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary" onClick={() => props.addMember(props.id)}>
                    Join
                </Button>
                <Link to={`/review/${props.id}`}>
                    <Button size="small" color="primary" href="" onClick="">
                        View
                </Button>
                </Link>
            </CardActions>
        </Card>
    );
}
