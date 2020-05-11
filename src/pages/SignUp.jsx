
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
import CallMergeIcon from '@material-ui/icons/CallMerge';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';


function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {"Copyright © "}
            <MaterialLink color="inherit" href="https://material-ui.com/">
                Impactbyte Mizuchi
            </MaterialLink>{" "}
            {new Date().getFullYear()}
            {"."}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
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
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
}));

export default function SignUp() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    const [state, setState] = React.useState({
        age: '',
        name: 'hai',
    });

    const handleToChange = (event) => {
        const name = event.target.name;
        setState({
            ...state,
            [name]: event.target.value,
        });
    };

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Typography component="h1" variant="h4">
                    SEARAH
                </Typography>
                <Avatar className={classes.avatar} style={{ backgroundColor: "#33CC33" }}>
                    <CallMergeIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
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
                        history.push("/")
                        // dispatch(register(values));
                        // console.log(values);

                        // alert(JSON.stringify(values))
                        // console.log(JSON.stringify.value);

                    }}
                >
                    {({
                        handleChange,
                        handleSubmit,
                        values,
                        isSubmitting,
                        handleBlur,
                        errors,
                        touched

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
                                                required
                                                fullWidth
                                                id="username"
                                                label="User Name"
                                                onChange={handleChange}
                                                value={values.username}
                                                onBlur={handleBlur}
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
                                            <FormControl variant="outlined" className={classes.formControl}>
                                                <InputLabel htmlFor="outlined-age-native-simple">Gender</InputLabel>
                                                <Select
                                                    native
                                                    value={state.gender}
                                                    onChange={handleToChange}
                                                    variant="outlined"
                                                    // required
                                                    // fullWidth
                                                    id="gender"
                                                    label="gender"
                                                    type="gender"
                                                    name="gender"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    // value={values.gender}
                                                    className={classes.textField}
                                                    inputProps={{
                                                        name: 'gender',
                                                        id: 'outlined-age-native-simple',
                                                        shrink: true,
                                                    }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    <option value={10}>Male</option>
                                                    <option value={20}>Female</option>
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
                                        color="primary"
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
                        >
                            Already have an account? Sign in
                        </Link>
                    </Grid>
                </Grid>
            </div>
            <Box mt={5}>
                <Copyright />
            </Box>
        </Container>
    );
}
