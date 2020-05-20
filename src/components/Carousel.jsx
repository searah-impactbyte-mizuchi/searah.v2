import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'antd';
import Logo from '../components/logo/test.jpg'
import { makeStyles } from '@material-ui/core/styles';
import "../App.css"
import { Grid, Paper } from '@material-ui/core';
import { Row, Col } from 'antd';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
        // background: "lightblue",
        // textAlign: 'center',
        // color: theme.palette.text.secondary,
    },
}));
 
export default function DemoCarousel(){
    const classes = useStyles();

        return (
            // <Grid>
            //     <Paper className={classes.paper}>

            <Row>
      <Col span={24}>

      <Carousel autoplay>
    <div >
      <img src={Logo} alt="" className={classes.root}/>
    </div>
    <div>
    <img src={Logo} alt=""/>
    </div>
    <div>
    <img src={Logo} alt=""/>
    </div>
    <div>
    <img src={Logo} alt=""/>
    </div>
  </Carousel>

      </Col>
    </Row>

            
//   </Paper>
//  </Grid>
        );
    }

 
// ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));
