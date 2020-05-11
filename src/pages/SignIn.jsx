
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
import { Link } from "react-router-dom";
import MaterialLink from "@material-ui/core/Link";
import CallMergeIcon from '@material-ui/icons/CallMerge';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import LockIcon from '@material-ui/icons/Lock';
// import { useDispatch, useSelector } from "react-redux"
// import { login } from "../redux/actions/SignIn"

import { useSelector, useDispatch } from "react-redux"
import { loginUser } from "../redux/actions/loginActions"
// import { getUser } from "../redux/actions/userActions"



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
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function SignIn() {
    const classes = useStyles();
    // const existingUser = useSelector(state => state.existingUser)
    const dispatch = useDispatch();

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Typography component="h1" variant="h4">
                    SEARAH
                </Typography>
                <Avatar className={classes.avatar}>
                    <CallMergeIcon />
                </Avatar>
                <Formik
                    initialValues={{
                        email: "",
                        password: "",
                    }}
                    validate={(values) => {
                        const errors = {};
                        if (!values.email) {
                            errors.email = "Required";
                        } else if (
                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                                values.email
                            )
                        ) {
                            errors.email = "Invalid email address";
                        }

                        if (!values.password) {
                            errors.password = "Required";
                        }

                        return errors;
                    }}
                    onSubmit={async(values) => {
                        await dispatch(loginUser(values));
                        // console.log(values);
                        
                        alert(JSON.stringify(values))


                        // const existingUser = userList.find((element) => element.email === values.email);


                        // if (existingUser === undefined) {
                        //     alert('user tidak ditemukan');
                        // } else if (
                        //     existingUser.password !== values.password ||
                        //     existingUser.email !== values.email
                        // ) {
                        //     alert('email/password salah');
                        // } else if (
                        //     existingUser.role === `admin`
                        // ) {
                        //     alert('selamat datang admin ');
                        // } else if (
                        //     existingUser.status === `pending`
                        // ) {
                        //     alert('mohon maaf silahkan tunggu dulu ea');
                        // } else {
                        //     localStorage.setItem('isLogin', true);
                        //     localStorage.setItem('userData', JSON.stringify(existingUser));
                        //     alert(`selamat datang kembali ${existingUser.name}`);
                        //     this.props.history.push('/dashboard');
                        // }
                    }}
                >
                    {({
                        handleChange,
                        handleSubmit,
                        values,
                        isSubmitting,
                        errors,
                        touched,
                    }) => {
                        return (
                            <form
                                className={classes.form}
                                noValidate
                                onSubmit={handleSubmit}
                            >
                                <TextField
                                    className={classes.margin}
                                    id="email"
                                    placeholder="Email"
                                    fullWidth
                                    name="email"     
                                    type="email"
                                    autoComplete="current-email"
                                    onChange={handleChange}
                                    value={values.email}
                                    
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <AccountCircle />
                                            </InputAdornment>
                                        ),
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
                                <TextField
                                
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="password"
                                    placeholder="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    onChange={handleChange}
                                    value={values.password}

                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <LockIcon />
                                            </InputAdornment>
                                        ),
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
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="danger"
                                    className={classes.submit}
                                    disabled={isSubmitting}
                                >
                                    Sign In
                                </Button>
                                <Grid container justify="flex-end">
                                    <Grid item>
                                        <Link
                                            to="/sign-up"
                                            style={{ textDecoration: "none" }}
                                        >
                                            {"Don't have an account? Sign Up"}
                                        </Link>
                                    </Grid>
                                </Grid>
                            </form>
                        );
                    }}
                </Formik>
            </div>
            <Box mt={8}>
                <Copyright />
            </Box>
        </Container>
    );
}