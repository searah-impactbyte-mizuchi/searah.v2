import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Formik } from "formik";
import { Link, useHistory } from "react-router-dom";
import MaterialLink from "@material-ui/core/Link";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/actions/userActions";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import Logo from "../components/logo/Tourist.jpg";

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {"Copyright © "}
            <MaterialLink color="inherit" href="https://material-ui.com/">
                SEARAH
            </MaterialLink>{" "}
            {new Date().getFullYear()}
            {"."}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(16),
        marginBottom: theme.spacing(16),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        background:
            "linear-gradient(rgba(81, 86, 137),rgba(102, 151, 167),rgba(140, 205, 194),rgba(190, 218, 199),rgba(250, 235, 208),transparent)",
        // background:"linear-gradient(rgba(255, 209, 176),rgba(255, 130, 154),rgba(226, 125, 161),rgba(132, 108, 152),rgba(53, 110, 154),transparent)",
        // backgroundColor: "#faebd0",
        padding: 5,
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: "100%", // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        // fontFamily: 'Kalam, cursive',
        fontFamily: "Comfortaa, cursive",
        backgroundColor: "#8ccdc2",
        background:
            "linear-gradient(rgba(81, 86, 137),rgba(102, 151, 167, 0.5),transparent)",
        color: "whitesmoke",
    },
    container: {
        display: "flex",
        flexWrap: "wrap",
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 178,
        // backgroundColor: "whitesmoke"
    },
    large: {
        width: theme.spacing(20),
        height: theme.spacing(20),
        margin: 20,
    },
    font: {
        // fontFamily: 'Kalam, cursive',
        fontFamily: "Comfortaa, cursive",
        // backgroundColor: "whitesmoke"
    },
    font2: {
        // fontFamily: 'Kalam, cursive',
        fontFamily: "Comfortaa, cursive",
        color: "whitesmoke",
        marginTop: 10,
    },
    font3: {
        // fontFamily: 'Kalam, cursive',
        fontFamily: "Comfortaa, cursive",
        // color: "whitesmoke"
    },
    background: {
        display: "flex",
        flexDirection: "column",
        marginTop: theme.spacing(8),
        alignItems: "center",
    },
    floatingLabelFocusStyle: {
        color: "#0c3854",
        fontFamily: "Comfortaa, cursive",
    },
}));

