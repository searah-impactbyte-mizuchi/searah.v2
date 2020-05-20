import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Logo1 from '../components/logo/bali.jpeg'
import Logo2 from '../components/logo/papua.jpg'
import Logo3 from '../components/logo/sulawesi.jpg'
import { makeStyles } from '@material-ui/core/styles';
 
const useStyles = makeStyles((theme) => ({

}));

export default function DemoCarousel () {
    const classes = useStyles()

        return (
            <Carousel showArrows={true} >
                <div>
                    <img src={Logo1} />
                    <p className="legend" >BALI</p>
                </div>
                <div>
                    <img src={Logo2}/>
                    <p className="legend">PAPUA</p>
                </div>
                <div>
                    <img src={Logo3} />
                    <p className="legend">SULAWESI</p>
                </div>
            </Carousel>
        )
    }

 
// ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));
 