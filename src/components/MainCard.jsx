import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
});

export default function ImgMediaCard() {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="240"
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTpG49OSZb11MZ9KX1aSFly9lnNxBbZck55f9uYpbYEzd9bHO9B&usqp=CAU"
                    title="Contemplative Reptile"       
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        <LocationOnIcon /> Bali
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
                        Trip to Bali
          </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                    Hello! I am from Canada and going to Bali for about 2 weeks. I love surfing (even if I only did i...
          </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Click to go
        </Button>
            </CardActions>
        </Card>
    );
}