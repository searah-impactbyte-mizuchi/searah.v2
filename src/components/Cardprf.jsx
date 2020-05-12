import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Logo from './logo/profile.JPG'
import '../App.css'


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 300,
  },
  text: {
    fontFamily: 'Comfortaa, cursive',
  }
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image= {Logo}
          title="Contemplative Reptile"
        />
        
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" className = {classes.text}>
          Edit Image
        </Button>
      </CardActions>
    </Card>
  );
}