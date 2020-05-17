import React from 'react';
import clsx from 'clsx';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Header from "../components/Header"
import '../App.css'
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepConnector from '@material-ui/core/StepConnector';
import ExploreIcon from '@material-ui/icons/Explore';
import CardTravelIcon from '@material-ui/icons/CardTravel';
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import 'date-fns';
import Destination from './components/Destination'
import DetailTrip from './components/DetailTrip'
import MeetupPoint from './components/MeetupPoint'
import Box from '@material-ui/core/Box';
import Footer from "../components/Footer"


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    menuButtonHidden: {
        display: 'none',
    },
    title: {
        flexGrow: 1,
    },
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
        },
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
        display: "flex",
        justifyContent: "center",
        width: "100%",
        flexWrap: "wrap"
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
        background: "#ffffff",
        boxShadow: "none",
        width: "80%",
        justifyContent: "center"
    },
    fixedHeight: {
        height: 630,
    },
    table: {
        height: 375,
    },
    font: {
        fontFamily: 'Comfortaa, cursive',
    },
    spasi: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

const ColorlibConnector = withStyles({
    alternativeLabel: {
        top: 22,
    },
    active: {
        '& $line': {
            backgroundImage:
                'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
        },
    },
    completed: {
        '& $line': {
            backgroundImage:
                'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
        },
    },
    line: {
        height: 3,
        border: 0,
        backgroundColor: '#eaeaf0',
        borderRadius: 1,
    },
})(StepConnector);

const useColorlibStepIconStyles = makeStyles({
    root: {
        backgroundColor: '#ccc',
        zIndex: 1,
        color: '#fff',
        width: 50,
        height: 50,
        display: 'flex',
        borderRadius: '50%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    active: {
        backgroundImage:
            'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
        boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
    },
    completed: {
        backgroundImage:
            'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
    },
});

function ColorlibStepIcon(props) {
    const classes = useColorlibStepIconStyles();
    const { active, completed } = props;

    const icons = {
        1: <ExploreIcon />,
        2: <CardTravelIcon />,
        3: <FlightTakeoffIcon />,
    };

    return (
        <div
            className={clsx(classes.root, {
                [classes.active]: active,
                [classes.completed]: completed,
            })}
        >
            {icons[String(props.icon)]}
        </div>
    );
}

ColorlibStepIcon.propTypes = {
    /**
     * Whether this step is active.
     */
    active: PropTypes.bool,
    /**
     * Mark the step as completed. Is passed to child components.
     */
    completed: PropTypes.bool,
    /**
     * The label displayed in the step icon.
     */
    icon: PropTypes.node,
};

function getSteps() {
    return ['Destination', 'Trip Details', 'Start Trip'];
}

function getStepContent(step) {
    switch (step) {
        case 0:
            return <Destination />
        case 1:
            return <DetailTrip />
        case 2:
            return <MeetupPoint />;
        default:
            return 'Unknown step';
    }
}

// const theme = createMuiTheme({
//     palette: {
//         primary: green,
//     },
// });

export default function Dashboard() {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    // const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

    // const handleDateChange = (date) => {
    //     setSelectedDate(date);
    // };

    return (
        <div className={classes.root} style={{ display: "flex", justifyContent: "center" }}>
            <CssBaseline />
            <main className={classes.content}>

                <Header />

                <div className={classes.appBarSpacer} />
                <div>
                    <Container maxWidth="lg" className={classes.container}>
                        <Stepper alternativeLabel activeStep={activeStep} connector={<ColorlibConnector />} style={{ width: "80%" }}>
                            {steps.map((label) => (
                                <Step key={label}>
                                    <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
                                </Step>
                            ))}
                        </Stepper>
                        <Grid item xs={12} md={8} lg={12} style={{ width: "50%", display: "flex", justifyContent: "center" }}>
                            <Paper className={fixedHeightPaper}>
                                <div>
                                    {activeStep === steps.length ? (
                                        <div>
                                            <Typography className={classes.instructions}>
                                                All steps completed - you&apos;re finished
                                            </Typography>
                                            <Button onClick={handleReset} className={classes.button}>
                                                Reset
                                            </Button>
                                        </div>
                                    ) : (
                                            <div>
                                                <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
                                                <div style={{ display: "flex", justifyContent: "center", margin: "50px" }}>
                                                    <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                                                        Back
                                                    </Button>
                                                    <Button
                                                        variant="contained"
                                                        color="primary"
                                                        onClick={handleNext}
                                                        className={classes.button}
                                                    >
                                                        {activeStep === steps.length - 1 ? 'Start Trip' : 'Next'}
                                                    </Button>
                                                </div>
                                            </div>
                                        )}
                                </div>

                            </Paper>
                        </Grid>
                        <Box pt={4}>
                            <Grid container spacing={1}>
                                <Footer />
                            </Grid>
                        </Box>

                    </Container>
                </div>

            </main>
        </div>
    );
}