import React from "react";
import clsx from "clsx";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Header from "../components/Header";
import "../App.css";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepConnector from "@material-ui/core/StepConnector";
import ExploreIcon from "@material-ui/icons/Explore";
import CardTravelIcon from "@material-ui/icons/CardTravel";
import FlightTakeoffIcon from "@material-ui/icons/FlightTakeoff";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import "date-fns";
import Destination from "./Trip/Destination";
import DetailTrip from "./Trip/DetailTrip";
import MeetupPoint from "./Trip/MeetupPoint";
import Box from "@material-ui/core/Box";
import Footer from "../components/Footer";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { addTrip } from "../redux/actions/tripActions";


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
    },
    toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
    },
    toolbarIcon: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        padding: "0 8px",
        ...theme.mixins.toolbar,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    menuButtonHidden: {
        display: "none",
    },
    title: {
        flexGrow: 1,
    },
    drawerPaper: {
        position: "relative",
        whiteSpace: "nowrap",
        width: drawerWidth,
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: "hidden",
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up("sm")]: {
            width: theme.spacing(9),
        },
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: "100vh",
        overflow: "auto",
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
        display: "flex",
        justifyContent: "center",
        width: "100%",
        flexWrap: "wrap",
    },
    paper: {
        padding: theme.spacing(2),
        display: "flex",
        overflow: "auto",
        flexDirection: "column",
        background: "#ffffff",
        boxShadow: "none",
        width: "80%",
        justifyContent: "center",
    },
    fixedHeight: {
        height: 630,
    },
    table: {
        height: 375,
    },
    font: {
        fontFamily: "Comfortaa, cursive",
    },
    spasi: {
        "& > *": {
            margin: theme.spacing(1),
        },
    },
}));

const ColorlibConnector = withStyles({
    alternativeLabel: {
        top: 22,
    },
    active: {
        "& $line": {
            backgroundImage:
                "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
        },
    },
    completed: {
        "& $line": {
            backgroundImage:
                "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
        },
    },
    line: {
        height: 3,
        border: 0,
        backgroundColor: "#eaeaf0",
        borderRadius: 1,
    },
})(StepConnector);

const useColorlibStepIconStyles = makeStyles({
    root: {
        backgroundColor: "#ccc",
        zIndex: 1,
        color: "#fff",
        width: 50,
        height: 50,
        display: "flex",
        borderRadius: "50%",
        justifyContent: "center",
        alignItems: "center",
    },
    active: {
        backgroundImage:
            "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
        boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
    },
    completed: {
        backgroundImage:
            "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
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
    return ["Destination", "Trip Details", "Start Trip"];
}

function getStepContent(
    step,
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    setFieldValue
) {
    switch (step) {
        case 0:
            return (
                <Destination
                    values={values}
                    errors={errors}
                    touched={touched}
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    setFieldValue={setFieldValue}
                />
            );
        case 1:
            return (
                <DetailTrip
                    values={values}
                    errors={errors}
                    touched={touched}
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    setFieldValue={setFieldValue}
                />
            );
        case 2:
            return (
                <MeetupPoint
                    values={values}
                    errors={errors}
                    touched={touched}
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                />
            );
        default:
            return "Unknown step";
    }
}

export default function Dashboard() {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();
    const dispatch = useDispatch();
    const history = useHistory();

    

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
    const Uid = localStorage.getItem('userid')
    localStorage.getItem('userid', JSON.stringify(Uid))

    return (
        <div
            className={classes.root}
            style={{ display: "flex", justifyContent: "center" }}
        >
            <CssBaseline />
            <main className={classes.content}>
                <Header />

                <div className={classes.appBarSpacer} />
                <div>
                    <Container maxWidth="lg" className={classes.container}>
                        <Stepper
                            alternativeLabel
                            activeStep={activeStep}
                            connector={<ColorlibConnector />}
                            style={{ width: "80%" }}
                        >
                            {steps.map((label) => (
                                <Step key={label}>
                                    <StepLabel
                                        StepIconComponent={ColorlibStepIcon}
                                    >
                                        {label}
                                    </StepLabel>
                                </Step>
                            ))}
                        </Stepper>
                        <Grid
                            item
                            xs={12}
                            md={8}
                            lg={12}
                            style={{
                                width: "50%",
                                display: "flex",
                                justifyContent: "center",
                            }}
                        >
                            <Formik
                                initialValues={{
                                    location: "",
                                    destination: "",
                                    description: "",
                                    title: "",
                                    meetupPoint: "",
                                    user_id: Uid,
                                    members: "",
                                    from: new Date("2020-05-22T21:11:54"),
                                    to: new Date("2020-05-23T21:11:54"),
                                }}
                                validate={(values) => {
                                    const errors = {};
                                    if (!values.location) {
                                        errors.location = "Required";
                                    }
                                    if (!values.destination) {
                                        errors.destination = "Required";
                                    }
                                    if (!values.description) {
                                        errors.description = "Required";
                                    }
                                    if (!values.title) {
                                        errors.title = "Required";
                                    }
                                    if (!values.meetupPoint) {
                                        errors.meetupPoint = "Required";
                                    }

                                    return errors;
                                }}
                                onSubmit={async (values) => {
                                    
                                    await dispatch(addTrip(values));
                                    console.log(values);
                                    history.push("./profile");
                                    // setTimeout(() => {
                                    // alert(JSON.stringify(values, null, 2));
                                    // }, 400);
                                }}
                            >
                                {({
                                    values,
                                    errors,
                                    touched,
                                    handleChange,
                                    handleBlur,
                                    handleSubmit,
                                    isSubmitting,
                                    setFieldValue,
                                }) => (
                                        <Paper className={fixedHeightPaper}>
                                            <form onSubmit={handleSubmit}>
                                                {activeStep === steps.length ? (
                                                    <div>
                                                        <Typography
                                                            className={
                                                                classes.instructions
                                                            }
                                                        >
                                                            All steps completed -
                                                            you&apos;re finished
                                                    </Typography>
                                                        <Button
                                                            onClick={handleReset}
                                                            className={
                                                                classes.button
                                                            }
                                                        >
                                                            Reset
                                                    </Button>
                                                    </div>
                                                ) : (
                                                        <React.Fragment>
                                                            {getStepContent(
                                                                activeStep,
                                                                values,
                                                                errors,
                                                                touched,
                                                                handleChange,
                                                                handleBlur,
                                                                setFieldValue
                                                            )}
                                                            <div
                                                                style={{
                                                                    display: "flex",
                                                                    justifyContent:
                                                                        "center",
                                                                    margin: "50px",
                                                                }}
                                                            >
                                                                <Button
                                                                    disabled={
                                                                        activeStep === 0
                                                                    }
                                                                    onClick={handleBack}
                                                                    className={
                                                                        classes.button
                                                                    }
                                                                >
                                                                    Back
                                                        </Button>
                                                                {activeStep ===
                                                                    steps.length - 1 ? (
                                                                        <Button
                                                                            variant="contained"
                                                                            color="primary"
                                                                            type="submit"
                                                                            disabled={
                                                                                isSubmitting
                                                                            }
                                                                        >
                                                                            Start Trip
                                                            </Button>
                                                                    ) : (
                                                                        <Button
                                                                            variant="contained"
                                                                            color="primary"
                                                                            onClick={
                                                                                handleNext
                                                                            }
                                                                            className={
                                                                                classes.button
                                                                            }
                                                                        >
                                                                            Next
                                                            </Button>
                                                                    )}
                                                            </div>
                                                        </React.Fragment>
                                                    )}
                                            </form>
                                        </Paper>
                                    )}
                            </Formik>
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
