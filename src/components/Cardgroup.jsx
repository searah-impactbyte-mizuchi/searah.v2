import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Logo from './logo/profile.JPG'
import '../App.css'
import Chip from '@material-ui/core/Chip';
import { Typography } from '@material-ui/core';


const useStyles = makeStyles({
  root: {
   display: 'flex',
   
   
  },
  media: {
    height: 200,
    width: 200
  },
  text: {
    fontFamily: 'Comfortaa, cursive',
    marginLeft: 10
  },
  button: {
    fontFamily: 'Comfortaa, cursive',
    fontSize: 10,
    background: "#1F618D",
    color: "white",
  }
});

export default function MediaCard(props) {
  const classes = useStyles();
  console.log(props.avatar, "PROPS");
  

  return (
    <Card className={classes.root}>
      <div>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image= {props.avatar != null? props.avatar:Logo}
          title="Contemplative Reptile"
        />
        
      </CardActionArea>
      <Typography className={classes.text}>{props.username}</Typography>
      <CardActions>
      <Chip 
          label="View Profile" 
          component="a" 
          href="#chip" 
          clickable
          className={classes.button}
          />
      </CardActions>
      </div>
    </Card>
  );
}