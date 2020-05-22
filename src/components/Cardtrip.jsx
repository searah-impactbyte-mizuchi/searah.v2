import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import '../App.css'
import Chip from '@material-ui/core/Chip';
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    // background: "lightblue",
  },
  details: {
    display: 'flex',
    flexDirection: 'column',

  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
    // background: "lightblue"
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
  font: {
    fontFamily: 'Comfortaa, cursive',
    fontSize: 10,
  },
  fontSize: {
    fontSize: 15,
    fontFamily: 'Comfortaa, cursive',
  },
  pad: {
    padding: 10,
  },
  button: {
    fontFamily: 'Comfortaa, cursive',
    fontSize: 10,
    background: "#1F618D",
    color: "white"
  }
}));

export default function MediaControlCard(props) {
  const classes = useStyles();


  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h6" variant="h6" className={classes.fontSize}>
            {props.description}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary" className={classes.font}>
            <li className={classes.root}>{props.destination}</li>
            <li className={classes.root}>{props.from}</li>
          </Typography>
        </CardContent>
        <div className={classes.pad}>
          <Link to={`/review/${props.id}`} style={{textDecoration: "none"}}>
            <Chip
              label="View Details"
              component="a"
              clickable
              className={classes.button}
            />
          </Link>
        </div>
      </div>
    </Card>
  );
}