export default function SignUp() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Typography
                    component="h1"
                    variant="h4"
                    className={classes.font2}
                >
                    SEARAH
                </Typography>
                <Avatar alt="Remy Sharp" src={Logo} className={classes.large} />
                {/* <Avatar className={classes.avatar} style={{ backgroundColor: "#33CC33" }}>
                    <CallMergeIcon />
                </Avatar> */}
                <Typography
                    component="h1"
                    variant="h5"
                    className={classes.font2}
                >
                    Sign up
                </Typography>
                <Formik
                    initialValues={{
                        username: "",
                        gender: "",
                        email: "",
                        password: "",
                    }}
                    validate={(values) => {
                        const errors = {};
                        if (!values.username) {
                            errors.username = "Required";
                        }
                        if (!values.gender) {
                            errors.gender = "Required";
                        }

                        if (!values.password) {
                            errors.password = "Required";
                        }

                        if (!values.email) {
                            errors.email = "Required";
                        } else if (
                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                                values.email
                            )
                        ) {
                            errors.email = "Invalid email address";
                        }

                        return errors;
                    }}
                    onSubmit={async (values) => {
                        await dispatch(addUser(values));
                        history.push("/");
                    }}
                >
                    {({
                        handleChange,
                        handleSubmit,
                        values,
                        isSubmitting,
                        handleBlur,
                        errors,
                        touched,
                    }) => {
                        return (
                            <div>
                                <form
                                    className={classes.form}
                                    noValidate
                                    onSubmit={handleSubmit}
                                >
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                autoComplete="username"
                                                name="username"
                                                variant="outlined"
                                                // required
                                                fullWidth
                                                id="username"
                                                label="User Name"
                                                onChange={handleChange}
                                                value={values.username}
                                                onBlur={handleBlur}
                                                className={classes.font}
                                                InputLabelProps={{
                                                    className:
                                                        classes.floatingLabelFocusStyle,
                                                }}
                                            />
                                            <p
                                                style={{
                                                    color: "red",
                                                    fontStyle: "italic",
                                                }}
                                            >
                                                {errors.username &&
                                                    touched.username &&
                                                    errors.username}
                                            </p>
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <FormControl
                                                variant="outlined"
                                                className={classes.formControl}
                                            >
                                                <InputLabel
                                                    htmlFor="outlined-age-native-simple"
                                                    style={{
                                                        marginLeft: "8px",
                                                    }}
                                                    className={
                                                        classes.floatingLabelFocusStyle
                                                    }
                                                >
                                                    Gender
                                                </InputLabel>
                                                <Select
                                                    native
                                                    value={values.gender}
                                                    // onChange={handleToChange}
                                                    variant="outlined"
                                                    // required
                                                    fullWidth
                                                    id="gender"
                                                    label="gender"
                                                    type="gender"
                                                    name="gender"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    // value={values.gender}
                                                    className={
                                                        classes.textField
                                                    }
                                                    inputProps={{
                                                        name: "gender",
                                                        id:
                                                            "outlined-age-native-simple",
                                                        shrink: true,
                                                    }}
                                                >
                                                    <option
                                                        aria-label="None"
                                                        value=""
                                                    />
                                                    <option value="Male">
                                                        Male
                                                    </option>
                                                    <option value="Female">
                                                        Female
                                                    </option>
                                                    {/* <option value={30}>T</option> */}
                                                </Select>
                                            </FormControl>
                                            {/* <TextField
                                                variant="outlined"
                                                required
                                                fullWidth
                                                id="gender"
                                                label="gender"
                                                type="gender"
                                                name="gender"
                                                className={classes.textField}
                                                InputProps={{
                                                    shrink: true,
                                                }}
                                                
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.gender}
                                                
                                            /> */}
                                            <p
                                                style={{
                                                    color: "red",
                                                    fontStyle: "italic",
                                                }}
                                            >
                                                {errors.gender &&
                                                    touched.gender &&
                                                    errors.gender}
                                            </p>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                variant="outlined"
                                                required
                                                fullWidth
                                                id="email"
                                                label="Email Address"
                                                name="email"
                                                autoComplete="email"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.email}
                                                className={classes.font}
                                                InputLabelProps={{
                                                    className:
                                                        classes.floatingLabelFocusStyle,
                                                }}
                                            />
                                            <p
                                                style={{
                                                    color: "red",
                                                    fontStyle: "italic",
                                                }}
                                            >
                                                {errors.email &&
                                                    touched.email &&
                                                    errors.email}
                                            </p>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                variant="outlined"
                                                required
                                                fullWidth
                                                name="password"
                                                label="Password"
                                                type="password"
                                                id="password"
                                                autoComplete="current-password"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.password}
                                                className={classes.font}
                                                InputLabelProps={{
                                                    className:
                                                        classes.floatingLabelFocusStyle,
                                                }}
                                            />
                                            <p
                                                style={{
                                                    color: "red",
                                                    fontStyle: "italic",
                                                }}
                                            >
                                                {errors.password &&
                                                    touched.password &&
                                                    errors.password}
                                            </p>
                                        </Grid>
                                    </Grid>
                                    <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        // color="#c78daa"
                                        className={classes.submit}
                                        disabled={isSubmitting}
                                    >
                                        Sign Up
                                    </Button>
                                </form>
                            </div>
                        );
                    }}
                </Formik>
                <Grid container justify="flex-end">
                    <Grid item>
                        <Link
                            to="/"
                            style={{ textDecoration: "none" }}
                            className={classes.font3}
                        >
                            Already have an account? Sign in
                        </Link>
                    </Grid>
                </Grid>
                <Box mt={5}>
                    <Copyright />
                </Box>
            </div>
        </Container>
    );
}
