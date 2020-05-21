import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Logo from '../components/logo/Erfan.JPG'
import { List } from '@material-ui/core';

const list = {
    listStyle: "none",
};

const useStyles = makeStyles({
  root: {
    maxWidth: 360,
  },
  media: {
    height: 350,
  },
  text: {
    textAlign: "center",
    fontFamily: "Comfortaa, cursive",
  },
  text2: {
    textAlign: "center",
    fontFamily: "Comfortaa, cursive",
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={Logo}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" className={classes.text2}>
            Erfan Noer Rochman
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p">
           <li style={list} className={classes.text}>
               
           </li>
           <li  style={list} className={classes.text}>
               Full Stack Web Developer
           </li>
           <li style={list}></li>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      </CardActions>
    </Card>
  );
}
